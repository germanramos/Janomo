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
- [License](#a7)

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

Every view is a complete html page but with .php extension. In this file you have to include this basic libraries:
```html
<script type="text/javascript" src="../../public/libs/jquery-1.7.2.min.js"></script>
<script type="text/javascript" src="../../public/libs/janomo.js"></script>
```
In addition you should include all view files like:
```html
<script type="text/javascript" src="script.js"></script>
<script type="text/javascript" src="language_en.js"></script>
<script type="text/javascript" src="language_es.js"></script>
<link rel="stylesheet" type="text/css" href="style.css">
```
Finally you should include all required files by included modules (see example). Every module is included with this code:
```html
<div class="janomoModule" name="writer" id="writer1">
  <?php include '../../modules/writer/view.html'; ?>
</div>
```
The php directive 'include' is also implemented when running under Node.Js.
Every module has to be included under a div with class 'janomoModule', with name attribute equal to the name of the module and one unique identificator. Note that you can include several modules of the same type but the identificator has to be unique.

It is higly recommended to follow the file conventions used in the example. So I suggest you to see the other files of the view in order to have a full perpective of a view implementation

<a name="a6"/>
## Modules

<a name="a7"/>
## License

(The MIT License)

Author: Germán Ramos García &lt;german.ramos@gmail.com&gt;

Copyright (c) 2012 GreenBox Software S.L. (Spain) 

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

