# Website maintenance guide

This folder contains the editable Jekyll website, including content, templates, styles and assets. The current source was successfully built on 9 October 2026 with Ruby 2.7.3, Bundler 2.1.4 and Jekyll 4.2.0. Generated output and local runtimes are excluded from the GitHub handoff.

## Adding news

Edit `_data/news.yaml`. Give each story a unique numeric ID, a plain-text headline, a date and full content. Both pages sort by date: home shows the five latest headlines; News shows complete entries. Equal-date stories have no guaranteed editorial order. Preserve IDs to keep `news.html#news-ID` links stable.

```yaml
  - id: 35
    title: "A short descriptive headline"
    date: 2026-10-10
    content: |
      Full story here. Markdown and existing HTML links are supported.
```

Optional fields, placed beside the date after adding the actual image file:

```yaml
    image: uploads/images/your-actual-photo.jpg
    image_alt: "Describe the image for someone who cannot see it"
    image_caption: "Optional caption and photo credit"
```

Omit image fields for text-only stories. The textile-sensor story is a working example. Captions render as plain text; preserve image credits.

## Updating papers and research

- `_data/papers.yaml`: citation details, short public-facing summaries, thumbnails, links and badges. Distinguish proceedings papers, extended abstracts, workshops and journals.
- Use a site-relative image path to an existing file, or a full external URL. `image: false` selects a neutral placeholder. Optional `image_alt` defaults to the title.
- Local PDF and thumbnail paths resolve through `_includes/asset_url.html`. Award links appear in each winning paper's `links` list; badges use `style: yellow`.
- Publication anchors derive from titles. Check research-page links when renaming a paper.
- `_data/research.yaml` contains four research themes, including Understanding perception. Its introduction also appears on the home page.
- `_data/people.yaml` owns roles and portraits. No affiliation or roster changes were made in this refresh.
- Publication thumbnails and research figures are included in `uploads/images/`. Original PDFs are unchanged.

## Content

Data for this website is stored using [YAML](https://www.tutorialspoint.com/yaml/yaml_quick_guide.htm).

Most of the content can be modified by changing the values in corresponding files in *_data* folder. 
Unless you wish to also update other aspects of the website, editing those files should fit your basic needs.

## CSS

The theme is built on top of [Bootstrap 4](https://getbootstrap.com/docs/4.0/getting-started/introduction/). 

Other custom styles are defined in *assets/scss/_sensint* directory. 

Edit *_variables.scss* if you wish to modify colors or fonts.
Modify existing style rules in *_style.scss*.
Add your own custom styles in *_custom.scss*.

## HTML Templates

[Liquid](https://shopify.github.io/liquid/basics/introduction/) syntax is used to fetch and arrange the content inside the pages, check the documentation if you're not sure about how to use it.

Each HTML page extends one of the layouts stored in *_layouts* directory. Additionally, reusable html components can be found in *_includes* directory. 


## Development

The website is build with [Jekyll](https://jekyllrb.com/docs/).
The lockfile uses Ruby 2.7.3 and Bundler 2.1.4. Install a compatible Ruby environment, then run from this folder:

```powershell
bundle install
$env:JEKYLL_ENV = 'MPI'
bundle exec jekyll build
```

The generated website is written to `_site/`. Upload its contents to the server web root. For local preview, use `bundle exec jekyll serve` after setting the same environment variable. On macOS/Linux, use `JEKYLL_ENV=MPI bundle exec jekyll build`.

## Publication and retained material

`_config.yml` identifies the observed MPI site as the public origin and leaves `baseurl` empty. Confirm the origin and actual GitHub-to-MPI publication route before deployment. The existing institutional footer links appear only in `JEKYLL_ENV=MPI` mode.

Duplicate Swiper loads were removed; the remaining CDN references are still unversioned. Version pinning remains a future maintenance task.

Named legacy examples and duplicate copies are excluded from future output. Files remain available for later review. Historical assets and real position pages are retained; no current internal reference does not prove a public asset is safe to remove.

The stylesheet URL includes a build timestamp so browsers reload the current layout after deployment. Upload assets first, then HTML pages. Keep the checked-in `assets/vendor/` directory: it contains browser dependencies, not installed Ruby gems.
