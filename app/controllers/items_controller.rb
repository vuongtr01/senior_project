class ItemsController < ApplicationController
    before_action :authenticate_user!
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
end
