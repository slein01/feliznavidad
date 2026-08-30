# feliznavidad.nl — redesign (bold & playful)

Design canvas (visuele spec): https://claude.ai/code/artifact/329e2eae-f326-4899-bf4f-e1a5eedaee63
Theme: Dawn 15.3.0

## Gedaan in deze branch

### Fundering
- `config/settings_data.json` — actieve color scheme → palette (crème / ink / kerstrood),
  `buttons_radius` 40, `buttons_border_thickness` 2, `cart_type` → `drawer`.
- `assets/redesign.css` — redesign-laag: self-hosted `@font-face` (6 woff2), display-typografie,
  pill-knoppen, rode primaire knop, mono/rode prijzen, kaart-styling + hover, PDP-styling
  (titel, prijs, quantity, accordion, "Onbreekbaar plastic"-badge via ::before),
  announcement-bar (pine + mono), mega-menu- en cart-drawer-styling, footer-koppen,
  plus alle CSS voor de custom secties hieronder.
- `layout/theme.liquid` — `redesign.css` ingehaakt na `base.css`.
- `assets/fn-*.woff2` — Bricolage Grotesque + Instrument Sans + Space Mono (latin + latin-ext).
- `locales/nl.json` — `add_to_cart` → "In m'n boom".

### Nieuwe secties (in `templates/index.json` geplaatst)
- `sections/fn-hero.liquid` — hero met twee overlappende foto-frames + gouden "vanaf €8,50"-sticker.
  Pakt standaard de eerste 2 productfoto's uit een collectie (instelbaar in de editor).
- `sections/fn-category-split.liquid` — twee gekleurde panelen (groen / rood) met foto, kop, tekst, link.
- `sections/fn-trust.liquid` — groene trust-strip, 3 punten met inline SVG-iconen.

`templates/index.json` volgorde: fn-hero → fn-category-split → featured-collection →
fn-trust → "niet compleet zonder"-tekst → reviews-kop → Elfsight reviews → merk-verhaal.
De oude `image-banner` / `collection-list` / disabled `multicolumn` zijn eruit.

## Nog handmatig in Shopify (geen code)
- **Mega-menu content**: bouw het menu met dropdown-items in *Online Store → Navigation*.
  De styling staat al klaar in `redesign.css` (`.mega-menu__*`).
- Hero-/categorie-foto's eventueel handmatig kiezen in de theme-editor (anders worden
  automatisch productfoto's gebruikt).

## Nog te doen (optioneel, volgende ronde)
- PDP-galerij exact als canvas (grote foto + thumbnailstrip links) — nu Dawn's thumbnail-layout.
- Cart drawer fijn-tunen op basis van de echte gerenderde markup.
- Contact / Over ons / Inspiratie: eigen templates + secties.
- Footer: dark scheme + crème logo-plaatje + betaalicoon-rij.
