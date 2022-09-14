---
layout: ../../layouts/Work.astro
title: Shedd Aquarium
client: Shedd Aquarium
date: 2019-09-01
websiteUrl: https://sheddaquarium.org/
cardImage: https://ucarecdn.com/29c00fa2-86c2-4800-be87-ecda05ba9edd/
heroImage: https://ucarecdn.com/62f69a43-e052-4dc6-89e0-2786284114aa/
color: '#004c7e'
role: UI Developer
tech:
  - Tailwind
  - Rails
  - React
  - Webpacker
  - Imgix
summary: Developing a bold new site and integrating with a custom CMS on a proven platform.
featured: true
---

Being one of the largest aquariums in the world, with ~2 million visitors per year, Shedd Aquarium is loved by attendees, and also well known and respected in the conservation space. Shedd’s new website, being their primary digital experience through which they show and connect with visitors, invites users to get as close as possible to what matters, “to look nature in the eye.”

The project encompased a custom Ruby on Rails CMS, a newly designed media-rich front-end, a few single-purpose stand-alone React apps, and a new eCommerce API.

## Competitive Performance Analysis

I conducted a series of performance audits against the home page of several competitor and peer sites, which reported on key performance metrics. From the data collected, we were able to calculate averages, and identify the top performing sites. This was ultimately used in determining appropriate benchmarks for the front-end performance of the new site.

## Image Processing

With Rails applications, the Dragonfly gem with ImageMagick enabled, is typically the go-to choice for handling image processing such as resizing, optimizing, and cropping. For Shedd’s new website however, we wanted to offload this processing from the web server to a third-party service. I lead the process for evaluating third-party options, made the case for the use of [imgix](https://imgix.com/), and worked closely with Rails developers on the integration. Images are now intelligently transformed, optimized, cached and delivered from imgix’s global edge network.

## Tailwind CSS

For styling on the front-end, we needed an approach that provided design system like constraints, yet be flexible enough to would allow the site to be extended over time, without the common problem of CSS stylesheet growth and bloat. Tailwind CSS solves this problem with its utility-first approach by providing all the necessary UI building blocks.
