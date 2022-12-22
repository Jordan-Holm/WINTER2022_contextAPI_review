class Api::ItemTypesController < ApplicationController

  before_action :set_item, only: [ :show, :update, :destroy ]

  def index
    render json: ItemType.all
  end

  def show
    render json: @item_type
  end

  def create

    @item_type = ItemType.new(item_params)

    if @item_type.save
      render json: @item_type
    else
      render json: { errors: @item_type.errros }, status: :unprocessable_entity
    end

  end

  def update

    if @item_type.update(item_params)
      render json: @item_type
    else
      render json: { errors: @item_type.errors }, status: :unprocessable_entity
    end

  end

  def destroy

    @item_type.destroy
    render json: { message: "Item deleted" }
    
  end

  private

    def set_item
      @item_type = ItemType.find(params[:id])
    end

    def item_params
      params.require(:item_type).permit(:iname, :desc)
    end
end
