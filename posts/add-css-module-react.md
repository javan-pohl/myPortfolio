---
title: "Configuring Webpack to Handle CSS Modules in React"
date: "2021-04-23"
---

# How to Add CSS Modules to a React Project

In my Movie-List project, I tried to add a CSS Module for a particular React component, specifically the Summary module I'm working on. A **CSS Module is basically a self-contained CSS file for a particular file or module**, the purpose of which (perhaps among other things) is to make our CSS organization a bit cleaner. I.e. all the CSS that is exclusive to this one particular file will be in this CSS module.

The two steps I took to enable this functionality in the project were:

1. npm install the style-loader and css-loader modules
2. update the webpack.config.js rules to use those modules for css files

A great write-up of how to do this, and more, can be found [here](https://blog.jakoblind.no/css-modules-webpack/)