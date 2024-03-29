# frozen_string_literal: true

class Users::SessionsController < Devise::SessionsController
  # before_action :configure_sign_in_params, only: [:create]

  # GET /resource/sign_in
  def new
    super
  end

  # POST /resource/sign_in
  # def create
  #   puts 'login'
  #   set_flash_message!(:success, :signed_in)
  #   respond_with resource, location: after_sign_in_path_for(resource)
  # end

  # DELETE /resource/sign_out
  def destroy
    super
  end

  # protected

  # If you have extra params to permit, append them to the sanitizer.
  # def configure_sign_in_params
  #   devise_parameter_sanitizer.permit(:sign_in, keys: [:attribute])
  # end
  private

  def after_sign_in_path_for(resource)
    stored_location = stored_location_for(resource)
    set_flash_message!(:success, :signed_in)
    if stored_location.present?
      return stored_location
    else
      "/"
    end
  end

  def after_sign_out_path_for(_)
    "/users/sign_in"
  end
end
