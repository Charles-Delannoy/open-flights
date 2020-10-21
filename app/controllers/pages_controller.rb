class PagesController < ApplicationController
  def index
    @airlines = Airline.all
  end
end
