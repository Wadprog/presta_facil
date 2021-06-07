# Secure Privacy

This is Secure Privacy site. It is built with [Prismic CMS](https://prismic.io/), [Gatsby](https://www.gatsbyjs.com/) and deployed on [Render.com](https://render.com/).

To see production site, visit [https://secureprivacy.ai/](https://secureprivacy.ai/).

## How to start project locally

To start project locally, clone this repository. 

`
git clone git@github.com:secureprivacy/sp-website.git
`

Go to project directory and install dependencies.

`
make install
`

Then start project.

`
make start
`

Visit [http://localhost:8000/](http://localhost:8000/).


Now your can change code and evaluate changes in browser.

Run `make clean` to clean cashe when you add new content in Prismic and want to see it locally.

## How to commit changes

When you are ready, check build to insure that your changes do not break anything.

`
make build
`

Then you can see production version of site locally by running:

`
make serve
`

If build is live, commit changes to GitHub repository. When you open pull request, Render will deploy test version of site. You will see it's URL in commit comment.

Visit test site and check your changes. If everything is ok, ask your buddy to review changes. After review is done and code is fixed, you can merge pull request.
