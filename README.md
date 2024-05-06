# A reproduction of Hexo Fluid theme in vue.js with Nuxt Content

Simple layouts, navigations and pagination has been implemented.

The project currently contains lots of bugs hence is not stable.

Here are some next tasks to achieve:

- Extraction and definition of project variables
- Fix and finalization of the markdown/code snippet rendering
- Excerpt
- [x] ~~Scrolling animations~~, typewriting, ...
- [x] Dynamically generated article pages
- [i18n] i18n
- [dark] Dark mode
- [x] Icons
- [toc] TOC
- [search] Searching
- [x] Footnotes
- Static pages like 404 or others
- Refine page rendering details
  - Blur effects on menu
  - Scrolling animation fix
- Refactor and rearrange of codes
- Safari incompatibility (disappeared "to top" button and wrongly padded pagination indices)

Some features are not currently planned:

- Discussion/comment zone
- Analytics
- Customizable path to articles
- Prev/next navigation in pages
- Word count
- Complex markdown contents (mathjax, ...)

Dependencies:

- Vue.js/Nuxt 3
- Nuxt Content
- Nuxt icons
- Nuxt i18n
- Bootstrap & sass
- Typed.js

Maybe I could plan to implement a derivation of the current theme.

Credits:
- Idea, stylesheets and snippets from Hexo Fluid theme: https://github.com/fluid-dev/hexo-theme-fluid