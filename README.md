# Woodworks Website

Marketing website for Woodworks, built with React, Vite, and React Router.

The site includes:

- A homepage with service overviews and program links
- Dedicated pages for About, NDIS, ICARE, Individualised Programs, and After School Program
- A Contact page with a working FormSubmit form and on-site success page
- Shared site header/footer styling across the main pages

## Tech Stack

- React 19
- Vite 8
- React Router
- ESLint

## Getting Started

1. Install dependencies:

```powershell
npm.cmd install
```

2. Start the dev server:

```powershell
npm.cmd run dev
```

3. Build for production:

```powershell
npm.cmd run build
```

4. Preview the production build:

```powershell
npm.cmd run preview
```

Note:
On some Windows PowerShell setups, `npm run ...` may fail because PowerShell blocks `npm.ps1`.
If that happens, use `npm.cmd run ...` instead.

## Routes

- `/` Home
- `/about` About Us
- `/ndis` NDIS
- `/icare` ICARE
- `/individualised-programs` Individualised Programs
- `/after-school-program` After School Program
- `/contact` Contact
- `/contact/success` Contact form success page

## Contact Form

The contact form posts through [FormSubmit](https://formsubmit.co/).

Current behavior:

- The form submits to FormSubmit
- Successful submissions redirect back to `/contact/success`
- `_captcha` is disabled
- A custom subject line is included

Important:
FormSubmit may show a one-time activation screen until the connected email address has been activated through their confirmation email.

## Fonts

The project is set up to use Canva Sans globally.

- Font file location: [public/fonts/Canva-Sans-Regular.woff](/C:/Repos/WoodworksWebsite/public/fonts/Canva-Sans-Regular.woff)
- Global font setup: [src/index.css](/C:/Repos/WoodworksWebsite/src/index.css)

## Images And Placeholders

Some page content currently uses placeholder blocks where final artwork or approved photos still need to be supplied.

Examples include:

- Homepage feature and program content images
- Internal page showcase, testimonial, and support graphics
- Placeholder-only layout sections where a final designed image will be added later

The hero images and Woodworks logo are still connected where needed unless intentionally replaced.

## Project Structure

```text
src/
  pages/
    Home/
    About/
    Ndis/
    Icare/
    IndividualisedPrograms/
    AfterSchool/
    Contact/
    ContactSuccess/
  shared/components/
    SiteHeader/
    ContactCta/
  img/
  assets/
public/
  fonts/
```

## Notes For Future Updates

- Keep shared footer/contact sections consistent by reusing `ContactCta`
- Keep hero title alignment consistent across internal pages
- Replace placeholder blocks with final approved images when assets are ready
- If more Canva Sans weights are supplied later, add them in `src/index.css` with additional `@font-face` rules
