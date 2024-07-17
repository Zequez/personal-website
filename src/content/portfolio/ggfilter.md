---
title: GGFilter
link: ''
sourceLink: https://github.com/Zequez/ggfilter-client
thumbnail: /assets/ggfilter.png
iframe: ''
date: 2017-05-05
tags:
  - JavaScript / TypeScript
  - React
  - CSS / SASS
  - Ruby on Rails
  - Redux
creationType: software
isPublished: true
isOnline: false
description: A filterable games database
language:
  - en
releases: []
---

![Screenshot](/assets/ggfilter.png)

GGFilter was a filterable database of games; scraped from Steam and from the Oculus Store.

It was in 3 parts, all equally important.

The scrapers are bundled in a pure ruby gem with different submodules for each type of scraping: games list, game pages and reviews from Steam, and video cards benchmarks (for the system requirements index).

The Rails server works mostly as an API and has the Rake tasks to run the different scrapers on cronjobs.

The client is made with React+Redux and it communicates with the server through the API.

The project is not under active development and after the free Heroku shut down, so did GGFilter; the scrapers hadn't been working for a while anyway