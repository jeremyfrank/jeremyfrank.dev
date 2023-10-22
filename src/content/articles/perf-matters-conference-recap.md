---
title: PerfMatters Conference Recap
description: Top sessions and takeaways from the 2019 PerfMatters Conference.
date: 2019-04-22
tags:
  - performance
url: https://www.viget.com/articles/perf-matters-conference-recap/
---

Earlier this month, I had the pleasure of attending [PerfMatters](https://www.perfmattersconf.com/), a web performance conference in the San Francisco Bay Area. It’s a two-day, single track conference with an optional workshop and hackathon. Geared towards developers, the 20+ talks ranged in topics from building a culture of performance to the importance of measuring and monitoring. All of the sessions were highly applicable and covered some great material. I was impressed by many of the sessions, but a few, in particular, stood out to me.

## Crash Course In CrUX

CrUX stands for "Chrome User Experience Report" and it represents a huge dataset of real-world user experience metrics from across the web. This data has been aggregated from Chrome users who have chosen to opt-in. In this session, Rick Viscomi covered some impressive tools and resources that interface with this data and summarize it in very meaningful ways.

Google’s Test my Site resource uses the CrUX dataset and provides a high level summary of site performance, a competitor benchmarking feature, a financial impact calculator, and custom report generation, which are all great for C-level executives. Google’s CrUX Dashboard tool, which is built on Data Studio, automatically syncs with the latest CrUX datasets, and it enables you to see how the user experience of an origin has changed over time. PageSpeed Insights, a tool for analyzing page speed, has also recently integrated the CrUX dataset as part of its analysis. Google BigQuery can also be used to slice and dice the raw data for a more detailed analysis and insight into site performance. Seeing how these resources can be utilized for more clearly communicating performance data, definitely made an impact.

## The Cost Of JavaScript

This session by Addy Osmani, covered the ways in which JavaScript _can_ become the most expensive part of a site. Large JavaScript bundles can not only take longer to download on slower connections, but can also cause incredibly long parse and execution times, which results in an extremely slow TTI (time to interactive), and can block the main thread, preventing users from interacting with things on screen. In order for JavaScript to be fast, it needs to be fast at 3 things: download, parsing, and execution. The rest of the talk covered ways to make JavaScript faster, things like shipping smaller bundles with code splitting, integrating auditing and code coverage tasks into existing workflows, and implementing performance budgets.

## Delighted, Satisfied, Or Angry? Building Empathy Into Our Core Business Metrics To Put Users First.

In this session, Nathan Bower showed how Zillow went about answering the question, “Are our users happy?” They developed a new convention in which [time limits and principles from human perceptual abilities](https://www.nngroup.com/articles/response-times-3-important-limits/), were mapped to real performance data. This shifted their culture in a good way and helped them better empathize with their users, and prioritize ongoing work.

## Common Themes

There were definitely some common themes throughout the conference, such as: the importance of building and empowering a culture of performance, as well as the importance of measuring and monitoring. Performance is definitely more than code. It’s user experience, it’s happy customers, it’s directly tied to user conversions. Improving performance is a [journey](https://www.viget.com/articles/3-strategies-for-boosting-web-app-performance/) and it can be done incrementally, with [small](https://www.viget.com/articles/make-your-site-faster-with-preconnect-hints/) [wins](https://www.viget.com/articles/performance-loading-font-picker-previews/); doesn’t have to be all or nothing.

Be sure to check out the rest of the [talks](https://www.perfmattersconf.com/talks/), and if you attended the event, let us know if a particular session resonated with you.
