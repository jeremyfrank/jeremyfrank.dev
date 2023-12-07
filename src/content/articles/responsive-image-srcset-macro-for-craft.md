---
title: Responsive Image srcset Macro for Craft
description: With Twig Macros, we can streamline our responsive image template code substantially.
date: 2016-11-16
tags:
url: https://www.viget.com/articles/responsive-image-srcset-macro-for-craft/
---

Imagine you’re implementing responsive image markup using srcset, and you’re using Craft’s image transforms to output the images at different sizes using template code that looks something like this:

```twig
<img
  src="..."
  srcset="{{ entry.image.url({ width: 640 }) }} 640w,
          {{ entry.image.url({ width: 1024 }) }} 1024w,
          {{ entry.image.url({ width: 1600 }) }} 1600w"
  sizes="100vw"
/>
```

This approach works well, but it gets cumbersome fast when you’re dealing with multiple templates and lots of shared partials. What if we could instead, do something more simplified like this?

```twig
<!-- input -->
<img src="..." srcset="{{ srcset(entry.image) }}" sizes="100vw" />

<!-- output -->
<img
  src="..."
  srcset="
    _640x360_crop_center-center/photo.jpg   640w,
    _1024x576_crop_center-center/photo.jpg 1024w,
    _1600x900_crop_center-center/photo.jpg 1600w
  "
  sizes="100vw"
/>
```

Fortunately, we can! With Twig Macros, we can streamline our responsive image template code substantially.

## Step 1: Setup the Macro

Let's start by creating a new “srcset” macro with some basic setup.

```twig
{% macro srcset(image) %}
  {%- set outputWidths = [640, 1024, 1600] -%}
  {%- set srcset = [] -%}
{% endmacro %}
```

This simply accepts a Craft asset, and sets up an array of output targets and an empty srcset array. It doesn’t output anything quite yet.

## Step 2: Build the srcset Array

We’ll need to loop through the outputWidths array and add the output to the srcset array using [Twig’s merge filter](http://twig.sensiolabs.org/doc/filters/merge.html). In order to prevent unintentional upsize transforms on images that happen to be smaller than an output width, we need to compare the output width to the image’s width. Fortunately, [AssetFileModel](https://craftcms.com/docs/templating/assetfilemodel) objects in Craft contain information about an image’s dimensions, which we can use to conditionally output each transformed image source if and only if the original image is large enough.

```twig
{%- for outputWidth in outputWidths -%}
  {%- if outputWidth <= image.width -%}
    {%- set srcset = srcset | merge([image.url({ width: outputWidth }) ~ ' ' ~ outputWidth ~ 'w']) -%}
  {%- endif -%}
{%- endfor -%}
```

## Step 3: Output the value

Finally, output the end result by using Twig’s `join` filter on the `srcset` array:

```twig
{{- srcset | join(', ') -}}
```

## The Final Macro

```twig
{% macro srcset(image) %}
  {# setup #}
  {%- set outputWidths = [640, 1024, 1600] -%}
  {%- set srcset = [] -%}

  {# if output width is smaller than or equal to the original image width #}
  {%- for outputWidth in outputWidths -%}
    {%- if outputWidth <= image.width -%}
      {%- set srcset = srcset | merge([image.url({ width: outputWidth }) ~ ' ' ~ outputWidth ~ 'w']) -%}
    {%- endif -%}
  {%- endfor -%}

  {# output srcset #}
  {{- srcset | join(', ') -}}
{% endmacro %}
```

Now, with a 1200px wide image, this macro will output the following code for use in the srcset attribute:

```twig
<!-- input -->
{{ srcset(entry.image) }}

<!-- output -->
_640x360_crop_center-center/photo.jpg 640w,
_1024x576_crop_center-center/photo.jpg 1024w
```

The advantage here is that there is no unnecessary upsizing and saving a new image with dimensions larger than the original image, and as a result, we’re conserving server processing and user bandwidth. The downside is that the 1024px wide image will be used at screen sizes larger than 1024px since it is the largest available image, so the image will be stretched anyway and may look blurry.

That’s why we should take one additional step and present a warning in Craft’s live preview mode, only if the asset doesn’t meet the output requirements.

## Admin Warning

To do this, we can check the current request and the image width, like so:

```twig
{% if craft.request.isLivePreview and entry.image.width < 1600 %}
  <p>Please assign an image that is at least 1600px wide.</p>
{% endif %}
```

I’d suggest applying some styles to make it look like an actual warning.

![](https://viget.imgix.net/craft-admin-warning.png?auto=format%2Ccompress&crop=focalpoint&fit=crop&fp-x=0.5&fp-y=0.5&ixlib=php-3.3.1&q=90&w=1280&s=fb62b75ed01d27dcfb1412a8bdddce9f)

## Extending the Macro

If you need to use different output widths for different use cases, or enforce a specific aspect ratio that’s different from the original image, you can add some configuration and defaults to the macro.

```twig
{% macro srcset(image, outputWidths, aspectRatio) %}
  {# setup #}
  {%- set outputWidths = outputWidths | default([640, 1024, 1600]) -%}
  {%- set srcset = [] -%}

  {# if output width is smaller than or equal to the original image width #}
  {%- for outputWidth in outputWidths -%}
    {%- if outputWidth <= image.width -%}
      {%- if aspectRatio -%}
        {%- set transformOptions = { width: outputWidth, height: outputWidth * aspectRatio } -%}
      {%- else -%}
        {%- set transformOptions = { width: outputWidth } -%}
      {%- endif -%}

      {%- set srcset = srcset | merge([image.url(transformOptions) ~ ' ' ~ outputWidth ~ 'w']) -%}
    {%- endif -%}
  {%- endfor -%}

  {# output srcset #}
  {{- srcset | join(', ') -}}
{% endmacro %}
```

Now you can pass custom output widths and different aspect ratio to the srcset macro:

```twig
{% set outputWidths = [580, 690, 768] %}
{% set aspectRatio = (3/5) %}

{{ srcset(entry.image, outputWidths, aspectRatio) }}
```

And there you have it! With a simple macro and a subtle admin warning, we can streamline the responsive image code in our Craft templates, and also prevent unnecessary upsized image transforms!
