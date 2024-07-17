---
title: Mandelbrot Sandbox
link: https://mandelbrot.ezequielschwartzman.org
sourceLink: https://github.com/Zequez/mandelbrot-sandbox
thumbnail: /assets/mandelbrot-sandbox.png
iframe: https://mandelbrot.ezequielschwartzman.org
date: 2020-10-31
tags:
  - React
  - Tailwind
  - Front-end
  - Rust
  - Web Assembly
  - Mandelbrot
creationType: software
isPublished: true
isOnline: true
description: A sandbox to play with and explore the Mandelbrot fractal.
language:
  - en
releases:
  -
    version: 0.1.0
    date: 2020-10-31
    description: ''
---

The Mandelbrot is a fractal pattern created by a mathematical function. Some liken it to the Buddha sitting on meditation,
and give the fractal a sort of divine meaning about mathemathics.

Anyway, I think it's really cool, and I wanted to be able to zoom in and out and just explore it. Since I couldn't find a tool that did this on the web, I built my own.

The math calculation is written in Rust, which is compiled to Web Assembly and called from JavaScript. The purpose of this, in theory, is for optimization; however, I haven't actually compared it to just doing the calculations in JavaScript directly.

There is a caveat with the current implementation. Due to how the calculation is done, when you zoom in it needs to use higher and higher precision floating numbers. At some point you reach the limit of the floating numbers precision and you cannot zoom in anymore. I know there is a way to go around this limitation (because I asked ChatGPT about it), but I haven't implemented yet here. Maybe for version 0.2.0.

