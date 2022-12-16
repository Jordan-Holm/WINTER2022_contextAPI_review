class Api::ProductsController < ApplicationController
  
  before_action :set_parent
  before_action :set_product, only: [ :show, :update, :destroy ]

  def index
    render json: @item_type.products
  end

  def show
    render json: @product
  end

  def create

    @product = @item_type.products.new(product_params)

    if @product.save
      render json: @product
    else
      render json: { errors: @product.errors }, status: :unprocessable_entity
    end

  end

  def update

    if @product.update(product_params)
      render json: @product
    else
      render json: { errors: @product.errors }, status: :unprocessable_entity
    end

  end

  def destroy
    @product.destroy
    render json: { message: "product deleted" }
  end

  private

    def set_parent
      @item_type = Item_type.find(params[:item_type_id])
    end

    def set_product
      @product = @item_type.products.find(params[:id])
    end

    def product_params
      params.require(:product).permit( :pname, :desc, :price, :item_type_id)
    end
end
