class ClosetsController < ApplicationController
    before_action :authenticate_user!

    def index
        respond_to do |format|
            format.html do
                gon.user = {
                    fname: current_user.fname,
                    lname: current_user.lname,
                    userId: current_user.id,
                }
            end
            format.json do
                if params[:search].present?
                    render json: current_user.closets.search(params[:search]).as_json(
                        only: %i(id category),
                        methods: [:count_items ]
                    )
                else
                    render json: current_user.closets.as_json(
                        only: %i(id category),
                        methods: [:count_items ]
                    )
                end
            end
        end
    end

    def new
        @closet = Closet.new
    end

    def create
        new_closet = Closet.new(closet_params)
        json_data = { errors: [], id: nil }
        status = :ok
        if new_closet.save
            json_data[:id] = new_closet.id
        else
            json_data[:errors] = new_closet.errors.full_messages
            status = :unprocessable_entity
        end
        render(json: json_data, status: status)
    end

    def show
        @closet = current_user.closets.where(id: params[:id]).first
        gon.closetInfo = {
            category: @closet.category,
            closetId: @closet.id,
            items: @closet.items.map do |i|
                i.as_json(only: [
                    :id,
                    :name,
                    :location,
                    :buy_date,
                    :expr_date,
                    :amount,
                    :image,
                    :price 
                ])
            end
        }
    end

    def destroy
        json_data = { errors: [], closets: [] }
        status = :ok
        @closet = Closet.find(params[:id])
        if @closet.items.destroy_all && @closet.destroy
            json_data[:closets] = current_user.closets.as_json(
                only: %i(id category),
                methods: [:count_items ]
            )
        else
            json_data[:errors] = new_closet.errors.full_messages
            status = :unprocessable_entity
        end
        render(json: json_data, status: status)
    end

    def autocomplete
        result = []
        if params[:key].present?
            result = current_recruiter.closets
              .search(params[:key])
              .as_json(
                only: %i(id fname lname email default_location),
                methods: %i(fullname avatar_url integrated_calendar availability_json)
              )
          end
    end

    private
    def closet_params
        params.require(:closet).permit(
            Closet::PERMITTED_ATTRS 
        )
    end
end
