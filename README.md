# Advocate Chanchal Bhati Website

This repository contains a redesigned one-page website for Advocate Chanchal Bhati, focused on legal services and courtroom practice in Surajpur Court, Greater Noida.

## Highlights

- Full content and visual redesign from the base Agency template
- Legal-focused sections: expertise, focus areas, professional journey, advocate profile
- Responsive layout across desktop and mobile
- Profile fields for address, contact, and email intentionally kept blank in the contact section

## Project Structure

- `src/pug/` - page templates and modal content
- `src/scss/` - theme variables and section/component styles
- `src/js/` - front-end behavior scripts
- `dist/` - generated output (created during build)

## Run Locally

1. Install dependencies:

```bash
npm install
```

2. Build the project:

```bash
npm run build
```

3. Run local preview:

```bash
npm start
```

## Useful Scripts

- `npm run build` - Clean and build full site
- `npm run build:pug` - Compile Pug templates
- `npm run build:scss` - Compile SCSS styles
- `npm run build:scripts` - Copy/prepare JS scripts
- `npm run build:assets` - Copy assets into dist
- `npm run clean` - Remove dist output

## Notes

The contact section includes three profile rows labeled Address, Contact, and Email. Their values are intentionally blank so they can be filled later without further template changes.
 
## Deployment

Deploys are handled by the GitHub Actions workflow `.github/workflows/deploy.yml`, which builds the site into `dist/` and publishes that directory to the `gh-pages` branch.

- If this repository is a project site, set GitHub Pages to serve from the `gh-pages` branch.
- If this repository is a user/organization site (the repository name is `advocatechanchal.github.io`), GitHub Pages typically serves from the `master` branch root or the `docs/` folder; you can either change the Pages source in repository settings or ask me to update the workflow to publish to `master` or `docs/` instead.

To trigger a deploy, push to `master`:

```bash
git add .github/workflows/deploy.yml
git commit -m "Add CI deploy workflow"
git push origin master
```

If you use a custom domain, a `CNAME` file is included in the repository root to configure it.
