---
layout: page
title: About
permalink: /about/
---

This is the basic Bridgetown site theme. You can find out more info about customizing your Bridgetown site, as well as basic Bridgetown usage documentation at [bridgetownrb.com](https://bridgetownrb.com/)

You can find the source code for Bridgetown at GitHub:
[bridgetownrb](https://github.com/bridgetownrb) /
[bridgetown](https://github.com/bridgetownrb/bridgetown)

Here is a code snippet:

```ruby
require 'async'
require 'net/http'
require 'uri'

Async do
  ["ruby", "rails", "async"].each do |topic|
    Async do
      Net::HTTP.get(URI "https://www.google.com/search?q=#{topic}")
    end
  end
end
```
