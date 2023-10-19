class ClosetsController < ApplicationController
    before_action :authenticate_user!

    def index
        respond_to do |format|
            format.html do
                gon.user = {
                    fname: current_user.fname,
                    lname: current_user.lname
                }
            end
            format.json do
              render json: current_user.closets.as_json(
                only: %i(id category),
                methods: [:count_items ]
            )
            end
        end
    end

    def new
    end

    def create
    end

    def show
        @closets = Closet.all
    end
end
