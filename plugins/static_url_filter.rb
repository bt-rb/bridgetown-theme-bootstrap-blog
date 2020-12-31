class StaticUrlFilter < SiteBuilder
  def build
    liquid_filter "static_url", filters_scope: true do |url|
      return "NO_URL" unless url

      "#{@context.registers[:site].baseurl}/_bridgetown/static/#{url}"
    end
  end
end
