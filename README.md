# Juan A. Bogliaccini — Academic Website

Static academic website rebuilt from the supplied Weebly content.

## Structure

- `index.html` — complete site
- `styles.css` — visual design and responsive layout
- `script.js` — mobile navigation
- `CNAME` — custom domain (`juanbogliaccini.com`)
- `assets/` — original project images supplied with the source document

## Recommended hosting: GitHub Pages

This site requires no server, database, build process, or framework. GitHub Pages is therefore a good fit and is available with GitHub Free for public repositories. GitHub Pages supports custom domains, including both the apex domain and `www` subdomain.

### Deploy

1. Create a GitHub account if you do not already have one.
2. Create a new **public** repository named `juanbogliaccini.github.io` (if that username is available for your GitHub account).
3. Upload the contents of this folder to the repository root.
4. In **Settings → Pages**, choose **Deploy from a branch**, select `main`, and choose `/ (root)`.
5. In **Settings → Pages → Custom domain**, enter `juanbogliaccini.com`.
6. At your domain registrar, configure DNS as GitHub recommends. For the apex domain, GitHub currently documents these A records:
   - `185.199.108.153`
   - `185.199.109.153`
   - `185.199.110.153`
   - `185.199.111.153`
7. Add a `www` CNAME pointing to `YOUR-GITHUB-USERNAME.github.io` if you want both versions to work.
8. Enable **Enforce HTTPS** in GitHub Pages once the certificate becomes available.

DNS changes can take some time to propagate.

## Alternative: Cloudflare Pages

Cloudflare Pages is also an excellent free option for this static site. Its current free plan lists unlimited static requests and bandwidth, with up to 500 builds per month. It can use a custom domain as well.

For this particular academic website, GitHub Pages is recommended because the site is simple, transparent, and easy to maintain directly from a GitHub repository.

## Future updates

The easiest workflow is simply:

1. edit `index.html`;
2. replace/add files in `assets/` when needed;
3. commit and push to GitHub;
4. GitHub Pages publishes the change automatically.

The old Weebly document contained references to PDFs, appendices, replication files and syllabi that were not included in the supplied source package. Those can be added later without changing the site's architecture.
