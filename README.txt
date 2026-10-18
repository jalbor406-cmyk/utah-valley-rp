CANYON CREST RP STORE — BEGINNER SETUP
======================================

FILES
- index.html: storefront page
- styles.css: colors, layout, responsive styling
- config.js: public store and Discord links
- script.js: connects buttons to the links in config.js

IMPORTANT
This is a static storefront starter. It does NOT process payments itself.
Use Tebex for FiveM checkout and delivery. Never add your Tebex secret key,
API keys, passwords, or payment information to these website files.

STEP 1 — CREATE THE TEBEX STORE
1. Go to https://server.tebex.io/
2. Create a new store and choose the FiveM store type.
3. Complete the required store profile, support contact, identity verification,
   wallet setup, and Cfx account association.
4. Create categories called "Police Vehicles" and "Supporter Packages".
5. Create products with clear descriptions, accurate images, prices, and
   explicit deliverables. Only sell content you own or are licensed to distribute.
6. Follow the official FiveM setup instructions:
   https://docs.fivem.net/docs/server-manual/setting-up-a-tebex-store/
7. Keep the Tebex secret key private. For server integration, add it only to
   server.cfg as directed by Tebex/Cfx, never to website files or Discord.

STEP 2 — CONNECT THE WEBSITE BUTTONS
1. Open config.js in Notepad.
2. Replace https://YOUR-STORE.tebex.io with your actual public Tebex store URL.
3. Replace the category URLs with the exact public category links from your store.
4. Replace https://discord.gg/YOUR-INVITE with your actual public Discord invite.
5. Save the file.

If your store URLs differ from the example, use the exact URLs shown in your
Tebex browser address bar. Don't guess the category path.

STEP 3 — PREVIEW THE WEBSITE
- Keep all four files in the same folder.
- Double-click index.html to preview it in a browser.
- The website can be previewed locally; other people cannot access your local
  copy until you publish it to a web host.

STEP 4 — PUBLISH
Upload the files to a static website host such as GitHub Pages, Netlify, or
Cloudflare Pages. Follow that host's current instructions. You can connect a
custom domain later. The Tebex store can also use its own supported custom
domain settings.

STEP 5 — TEST BEFORE ANNOUNCING
- Check every button on desktop and phone.
- Verify product images, descriptions, prices, support details, and policies.
- Test the purchase/delivery flow using Tebex's supported test process where
  available.
- Submit the Tebex store for review and wait for approval before selling.

DESIGN CUSTOMIZATION
Edit the color values near the top of styles.css. The default style is dark navy
with blue highlights. Product images and live product prices are not synced
automatically in this starter; the buttons link out to Tebex. A deeper live
catalog integration would require a supported Tebex integration approach.
