tuckie.zone website :>

this is my personal portfolio. the goal was to have as much of a SPA-type experience as posible without really resorting to a framework.

There's a single entrypoint html, one style sheet, and one js file. initial pageload as of writing is ~27.22 kB transferred.
(okay, there are two css files but the other is a font.)

this is my site's excerpt about the tech stack:
> tuckie.zone is designed for minimal html/js/css bundle size and uses sprae for hydrating as a SPA. i've written my portfolio in vue/vite a few times but honestly i'd personally rather cut about 300 dependencies, 4 build steps, and save you the bandwidth these days. in a lot of ways i enjoy working with the DX and simplicity of modern frameworks, but sometimes its a matter of deciding what the priorities of a site are and for a static portfolio, i'd rather optimize for pageload speed and network traffic than 'show off' too much ://

this is a more substantive runown of it all:
### dev server / build: bun
- bun std lib basically covers 99% of the dev env for this project
- bun has builtin ts compilation and jams everything into a single file
- easy enough https server for local dev
- currently using a plugin to set html as the entrypoint, but honestly not sure its all that necessary. i can probably just copy over html directly, but its nice it minifies it :/

#### note: """hot reloading"""
- re-run the build script for every http request of '/', then serve whatever file was requested
- this is fine, actually.
- i think a more robust solution would filter by extension and just build that one thing. im not really worried about it so far.

### frontend: sprae
- this is the only JS dep for the site
- basically vue "progressive hydration" / alpinejs style html templating
- gzips into like <4kb
- composable directives, i only use [if, each, text, value]
- https://github.com/dy/sprae

### SPA functionality
- its really not that complicated to build a `react-router` in 20 lines of code
- basically just hook into `window.onhashchange`
- run hash change handler on pageload to handle external links
- in sprae i just populate a `current_route` property and `:if` out the current section
- you could practically do this in pure css with the :target selector

### fonts
- a purely minimalist site would just use whats available on the system
- i like monofur though :(
- https://github.com/Munter/subfont turned out to be pretty useful here
- it cuts from a 44kb woff2 to 7.9kb of css
- downside is it limits to whatever characters it finds in your html
- right now the page will load the woff2 when encountering anything not in the initial css