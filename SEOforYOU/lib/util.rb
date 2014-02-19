class Util

  require 'openssl'
  require 'net/http/'

  # Method to send curl request to url passed and return JSON response for the same
  #
  # Author: Akshay
  # Date: 19-02-2014
  #
  # <b>Expects</b>
  # * <b>params[:url]</b> <em>String</em> - URL to get json response from.
  #
  # <b>Returns</b>
  # * <b>json</b> <em>Hash</em> - JSON parse response for the website
  #
  def curl_request(params)
    return {:success => false, :msg => 'Please provide mandatory params', :json_response => {}} if params[:url].blank?
    begin
      uri = URI.parse(params[:url])
      http = Net::HTTP.new(uri.host, uri.port)
      http.use_ssl = true
      http.verify_mode = OpenSSL::SSL::VERIFY_NONE

      request = Net::HTTP::Get.new(uri.request_uri)
      response = http.request(request)
      json_response = JSON.parse(response)
    rescue Exception => e
      puts "Exception Occurred - Message: #{e.message}, Backtrace:#{e.backtrace.inspect}"
      return {:success => false, :msg => "Exception occurred - #{e.message}", :json_response => {}}
    end
    {:success => true, :msg => '', :json_response => json_response}
  end

end