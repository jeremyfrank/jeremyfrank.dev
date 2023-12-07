---
title: Performance Loading Font Picker Previews
description: Improve the performance of font picker previews with optimized web font loading principles.
date: 2017-05-03
tags:
  - performance
url: https://www.viget.com/articles/performance-loading-font-picker-previews/
---

How well a site or app performs on the front-end can be the result of many different factors. If it performs well, the overall user experience is much more likely to be positive. On a recent project, we built a custom “font picker” component for showing the fonts available and displaying each font name with the actual web font itself, so that users could see a preview of the font before making a selection.

<img
  src="https://viget.imgix.net/font-picker-component-small.png?auto=format%2Ccompress&crop=focalpoint&fit=crop&fp-x=0.5&fp-y=0.5&ixlib=php-3.3.1&q=90&w=1280&s=1142917864e87b2a4a97ad0793a8ddbe"
  width="192"
  height="228"
  alt=""
/>

This poses some interesting performance challenges, one of which is how to load all of these fonts efficiently, so that overall load time is not adversely affected, rendering is not inhibited, and we’re not wasting any unnecessary user bandwidth.

## Only Load Fonts When Necessary

These Google Fonts are only loaded when necessary, when a font picker component is first presented on screen. This helps to reduce the initial load time of the app. However, loading [this many](https://fonts.google.com/selection?selection.family=Abril+Fatface|Arvo|Lobster|Lora|Open+Sans|Oswald|PT+Sans|Pacifico|Playfair+Display|Raleway|Roboto|Ubuntu) (or more) webfonts can start to rack up the file size pretty quickly, so let’s take a look at what this might cost.

## Evaluate Web Font File Sizes

For this quick test, we can make a single request by combining the font family names in the family parameter, like so:

```html
<link
  href="//fonts.googleapis.com/css?family=Abril+Fatface|Arvo|Lobster|Lora|Open+Sans|Oswald|PT+Sans|Pacifico|Playfair+Display|Raleway|Roboto|Ubuntu"
  rel="stylesheet"
/>
```

A web font file will be downloaded for each family specified. File sizes for each font are as follows:

```
Abril Fatface    : 13.0 kb
Arvo             : 10.7 kb
Lobster          : 21.6 kb
Lora             : 15.7 kb
Oswald           :  9.4 kb
Open Sans        : 10.5 kb
Pacifico         : 20.6 kb
Playfair Display : 17.9 kb
PT Sans          : 16.9 kb
Raleway          : 13.2 kb
Roboto           : 10.4 kb
Ubuntu           : 12.7 kb
==========================
TOTAL            :  173 kb
```

173 kb is not terrible for 12 web fonts, but it is still a lot to download. Keep in mind that these numbers are for WOFF2 font files, which are smaller in file size than all other web font file formats. Also, only one weight was loaded (400). If you need an additional weight like bold (700), which 9 of the 12 fonts above provide, the file size quickly increases to 293 kb. Yikes, that’s a lot to download! Add more weights or more fonts and the file size quickly gets out of control.

## Optimize Font Requests

In order to achieve more efficient file sizes and loading, we can do two things:

1.  Only load a single weight (400) for the font picker preview. Even though other weights may be required in the app, the font picker only requires one weight for display. Fortunately, the Google Fonts API provides the regular version of requested fonts by default.
2.  [Optimize font requests](https://developers.google.com/fonts/docs/getting_started#optimizing_your_font_requests_beta) by specifying a `text` parameter and value. This will return a font file that contains only the characters necessary to display the name of the font in the font picker. File size will be drastically smaller, in some cases, up to 90% smaller.

Using the above recommendations, our font requests look a little different:

```html
<link
  href="//fonts.googleapis.com/css?family=Abril+Fatface&text=Abril%20Fatface"
  rel="stylesheet"
/>
<link
  href="//fonts.googleapis.com/css?family=Arvo&text=Arvo"
  rel="stylesheet"
/>
<link
  href="//fonts.googleapis.com/css?family=Lobster&text=Lobster"
  rel="stylesheet"
/>
<link
  href="//fonts.googleapis.com/css?family=Lora&text=Lora"
  rel="stylesheet"
/>
<link
  href="//fonts.googleapis.com/css?family=Open+Sans&text=Open%20Sans"
  rel="stylesheet"
/>
<link
  href="//fonts.googleapis.com/css?family=Oswald&text=Oswald"
  rel="stylesheet"
/>
<link
  href="//fonts.googleapis.com/css?family=PT+Sans&text=PT%20Sans"
  rel="stylesheet"
/>
<link
  href="//fonts.googleapis.com/css?family=Pacifico&text=Pacifico"
  rel="stylesheet"
/>
<link
  href="//fonts.googleapis.com/css?family=Playfair+Display&text=Playfair%20Display"
  rel="stylesheet"
/>
<link
  href="//fonts.googleapis.com/css?family=Raleway&text=Raleway"
  rel="stylesheet"
/>
<link
  href="//fonts.googleapis.com/css?family=Roboto&text=Roboto"
  rel="stylesheet"
/>
<link
  href="//fonts.googleapis.com/css?family=Ubuntu&text=Ubuntu"
  rel="stylesheet"
/>
```

Because each font specifies unique characters to include for the preview, our original single request needed to be broken up into individual requests. Let’s see what our file sizes look like now, with optimized font files returned:

```
Abril Fatface    :  2.4 kb
Arvo             :  1.2 kb
Lobster          :  2.5 kb
Lora             :  1.3 kb
Open Sans        :  1.5 kb
Oswald           :  1.3 kb
Pacifico         :  2.7 kb
Playfair Display :  2.9 kb
PT Sans          :  1.5 kb
Raleway          :  1.6 kb
Roboto           :  1.3 kb
Ubuntu           :  1.2 kb
==========================
TOTAL            : 21.4 kb
```

At 21.4 kb, our font files are now 87% smaller. That is a huge improvement!

## Bonus: DNS Prefetch

In addition, you could use DNS prefetching to resolve the domain name used for the font files themselves. This can provide an additional perceived speed boost.

```html
<link rel="dns-prefetch" href="//fonts.googleapis.com" />
```

## Conclusion

The examples above are all specific to Google Fonts, but the same principles should be able to be applied to other font providers as well. For cases like this where you know in advance exactly what text you need to display to the user, be sure to optimize your web font requests, prefetch the DNS, and improve the overall performance of your app!
