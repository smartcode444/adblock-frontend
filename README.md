# AdBlock landing page

A static site — no build step, no framework. Ready to deploy on Vercel as-is.

## Deploy to Vercel

1. Push this folder to a GitHub repo (or a new one just for the site)
2. Go to vercel.com → Add New Project → import that repo
3. Framework preset: choose "Other" (it's plain HTML/CSS/JS, nothing to build)
4. Deploy — Vercel gives you a live URL immediately

No environment variables, no config needed for the site itself to go live.

## Before you go live, do these three things

### 1. Add your real app screenshot
Right now the phone mockup in the hero is hand-built in HTML/CSS to match
your app's UI. To swap in a real screenshot:

1. Create an `assets/` folder, put your screenshot in it (e.g. `app-home.png`)
2. In `index.html`, find the `<div class="phone-screen">...</div>` block
3. Delete everything inside it and replace with:
   ```html
   <img src="assets/app-home.png" alt="AdBlock app home screen" style="width:100%; border-radius:24px;">
   ```

### 2. Add your real download link
In `index.html`, search for `TODO: replace href` — there's one spot in the
final download section. Replace the `#` with your actual GitHub Releases
APK URL, e.g.:
```html
<a href="https://github.com/you/adblock-android/releases/download/v1.0/app-release.apk" class="btn btn-primary btn-large">Download the APK</a>
```
There are also three pricing-section buttons pointing to `#download` —
those scroll to this same button, so you only need to update the one link.

### 3. Add your comparison recording (once you have it)
In `index.html`, find the commented-out `<div class="video-slot">` block
inside the "See it work" section. Once you've recorded the on/off
comparison:
1. Add `comparison.mp4` (and ideally a `comparison-poster.jpg` still frame)
   to your `assets/` folder
2. Uncomment that block in `index.html`

Until then, the illustrated before/after mockup above it stands in fine on
its own.

## Files

- `index.html` — structure and copy
- `styles.css` — all styling
- `script.js` — one small scroll effect on the header, nothing else
