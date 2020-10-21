class AirlinesController < ApplicationController

  def index
    @airlines = Airline.all
  end

  def show
    @airline = Airline.find(params[:id])
  end

  def edit
    @airline = Airline.find(params[:id])
  end

  def new
    @airline = Airline.new
  end

  def create
    airline = Airline.new(airline_params)
    if airline.save
      redirect_to root_path
    else
      render :new
    end
  end

  def update
    airline = Airline.find(params[:slug])
    if airline.update(airline_params)
      redirect_to airline_path(airline)
    else
      render :new
    end
  end

  private

  def airline_params
    params.require(:airline).permit(:name, :image_url)
  end
end
