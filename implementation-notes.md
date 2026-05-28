# DinoBracket Redesign Notes

This package is a visual and CSS implementation preview based on the live DinoBracket.com site inspected on May 28, 2026.

## What stays the same

- WordPress navigation and footer links.
- Tournament hub links.
- Article links, affiliate links, videos, and related-post URLs.
- Existing public slugs and URL casing, such as `/Tyrannosaurus-rex/`.
- Existing standalone bracket filenames, such as `/dinosaur-tournament.html`.
- Media should use local project asset paths instead of current live `wp-content/uploads` URLs.
- Standalone bracket IDs such as `#intro-screen`, `#default-seeds`, `#random-seeds`, `#matchup-container`, `.dino-card`, `.learn-more`, `#restart-tournament`, and `#previous-matchup`.
- Existing click behavior: choose seed style, pick matchup winner, learn more, go back, restart, and share champion.

## What changes

- Home page becomes a clear first-screen product experience with a stronger call to action.
- Tournament hub uses card-based tournament entries instead of a plain link list.
- Bracket app gets larger contender cards, clearer hierarchy, more polished modals, and mobile-first spacing.
- Dinosaur article pages get a stronger hero image, fact sidebar, cleaner reading column, preserved ad placement, video support, and related contender cards.
- Colors move from generic theme defaults to a Dino Bracket palette: forest green, fossil paper, gold, and champion red.

## Applying to the live site

1. Use `styles.css` as the design source.
2. For WordPress pages, copy the global/site sections into Appearance -> Customize -> Additional CSS, or enqueue it from the active child theme.
3. For standalone tournament HTML files, keep the existing scripts and data unchanged. Replace only visual classes/styles or append the bracket-app portion of `styles.css` after Tailwind.
4. If you want the tournament hub card layout live, update the WordPress page markup from a list of links to linked cards that preserve the same destination URLs.
5. For dinosaur article pages, keep the WordPress article content, public slugs, affiliate links, video URLs, and related-post URLs unchanged. Apply the article classes/pattern from `Tyrannosaurus-rex.html` and the article CSS from `styles.css`.

## Media paths

- Global brand/site assets live in `images/`.
- Tournament-specific assets live in `tournament-pages/{tournament}/images/`.
- Article pages should reference images and videos with relative paths to those local folders.
- Do not rely on current live `https://dinobracket.com/wp-content/uploads/...` media URLs in redesigned pages.

The preview files use live DinoBracket image URLs, so they should look close to production without bundling image assets locally.
