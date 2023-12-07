---
title: Feature Based Component Loading with RequireJS
date: 2014-02-03
tags:
url: https://www.viget.com/articles/feature-based-component-loading-with-requirejs/
---

One way to cut down on the initial download of site assets is to load the JavaScript necessary for special components only when those components are present on the page, instead of including the scripts all in a single concatenated global file. Depending on the number of components and the frequency with which they appear on a given site, this can be an easy win, especially for mobile. In theory, less JS to download on a page without any components = less JS to process = faster performance on mobile devices.

Similar in concept to the [feature-based execution + script loader pattern](https://viget.com/extend/javascript-execution-patterns-for-non-web-apps) that Trevor shared last year, this approach simply identifies the components in a different way and uses [RequireJS](http://requirejs.org/) to handle the script loading aspect.

Using a carousel and a video player as examples, which may appear on any page:

```html
<div data-component="carousel">...</div>
<div data-component="video-player">...</div>
```

Get all elements with a **data-component** attribute and load the specified JS file via RequireJS:

```js
var components = document.querySelectorAll('[data-component]')

for (var n = 0; n < components.length; n++) {
  var el = components[n]
  var componentName =
    el.dataset !== undefined
      ? el.dataset.component
      : el.getAttribute('data-component') // el.dataset for modern browsers, el.getAttribute for IE8 - IE10

  require([componentName])
}
```

Or with jQuery:

```js
$('[data-component]').each(function () {
  require([$(this).attr('data-component')])
})
```

Then in carousel.js and video-player.js, load any dependencies and initialize your components however you see fit.

That’s all there is to it! With this simple optimization, you can cut down on that initial JS load which can really help for pages that don’t have any components present.
