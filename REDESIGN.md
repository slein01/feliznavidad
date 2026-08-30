# feliznavidad.nl — redesign (bold & playful)

Design canvas (visuele spec): https://claude.ai/code/artifact/329e2eae-f326-4899-bf4f-e1a5eedaee63
Theme: Dawn 15.3.0

## Al gedaan in deze branch
- `config/settings_data.json` — actieve color scheme → palette (crème / ink / kerstrood), `buttons_radius` → 40, `buttons_border_thickness` → 2.
- `layout/theme.liquid` — Google Fonts `<link>` (Bricolage Grotesque, Instrument Sans, Space Mono) + `redesign.css` ingehaakt na `base.css`.
- `assets/redesign.css` — redesign-laag: display-typografie, pill-knoppen, rode primaire knop, mono/rode prijzen, kaart-styling + hover, categorie-panelen (groen/rood), PDP-styling (titel, prijs, quantity, accordion), announcement-bar (pine + mono), footer-koppen.
- `locales/nl.json` — `add_to_cart` → "In m'n boom".

## Nog te doen (sectie-/template-werk — CSS alleen komt hier niet bij)
- [ ] Fonts eventueel self-hosten (`.woff2` in `assets/` + `@font-face`) voor GDPR-clean i.p.v. Google Fonts `<link>`.
- [ ] Hero → `sections/image-banner.liquid` + `templates/index.json`: twee foto-frames + gouden prijs-sticker.
- [ ] Categorie-split (Klassiek/Grappig) → `sections/collection-list.liquid` + CSS.
- [ ] Trust-strip → `sections/multicolumn.liquid` op groene achtergrond.
- [ ] Mega-menu → `snippets/header-mega-menu.liquid` + CSS.
- [ ] Cart drawer → `snippets/cart-drawer.liquid` styling.
- [ ] PDP: prijs-tag in mono, "In m'n boom" CTA, spec-accordion.
- [ ] Footer: dark scheme + crème logo-plaatje.
- [ ] Contact / Over ons / Inspiratie pagina's → templates + secties.

Houd styling zoveel mogelijk in `redesign.css`; raak Dawn's eigen `.liquid` / `.css` zo min mogelijk aan.
