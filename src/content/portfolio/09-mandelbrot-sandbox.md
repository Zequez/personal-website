---
title: Mandelbrot Sandbox
description: A sandbox to explore the Mandelbrot fractal I built to satisfy my own curiosity
liveLink: https://zequez.github.io/mandelbrot-sandbox/
repoLink: https://github.com/Zequez/mandelbrot-sandbox
media:
  - ../../assets/portfolio/mandelbrot-sandbox.png
tags:
  - React
  - Tailwind
  - HTML/CSS/JS
  - TypeScript
  - Rust
  - Web Assembly
  - Mandelbrot
when: mid-time
status: Maybe I'll improve it
order: 26
---

The Mandelbrot is a fractal pattern created by a mathematical function. Some liken it to the Buddha sitting on meditation,
and give the fractal a sort of divine meaning about mathemathics.

Anyway, I think it's really cool, and I wanted to be able to zoom in and out and just explore it. Since I couldn't find a tool that did this on the web, I built my own.

The math calculation is written in Rust, which is compiled to Web Assembly and called from JavaScript. The purpose of this, in theory, is for optimization; however, I haven't actually compared it to just doing the calculations in JavaScript directly.

There is a caveat with the current implementation. Due to how the calculation is done, when you zoom in it needs to use higher and higher precision floating numbers. At some point you reach the limit of the floating numbers precision and you cannot zoom in anymore. I know there is a way to go around this limitation (because I asked ChatGPT about it), but I haven't implemented yet here. Maybe for version 0.2.0.

