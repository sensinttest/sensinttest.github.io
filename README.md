# Website maintenance guide

## Content

Most of the content can be modified by changing the values in **.yaml* data files in *_data* folder. Unless you wish to also update other aspects of the website, editing those files should fit your basic needs.

## CSS

The theme is built on top of [Bootstrap 4](https://getbootstrap.com/docs/4.0/getting-started/introduction/). 

Custom styles are defined in *assets/scss/_sensint* directory. 

Edit *_variables.scss* if you wish to modify colors or fonts.
Edit existing style rules in *_style.scss*.
Add your own custom styles in *_custom.scss*.

## HTML Templates

Each HTML page extends one of the layouts stored in *_layouts* directory. Additionally, reusable html components are stored in *_includes* directory. 
[Liquid syntax](https://shopify.github.io/liquid/basics/introduction/) is used to fetch and arrange the content on the page, check the documentation if you're not sure about how to use it.

## Development

The website is build with [Jekyll](https://jekyllrb.com/docs/).
To develop this locally you'll need Ruby 2.7.3 and Bundler installed. 

Afterwards:

```
git clone git@github.com:sensinttest/sensinttest.github.io.git
cd sensinttest.github.io
bundle install
bundle exec jekyll serve
```

### Can I just quickly get the static HTML?

If you happen to run Windows 10, there's a script just for you. Check *SensintWebsiteTools.zip*.


