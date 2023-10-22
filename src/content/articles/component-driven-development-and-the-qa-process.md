---
title: Component Driven Development and the QA Process
description: Adopting a component driven development approach can help reduce the amount of time and effort spent on QA.
date: 2023-09-30
tags:
url: https://www.viget.com/articles/component-driven-development-and-the-qa-process/
---

It’s no secret that [component driven](https://www.componentdriven.org/) development has many advantages and has streamlined the development process. Building user interfaces from the bottom up with modular components as part of a design system makes it easier to build robust yet flexible UIs, which are more efficient to support and scale long-term. But beyond its impact on the software development process itself, component driven workflows have also positively affected the QA (quality assurance) process and collaboration across both internal and external teams.

In our recent work with [Welcome.US](https://welcome.us/), [Human Rights Campaign](https://www.viget.com/work/human-rights-campaign/), and [National Park Foundation](https://www.viget.com/work/national-park-foundation-nationalparks-org-redesign/), we have relied heavily on component driven development to rapidly decrease the time it takes to go from UX and design to testing in development. This provides the opportunity to quickly confirm UX and design approaches by testing data models, layouts, and functionality built out at the component level. By identifying areas that require iteration early through testing, component driven development reduces the overall risk of the project. Additionally, the creation of new layouts can be easily achieved through assembly from the library of components.

Here are some of the ways our teams have benefited from component driven development:

## Improved Focus

Because components are built and presented in isolation, they are much easier to test than pages or screens. Testing in isolation simplifies the QA process by enabling focus on specific parts of the UI. It also ensures that any problems found are truly related to a specific component and not some other part of an application.

![Article Card component for Bezos Earth Fund](https://viget.imgix.net/bef-article-card.png?auto=format%2Ccompress&crop=focalpoint&fit=crop&fp-x=0.5&fp-y=0.5&ixlib=php-3.3.1&q=90&w=1520&s=46468e3749fd2a75c5e3c773236c27f0)

## More Easily Accessible Variations

When components with different display states and variations are presented in isolation, it is much easier to verify that they appear and function as intended across those display states and variations. In many cases, we have found opportunities for improvement or additional use cases through testing component states and variations.

![Button component for Welcome.US](https://viget.imgix.net/welcome-button.png?auto=format%2Ccompress&crop=focalpoint&fit=crop&fp-x=0.5&fp-y=0.5&ixlib=php-3.3.1&q=90&w=1520&s=0af71141345f2e71cf2c8d2d6795eb9a)

## Documentation Verification

Since documentation is typically written for each component, it can serve as a roadmap which guides the QA process. This can also work in reverse, where the QA process helps to round-out existing documentation and fill in any gaps. This provides further opportunities for things like documenting admin or editor help text and conducting efficient handoffs to client teams.

## Issues Identified & Resolved Earlier

Components can be iteratively tested as they are being built. They can also be incrementally tested throughout a sprint or project, instead of waiting until the end. This often leads to identifying issues earlier in the development process, fewer bugs, and a higher quality product in the end.

## Less Time Required for Visual QA

Visual regression testing, particularly at the component level, can help to identify any inconsistencies in components when introducing new features, enhancements, or bug fixes. [Chromatic](https://www.chromatic.com/) offers automated visual testing for codebases using Storybook, and there’s a new [Visual Tests add-on](https://storybook.js.org/blog/visual-tests-addon-entering-private-alpha/?ref=viget.com) (currently in private alpha) which brings this right into Storybook itself. Additionally, [BackstopJS](https://github.com/garris/BackstopJS) is an open source option which we recently used to quickly identify any breaking visual changes during a Craft 4 upgrade of the Human Rights Campaign website.

## Improved Collaboration

Component driven development, enhanced by an iterative process, can significantly improve collaboration across teams. Working at the component level allows for parallel work streams across UX, design, and development by creating shorter feedback loops and quicker identification of implementation feedback. This allows for rapid iterations on things like data models or design, particularly when looking to address stakeholder feedback or concerns.

---

Adopting a component driven development mindset across our project teams has greatly benefited our ability to produce manageable sites that simplify long-term maintenance and scalability. This approach has also helped us to decrease the amount of time we spend on QA and increase our internal collaboration. The efficiencies gained in this process ultimately save time and enable accomplishing more at a higher quality in a given timeline; and that's a good thing for any project team!
