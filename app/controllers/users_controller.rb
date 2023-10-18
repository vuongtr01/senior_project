class UsersController < ApplicationController
    before_action :set_user

    def index
    end

    def show
        @user = User.find(params[:id])
    end

    def set_user
        @user = User.find(params[:id])
    end
end
