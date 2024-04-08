class ItemsController < ApplicationController
    before_action :authenticate_user!
    def new
        closet = params[:closet_id] ? current_user.closets.find(params[:closet_id]) : nil
        gon.itemInfo = {
            closet: closet ? {
                id: closet.id,
                value: closet.category,
                label: closet.category
            } : nil
        }
    end

    def index
        if params[:search].present?
            gon.items = current_user.items
                .search(params[:search])
                .as_json(only: [
                :closet_id,
                :id,
                :name,
                :location,
                :buy_date,
                :expr_date,
                :amount,
                :price 
            ], methods: :image_url)
        else
            gon.items = current_user.items.map do |i|
                i.as_json(only: [
                    :closet_id,
                    :id,
                    :name,
                    :location,
                    :buy_date,
                    :expr_date,
                    :amount,
                    :price 
                ], methods: :image_url)
            end
        end
    end

    def edit
        @item = Item.find(params[:id])
        gon.itemInfo = @item.json_data
    end

    def update
        @item = Item.find(params[:id])
        json_data = { errors: [], closet_id: nil }
        status = :ok

        if @item.update!(item_params)
            json_data[:closet_id] = @item.closet_id
        else
            json_data[:errors] = @item.errors.full_messages
            status = :unprocessable_entity
        end
        render(json: json_data, status: status)
    end

    def destroy
        @item = Item.find(params[:id])
        json_data = { errors: [] }
        status = :ok
        if !@item.destroy
            json_data[:errors] = @item.errors.full_messages
            status = :unprocessable_entity
        end
        render(json: json_data, status: status)
    end

    private
    def item_params
        params.require(:item).permit(
            Item::PERMITTED_ATTRS 
        )
    end
end
