# Juan A. Bogliaccini — Academic Website

Static academic website rebuilt from the supplied Weebly content.

## Current version

This version includes:

- a cleaner academic/editorial layout;
- responsive navigation for desktop and mobile;
- an **EN / ES language switch** in the top navigation, with the choice remembered in the browser;
- more generous vertical spacing between major subsections;
- the three project figures from the old site removed, while retaining the project text and links;
- direct links to the **public UCU profile** and **public CVUy profile**;
- custom domain configuration for `juanbogliaccini.com`.

## Structure

- `index.html` — complete site
- `styles.css` — visual design and responsive layout
- `script.js` — mobile navigation and language switch
- `CNAME` — custom domain (`juanbogliaccini.com`)

## Hosting: GitHub Pages

This site requires no server, database, build process, or framework. GitHub Pages is therefore a good fit and is available with GitHub Free for public repositories. GitHub Pages supports custom domains, including both the apex domain and `www` subdomain.

The intended repository is:

`https://github.com/jbogliac/Juan-Bogliaccini`

### Deploy / update

1. Upload the contents of this folder to the repository root.
2. In **Settings → Pages**, choose **Deploy from a branch**, select `main`, and choose `/ (root)`.
3. In **Settings → Pages → Custom domain**, enter `juanbogliaccini.com`.
4. At Square, where the domain is managed, configure DNS to point the domain to GitHub Pages.
5. Enable **Enforce HTTPS** in GitHub Pages once the certificate becomes available.

## Domain DNS

For the apex domain, GitHub currently documents these A records:

- `185.199.108.153`
- `185.199.109.153`
- `185.199.110.153`
- `185.199.111.153`

For `www`, use a CNAME pointing to:

`jbogliac.github.io`

The existing Google mail redirect should be preserved when editing the Square DNS records.

## External profiles

- UCU public profile: https://www.ucu.edu.uy/institucional/docente/juan-a--bogliaccini--221d
- CVUy public CV: https://exportcvuy.anii.org.uy/cvsni/

## Future updates

The old Weebly document contained references to PDFs, appendices, replication files and syllabi that were not included in the supplied source package. Those can be added later without changing the site's architecture.


Version 4: Books section placed before Refereed Articles; Empowering Labor publisher corrected to Cambridge University Press.

Version 5: Removed Research Projects section entirely; standardized subtitle spacing; added explicit Cambridge University Press publisher and official book link for Empowering Labor; separated Refereed Articles into its own section after Books.


Version 6: Added the selected 2025 portrait photo to the homepage hero.
