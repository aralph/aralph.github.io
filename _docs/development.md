# Development

## Done and pending work

- ✅ Populate main page
- ✅ Add resources (images, PDFs)
- ✅ Style CSS / theme
- ✅ publish to custom domain
- 🔄 subpages and navigation
- ⏳ detailed description of projects and more projects
- ⏳ more media for projects

## Repo file structure

### Jekyll's special directories

Jekyll recognizes certain underscore-prefixed directories:
- `_data/` - Structured data files (YAML, JSON, CSV)
- `_includes/` - Reusable HTML snippets
- `_layouts/` - Page templates
- `_posts/` - Blog posts
- `_sass/` - Sass/SCSS partials
- `_site/` - Generated output (auto-created)

For `_data` specifically
- Auto-loading: Jekyll automatically loads files from _data/ into site.data
- Template access: Use site.data.navigation in templates
- Clean separation: Keeps content separate from code
- Multiple formats: Supports YAML, JSON, CSV

Example:
```yml
# _data/navigation.yml
main:
- title: "Home"
```

Becomes accessible as: `{{ site.data.navigation.main[0].title }}`

## Intro to GitHub Pages

You can use the [editor on GitHub](https://github.com/aralph/aralph.github.io/edit/master/index.md) to maintain and preview the content for your website in Markdown files.

Whenever you commit to this repository, GitHub Pages will run [Jekyll](https://jekyllrb.com/) to rebuild the pages in your site, from the content in your Markdown files.

### Markdown

Markdown is a lightweight and easy-to-use syntax for styling your writing. It includes conventions for

```markdown
Syntax highlighted code block

# Header 1
## Header 2
### Header 3

- Bulleted
- List

1. Numbered
2. List

**Bold** and _Italic_ and `Code` text

[Link](url) and ![Image](src)
```

For more details see [GitHub Flavored Markdown](https://guides.github.com/features/mastering-markdown/).

### Jekyll Themes

Your Pages site will use the layout and styles from the Jekyll theme you have selected in your [repository settings](https://github.com/aralph/aralph.github.io/settings). The name of this theme is saved in the Jekyll `_config.yml` configuration file.

### Support or Contact

Having trouble with Pages? Check out our [documentation](https://help.github.com/categories/github-pages-basics/) or [contact support](https://github.com/contact) and we’ll help you sort it out.
