# Website maintenance guide

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
To develop this locally you'll need Ruby 2.7.3 and Bundler installed. 

Afterwards:

```
git clone git@github.com:sensinttest/sensinttest.github.io.git
cd sensinttest.github.io
bundle install
bundle exec jekyll serve
```

Note:

Files and folders starting with __ (double underscore) are considered to be no longer relevant and can be deleted if necessary.