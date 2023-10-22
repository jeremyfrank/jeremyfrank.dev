---
title: Best Practices for Background Videos
description: Ensure your background videos are done right with these guidelines and best practices!
date: 2018-09-11
tags:
url: https://www.viget.com/articles/best-practices-for-background-videos/
---

Background videos, if done right, can look stunning, draw attention, convey an idea and an overall experience for the user, and possibly lead to users taking positive action. If done wrong, they can be distracting, perform poorly, and possibly even be disorientating for users.

So how can we ensure that a background video is done right? There’s a lot to consider, but the following guidelines and best practices will help ensure the best end result!

![Background video on rotary.org](https://viget.imgix.net/background-video-rotary.jpg?auto=format%2Ccompress&crop=focalpoint&fit=crop&fp-x=0.5&fp-y=0.5&ixlib=php-3.3.1&q=90&w=1120&s=33da58c77ed9d41b73b6409d1fdeb02d)

## General Production Guidelines

### Keep the video relatively short

Longer videos will have a greater file size, will consume more of the user’s bandwidth, and may take longer to start streaming. Keep the video around 10-15 seconds in length. That should be an adequate amount of time to convey an intended idea or emotion.

### Avoid excessive movement

Some movement is okay, but excessive movement can be distracting and unwelcome. Also, keep in mind that the term “background” video implies that there is more important information in the foreground. The background video is meant to visually support and reinforce the foreground information. If there’s too much going on in the video, then it’s likely going to detract from the more important foreground. It is also important to keep in mind that excessive motion can also be disorienting for those with [vestibular disorders](https://publishing-project.rivendellweb.net/vestibular-disorders-reduced-motion-media-query-and-video-backgrounds/) (motion sensitivity).

### Export final video at high quality

When exporting the final video from your video editing application, be sure to export it with high quality settings. Conversion and optimization for use on the web will be done later (details below).

### Remove the audio channel

Audio can be distracting in this context, plus, background videos will not autoplay on mobile if they contain sound, so be sure to remove the audio channel completely.

## Video Conversion Guidelines

### Provide multiple formats

In order for the video to be cross browser compatible, you'll need to convert it to multiple formats, currently, WebM and MP4. To do this, I highly recommend using [ffmpeg](https://www.ffmpeg.org/) via the command line. If you have [homebrew](https://brew.sh/) it’s easy to install with `brew install ffmpeg`. Commands look something like this:

```bash
ffmpeg -i input.mp4 -c:v libvpx-vp9 -an output.webm
ffmpeg -i input.mp4 -c:v libx264 -an output.mp4
```

- The `-i` option specifies the input video.
- The `-c:v` option specifies the codec to use, libvpx-vp9 for WebM, and libx264 for H.264/MPEG-4.
- The `-an` option removes the audio track, just in case it wasn’t already done in the source video.

### Standard HD is sufficient

Standard HD size (1280x720) is sufficient and will have enough quality to be used as a background. If the source video was exported at Full HD or 4k, then you’ll need to add the `-s` (size) option to the above commands to set the output video size:

```bash
ffmpeg -i input.mp4 -c:v libvpx-vp9 -an -s hd720 output.webm
ffmpeg -i input.mp4 -c:v libx264 -an -s hd720 output.mp4
```

The hd720 value is a size preset which yields a frame size of 1280x720 (standard HD).

### Focus on playback performance

In order to ensure efficient streaming and playback, you'll need to optimize the bit rate. Add the `-b:v` (target bit rate) option to the above commands

```bash
ffmpeg -i input.mp4 -c:v libvpx-vp9 -an -b:v 1000k -s hd720 output-1000k.webm
ffmpeg -i input.mp4 -c:v libx264 -an -b:v 1000k -s hd720 output-1000k.mp4
```

Try different bitrate settings in the conversion commands above.

- Lower bitrates will produce smaller files and will stream better, but will have a lower quality.
- Higher bitrates will produce larger files and may have issues streaming, but will produce higher quality.
- A good target is between 700kb/s - 1200kb/s.
- Keep the bitrate as low as possible, until the quality degradation becomes noticeable and unacceptable, then increase it a little bit until it looks acceptable.

If command line utilities like ffmpeg are not your thing, you can also try a service called [CloudConvert](https://cloudconvert.com/). Just be sure to follow the guidelines above.

## Implementation Guidelines

### Consider mobile users’ bandwidth usage

Since videos are typically large files, they will consume more bandwidth and will slow down overall page load time. Consider using media queries to serve a video with smaller dimensions and a lower bitrate to small-screen devices. This will allow for more efficient streaming and playback on small-screen devices, and will consumer less overall bandwidth for those on a cellular connection.

Run the above ffmpeg command, but adjust the `-s` (size) option and lower the `-b:v` (target bit rate) option:

```bash
ffmpeg -i input.mp4 -c:v libvpx-vp9 -an -b:v 500k -s nhd output-500k.webm
ffmpeg -i input.mp4 -c:v libx264 -an -b:v 500k -s nhd output-500k-500k.mp4
```

The [nhd](<https://en.wikipedia.org/wiki/Graphics_display_resolution#640_%C3%97_360_(nHD)>) value is another [size preset](https://ffmpeg.org/ffmpeg-utils.html#Video-size) which yields a frame size of 640x360, exactly one quarter of a standard HD (720) frame.

Another option would be to use media queries to serve a static image to small-screen devices. An image will consume much less cellular data than a background video.

### Ensure sufficient contrast with foreground text

If you’re displaying text over your video, make sure it's easily readable. If it’s not, you’ll need to increase the contrast by adding an overlay to the video, changing the text color, or adding a text-shadow or a background to the text.

### Provide a pause button

There will always be people who might like to pause the video so it’s best to give them the ability to do just that.

Also, while WCAG doesn’t specifically call out the use of background video, the success criteria in [section 2.2.2](https://www.w3.org/TR/WCAG21/#pause-stop-hide) (Pause, Stop, Hide) may apply to this:

> For any moving, blinking or scrolling information that (1) starts automatically, (2) lasts more than five seconds, and (3) is presented in parallel with other content, there is a mechanism for the user to pause, stop, or hide it...

A background video isn’t technically information, but it does meet the other criteria above. I’ll let you be the judge.

### Anticipate the possibility of motion sickness

When encountering large scale animation and movement on the web, people with visually-triggered vestibular disorders commonly deal with feelings of motion sickness, like dizziness, nausea and headaches. Fortunately, iOS provides an accessibility setting for “Reduced Motion” and this can be accessed via the media query prefers-reduced-motion in CSS and JavaScript. So in the case of our background video, we can use `window.matchMedia` to automatically pause an autoplaying video.

```js
const video = document.getElementById('background-video')

if (window.matchMedia('(prefers-reduced-motion)').matches) {
  video.removeAttribute('autoplay')
  video.pause()
}
```

## Summary

Background videos can be pretty stunning if they have the right subject matter and are edited together properly. But be careful to implement them in a way that is highly performant, conserves cellular bandwidth, and provides users some baseline control over playback.

If you have experience with doing background video and have any good tips, I’d love to hear your thoughts in the comments below!
