class IndexController < ApplicationController

  require 'page_rankr'

  def index

  end

  def submit
    puts "params are : #{params}"
    rank_info = PageRankr.ranks(params[:website])
    render :json => rank_info
  end

end