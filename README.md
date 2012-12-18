Janomo
======

High performance framework for modular web application development

## README Contents

- [Features](#a1)
- [Implementation](#a2)
- [Installation](#a3)
- [Skeleton](#a4)
- [Views](#a5)
- [Modules](#a6)

<a name="a1"/>
## Features

  - Only HTML + CSS + Javascript knowledge nedded
  - Extreamily fast results
  - Easy to use
  - Powerfull. No templates or hard structures
  - Modular code, encapsulation, reuse
  - Event based comunication system between modules
  - Internationalization support

<a name="a2"/>
## Implementation

  - The Janomo core is 'janomo.js' library wich implements the module initialization, the event comunication system and the transalation routines.
  - If you run Janomo under Node.JS you may also need 'main.js' that implements a basic http server with include support based on php include directive.
  - Further more, you should maintain some easy code conventions that you can see in the example view and modules implementation.

<a name="a3"/>
## Instalation

  - Janomo can be executed under any http server with php support like Apache. Just copy the files under root server directory.
  - Janomo can be executed under NodeJs. Just run 'node main.js' to start the server

<a name="a4"/>
## Skeleton

  - /views => Directory of views. Every view is contained in one directory under here.
  - /modules => Directory of modules. Every module is contained in onde directory under here
  - /public => All other stuff and common resources.

<a name="a5"/>
## Views

  - Every view is a complete html page but with .php extension.
  - In this file you have to include this basic libraries:
```html
<script type="text/javascript" src="../../public/libs/jquery-1.7.2.min.js"></script>
<script type="text/javascript" src="../../public/libs/janomo.js"></script>
```
  - In addition you should include all view files like:
```jade
<script type="text/javascript" src="script.js"></script>
<script type="text/javascript" src="language_en.js"></script>
<script type="text/javascript" src="language_es.js"></script>
<link rel="stylesheet" type="text/css" href="style.css">
```
  - Finally you should include all files required by icluded modules (see example)
  - Every moduule is included with this code:
```js
<div class="janomoModule" name="writer" id="writer1">
  <?php include '../../modules/writer/view.html'; ?>
</div>
```
