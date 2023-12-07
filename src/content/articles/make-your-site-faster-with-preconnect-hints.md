---
title: Make Your Site Faster with Preconnect Hints
description: With preconnect hints, you can reduce request latency and make your site faster.
date: 2018-01-18
tags:
  - performance
url: https://www.viget.com/articles/make-your-site-faster-with-preconnect-hints/
---

Requesting an external resource on a website or application incurs several round-trips before the browser can actually start to download the resource. These round-trips include the DNS lookup, TCP handshake, and TLS negotiation (if SSL is being used).

![](https://viget.imgix.net/blog/preconnect-1.png?auto=format%2Ccompress&crop=focalpoint&fit=crop&fp-x=0.5&fp-y=0.5&ixlib=php-3.3.1&q=90&w=1280&s=9a6f4693a8a1512157091e172e7b6e3e)

Depending on the page and the network conditions, these round-trips can add hundreds of milliseconds of latency, or more. If you are requesting resources from several different hosts, this can add up fast, and you could be looking at a page that feels more sluggish than it needs to be, especially on slower cellular connections, flaky wifi, or congested networks.

One of the the easiest ways to speed up your website or application is to simply add [preconnect hints](https://www.w3.org/TR/resource-hints/#preconnect) for any hosts that you will be requesting assets from. These hints essentially tell the browser what origins will be used for resources, so that it can then prep things by establishing all the necessary connections for those resources.

Below are a few scenarios where adding preconnect hints can make things faster!

## Faster Display of Google Fonts

Google Fonts are great. The service is reliable and generally fast due to Google's global CDN. However, because @font-face rules must first be discovered in CSS files before making web font requests, there often can be a noticeable visual delay during page render. We can greatly reduce this delay by adding the preconnect hint below!

```html
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
```

Once we do that, it’s easy to spot the difference in the waterfall charts below. Adding preconnect removes three round-trips from the critical rendering path and cuts more than a half second of latency.

![](https://viget.imgix.net/blog/preconnect-2.png?auto=format%2Ccompress&crop=focalpoint&fit=crop&fp-x=0.5&fp-y=0.5&ixlib=php-3.3.1&q=90&w=1280&s=ba483b3784f586b393b369277fcec98c)

This particular use case for preconnect has the most visible benefit, since it helps to reduce render blocking and improves time to paint.

_Note that the font-face specification requires that fonts are loaded in "anonymous mode", which is why the crossorigin attribute is necessary on the preconnect hint._

## Faster Video Display

If you have a video within the viewport on page load, or if you are lazy-loading videos further down on a page, then we can use preconnect to make the player assets load and thumbnail images display a little more quickly. For YouTube videos, use the following preconnect hints:

```html
<link rel="preconnect" href="https://www.youtube.com" />
<link rel="preconnect" href="https://i.ytimg.com" />
<link rel="preconnect" href="https://i9.ytimg.com" />
<link rel="preconnect" href="https://s.ytimg.com" />
```

Roboto is currently used as the font in the YouTube player, so you’ll also want to preconnect to the Google fonts host if you aren’t already.

```html
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
```

The same idea can also be applied to other video services, like Vimeo, where only two hosts are used: vimeo.com and vimeocdn.com.

## Preconnect for Performance

These are just a few examples of how preconnect can be used. As you can see, it’s a very simple improvement you can make which eliminates costly round-trips from request paths. You can also implement them via HTTP Link headers or invoke them via JavaScript. Browser support good and getting better (supported in Chrome and Firefox, coming soon to Safari and Edge). Be sure to use it wisely though. Only preconnect to hosts which you are certain that assets will be requested from. Also, keep in mind that these are merely optimization “hints” for the browser, and as such, might not be acted on each each and every time. If you’ve used preconnect for other use cases and have seen performance gains, let me know in the comments below!
