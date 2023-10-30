class ItemsController < ApplicationController
    before_action :authenticate_user!
    def new
        gon.itemInfo = {
            closetId: params[:closet_id]
        }
    end

    def create
        @new_item = Item.new(item_params)
        json_data = { errors: [], closet_id: nil }
        status = :ok
        if @new_item.save!
            json_data[:closet_id] = @new_item.closet_id
        else
            json_data[:errors] = @new_item.errors.full_messages
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
