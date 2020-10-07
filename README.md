# Parima Hugo Tutorial

[gulp](https://gulpjs.com/) handles Tailwind CSS builds via `postcss` with 2 tasks called `dev-css` and `build-css`.

There's 2 npm scripts defined that make use of these tasks:

1. **start**
2. **deploy**

`start` is meant for local development (and the whole power of Tailwind CSS + autocomplete classes), `deploy` will build the site into `./public` (using `hugo --minify`), ready for deployment.

This boilerplate also includes [purgecss](https://purgecss.com/) to remove unused styles from the final stylesheet that gets written to `static/css` for deployment.

For testing/troubleshooting etc., un-purged CSS can be built using `gulp dev-css` whereas purged CSS comes out of `gulp build-css`.

## Usage

In order to work with this repository, only 2 things are required:

- Hugo
- node/npm

If that's set up, then all you need is to get the repository, run `npm install` and then `npm run start`. Go to `localhost:1313` and you should see a one-page demo site you can start working with in your browser.

**NOTE:** If you receive an error mentioning package-lock.json, try running `npm install tailwindcss@^1.8.10` and then running `npm install` again. (It seems that the npx package expected package-lock.json to be generated before installing.)