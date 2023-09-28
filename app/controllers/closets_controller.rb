class ClosetsController < ApplicationController
    def index
        current_user = User.find(1)
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
end
