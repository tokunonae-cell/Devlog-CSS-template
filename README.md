# Devlog

This is a simple static blog built with [11ty](https://www.11ty.dev/) and hosted on GitHub Pages.

All blog posts are written in Markdown and stored in `src/posts/`. The site is generated into the `_site/` folder and deployed to the `gh-pages` branch.

The devlog can be viewed live at: https://pages.github.falmouth.ac.uk/GA-Undergrad-Student-Work-26-27/COMP302-303-2424395-Devlog/

> [!NOTE]  
> The instructions for this template will use command line only.


---

## Grabbing a copy of the template

At the top right-hand corner of this repo should be a `Use Template` button.
If you can't see it, please click this link here:

[USE TEMPLATE](https://github.falmouth.ac.uk/new?template_name=devlog_template&template_owner=Robotics)

Github will then take you through the process of setting up a new repo with the template.

For `Owner`, please use `GA-Undergrad-Student-Work-[YEAR]`.

---

## Installing Node.js and npm

Node and npm are required to use this project.

You can find the most up-to-date installation instructions for both here:

[https://docs.npmjs.com/downloading-and-installing-node-js-and-npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

---

## Setup
 
First you'll need to clone and then install dependencies.

```bash
git clone <repo-url>
cd <repo-folder>
npm install
```

> [!NOTE]  
> This installs 11ty and the gh-pages packages required to build and deploy the site.

---

## Changes to make to repo

To successfully deploy to the `gh-pages` branch, there is a single line of JavaScript that you will need to update.


Open the `.eleventy.js` file.

You are looking for the following line (it should be at the very top of the file):

```
const repoDir = "/Robotics/devlog_template/";
```

Your own url for your repo might look something like this: `https://github.falmouth.ac.uk/GA-Undergrad-Student-Work-25-26/REPO-NAME/`;

You want to copy `GA-Undergrad-Student-Work-25-26/REPO-NAME/` from the URL and paste it into the const variable.

It may look something like this:

```
const repoDir = "/GA-Undergrad-Student-Work-25-26/REPO-NAME/";
```

---

## Running Locally

To preview the site locally with live reload:

```bash
npm start
```

Your terminal will eventually output: `Server at http://localhost:8080/`.

Open http://localhost:8080 in your browser.

---

## Adding a new post

To generate a new post, run:

```bash
npm run make-post
```

A new post will be created automa/`tically in `src/posts/`.

---

## Viewing before deploying

To check the production version of the website before deploying, run:

```
npm run preview
```

## Clear old _site

If the old _site folder is causing issue, remove it with:

```
rm -rf _site
```

## Deploying to GitHub Pages

Since GitHub Actions are disabled, the site must be deployed manually.

1. Compress your video and images!

There is a file size limit on the GA's Github pages. The max a file can be is `50 MB`.

There are various online compression tools available.

- [FreeConvert](https://www.freeconvert.com/video-compressor/download), for example, will allow you to specify a max file size. 

- [Ezgif](https://ezgif.com/) can resize, crop, cut and compress videos as well as turn them into gifs.

2. Make sure you have committed your changes to the main branch:

```bash
git add -A
git commit -m "Add new post or changes"
git push
```

3. Deploy the built site to the `gh-pages` branch:

```bash
npm run deploy
```

This command builds the site (`npm run build`) and pushes `_site/` to the `gh-pages` branch.

GitHub Pages will automatically serve the `gh-pages` branch.

---

## Dependencies

- [Node.js](https://nodejs.org/)
- [11ty](https://www.11ty.dev/)
- [cross-env](https://www.npmjs.com/package/cross-env)
- [concurrently](https://www.npmjs.com/package/concurrently) (for use with sass)
- [gh-pages](https://www.npmjs.com/package/gh-pages)

---

## Credits

[Cat photo](https://www.pexels.com/photo/a-black-long-haired-angry-cat-with-blue-collar-9820722/) by [Sami Aksu
](https://www.pexels.com/fr-fr/@sami-aksu-48867324/) on [Pexels](https://www.pexels.com/).

[Cat video](https://www.pexels.com/video/a-cat-licking-the-crystal-glass-6869671/) by [cottonbro studio](https://www.pexels.com/@cottonbro/) on [Pexels](https://www.pexels.com/).

---

## License

This project is licensed under [Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International](https://creativecommons.org/licenses/by-nc-sa/4.0/)

This license requires that reusers give credit to the creator. It allows reusers to distribute, remix, adapt, and build upon the material in any medium or format, for noncommercial purposes only. If others modify or adapt the material, they must license the modified material under identical terms.

- **BY:** Credit must be given to you, the creator.
- **NC:** Only noncommercial use of your work is permitted. *Noncommercial means not primarily intended for or directed towards commercial advantage or monetary compensation.*
- **SA:** Adaptations must be shared under the same terms.
