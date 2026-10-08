# North Australia Water Resources Digital Library

Jekyll website based on the JCU research website starter, using
[jcu-eresearch/jcu-research-website-theme](https://github.com/jcu-eresearch/jcu-research-website-theme) as a remote theme.
Content, colours and images were migrated from the previous Quasar website
in `nawrdl.github.io`. No Quasar runtime is needed.

## Preview

Install and select Ruby 3.3.4 (see `.ruby-version`) using a Ruby version manager.
Installing Ruby alone does not install this site's dependencies. From the
repository root, install the Bundler version recorded in `Gemfile.lock`, then
install the project gems:

```sh
gem install bundler -v 2.5.11
bundle install
```

`bundle install` installs Jekyll, the GitHub Pages plugins (including
`jekyll-remote-theme`) and WEBrick through the existing `Gemfile` and
`Gemfile.lock`. A separate global Jekyll installation is not required. See
[Jekyll's Bundler guide](https://jekyllrb.com/tutorials/using-jekyll-with-bundler/).
Some dependencies compile native extensions, so a compiler toolchain is also
needed; on macOS, install the Xcode Command Line Tools if they are missing.

Start the preview:

```sh
bundle exec jekyll serve
```

Open <http://localhost:4000/nawrdl-v2/>. Internet access is required to download
gems and fetch the remote theme. After initial setup, run `bundle install` again
when the gem dependencies change. Restart the preview after editing `_config.yml`.

## Content

- `index.md`: About landing page, catchment map, project information and partners.
- `contact-us.md`: contributions and access assistance.
- `library.md`: full-width JCUDLC library catalogue.
- `_data/navigation.yml`: main navigation.
- `_config.yml`: remote theme, navy/blue palette, warm neutral backgrounds and alert colours.

## Library integration

The library is integrated at `/library/`. `library.md` uses the remote theme's
`jcudl-catalog` layout with `catalog_full_width: true`. The layout supplies the
`#jcudlc` mount element. Page front matter selects the included frontend assets:

- `jcudl_script: /assets/js/jcudlc.js`
- `jcudl_stylesheet: /assets/css/jcudlc-style.css`

The frontend loads `library/jcudlc-config.json`, then the data file specified by
its `dataUrl` (currently `jcudlc-data.json` in the same directory). Downloadable
documents are stored in `library/documents/`.

Catalogue data and configuration are generated in the sibling `nawrdl-data-prep`
repository. Edit `inputs/jcudlc-config-static.json` there for catalogue colours
and display settings; website colours are configured separately in `_config.yml`.
The pipeline merges the static settings with workbook settings to generate the
website configuration. Direct edits to `library/jcudlc-config.json` will be
overwritten when generated files are copied in.

From the `nawrdl-data-prep` repository root, regenerate the catalogue:

```sh
bash scripts/build-jcudlc-files.sh
```

Use `--with-documents` for the first run or when adding source documents. Review
the generated outputs and warnings, then copy them into this website:

```sh
mkdir -p ../nawrdl-2026-refresh/library/documents
cp outputs/jcudlc-data.json outputs/jcudlc-config.json ../nawrdl-2026-refresh/library/
cp -R outputs/documents/. ../nawrdl-2026-refresh/library/documents/
```

The document copy retains existing files; review obsolete documents separately.
See the data-preparation repository's README for setup and validation details.

URLs inside catalogue JSON are opened directly by the frontend; Jekyll does not
add `baseurl` to them. If the deployment path changes, update `website.urls` in
`nawrdl-data-prep/scripts/library-config.yml`, regenerate and copy the outputs.
The current URLs include `/nawrdl-v2/`, matching this site's `baseurl`.

## GitHub Pages

The configuration assumes a project site at `https://nawrdl.github.io/nawrdl-v2/`.
Confirm `url` and `baseurl` before publishing. For the main organisation site,
set `baseurl: ""`. Enable GitHub Pages deployment from the repository branch.
The remote theme is unpinned, matching the starter configuration.

Original source assets are retained; the starter's LICENSE applies to its code.
