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
