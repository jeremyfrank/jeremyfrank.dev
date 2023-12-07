---
title: Device Testing Local Virtual Hosts
date: 2012-09-13
tags:
url: https://www.viget.com/articles/device-testing-local-virtual-hosts/
---

The front-end developers here at Viget use local virtual host configurations in Apache for each client project we’re individually working on. It’s a great way to be able to switch gears from one project to another if needed. However, when it comes to testing any one of those client projects with another device on the local network, well, that’s where things can get tricky. Whether its port numbers, editing the order of vhosts, or some complicated device specific configuration, there are definitely some technical and workflow hoops to jump through. Here’s a setup I’ve recently started using that eliminates those hoops.

## The Secret Ingredient

Assuming you’re already setup with virtual hosts in Apache and have Web Sharing enabled in System Preferences<sup>1</sup>, you’re most of the way there. The key ingredient is to use the ServerAlias directive with xip.io.

```apache
<VirtualHost *>
  ServerName "myproject.local"
  DocumentRoot "/Users/jeremy/Sites/myproject"
  ServerAlias myproject.local.*.xip.io
</VirtualHost>
```

The [ServerAlias directive](http://httpd.apache.org/docs/2.2/mod/core.html#ServerAlias) allows for alternate names that Apache should map to the virtual host. The [xip.io](http://xip.io/) domain is a free wildcard DNS service from 37signals, which essentially resolves to your local ip address, and sends it back in the response. Now just fire up your various mobile devices and browse to the server alias above, substituting \* with your local ip address.

```
http://myproject.local.[local ip address].xip.io/
http://myproject.local.127.0.0.1.xip.io/
```

What makes this so streamlined is that it allows for a consistent naming pattern that is easy to remember, and it removes unnecessary complication. As a bonus, it really comes in handy when a request comes in from a project manager to troubleshoot an issue on a recent project that you still have running on your local machine.

So that’s my setup. How can it be improved? What device testing tricks are up your sleeve?

---

<sup>1</sup> Apple chose to [remove the web sharing option](http://support.apple.com/kb/HT5230) in Mountain Lion. To get this working again you can run a [series of commands in terminal](http://osxdaily.com/2012/09/07/start-web-sharing-os-x-mountain-lion-easy/), or simply install this [preference pane by Tyler Hall](http://clickontyler.com/blog/2012/02/web-sharing-mountain-lion/). I’m still on Lion currently so I’m not yet affected by this change.
