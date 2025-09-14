# Homepage of Ralph Aeschimann

Personal portfolio website showcasing my work as a Machine Learning Engineer.
* Live site: https://aralph.github.io


## Technology Stack

- GitHub Pages for hosting
- Jekyll with Cayman theme and custom CSS

## Local Development

This site is automatically built and deployed by GitHub Pages when changes are pushed to the `master` branch.

To build and preview locally, follow the instructions
- https://docs.github.com/en/pages/setting-up-a-github-pages-site-with-jekyll/testing-your-github-pages-site-locally-with-jekyll
  - including setting up the `github-pages` gem to have the themes suppported, https://docs.github.com/en/pages/setting-up-a-github-pages-site-with-jekyll/testing-your-github-pages-site-locally-with-jekyll#updating-the-github-pages-gem
- Also follow https://stackoverflow.com/a/62757655

I used a ruby version installed via brew rather than the system one. 
Be sure to adjust your PATH to invoke the intended ruby binaries. 

Once this is set up and a gemfile is generated, you can publish on localhost with
```zsh
$ bundle exec jekyll serve
```

## Deployment

For commits to `master` branch to this repository, GitHub Pages will run [Jekyll](https://jekyllrb.com/) to rebuild and deploy pages.
* Deployment status (login required): https://github.com/aralph/aralph.github.io/deployments/github-pages