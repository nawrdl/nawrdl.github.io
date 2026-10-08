# North Australia Water Resources Digital Library

Jekyll website based on the JCU research website starter, using
`jcu-eresearch/jcu-research-website-theme` as a remote theme.
Content, colours and images were migrated from the previous Quasar website
in `nawrdl.github.io`. No Quasar runtime is needed.

## Preview

Use Ruby 3.3.4 (see `.ruby-version`), then run:

```sh
bundle install
bundle exec jekyll serve
```

## Content

- `index.md`: About landing page, catchment map, project information and partners.
- `contact-us.md`: contributions and access assistance.
- `library.md`: placeholder ready for the jcudlc frontend.
- `_data/navigation.yml`: main navigation.
- `_config.yml`: remote theme and the original navy/cream palette.

## Library integration

The placeholder uses `layout: page` and includes an empty `#jcudlc` mount element.
When ready, switch to `layout: jcudl-catalog`, remove the placeholder content
and empty mount element (the catalogue layout supplies it), and add the frontend
assets and configuration. The catalogue layout defaults to `/assets/css/jcudl-style.css`
and `/assets/js/jcudl.js`; set `jcudl_stylesheet` and `jcudl_script` in page front
matter to use other paths or hosted URLs. The frontend is deliberately not
included in this migration.

## GitHub Pages

The configuration assumes a project site at `https://nawrdl.github.io/nawrdl-v2/`.
Confirm `url` and `baseurl` before publishing. For the main organisation site,
set `baseurl: ""`. Enable GitHub Pages deployment from the repository branch.
The remote theme is unpinned, matching the starter configuration.

Original source assets are retained; the starter's LICENSE applies to its code.
