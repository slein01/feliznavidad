# feliznavidad.nl — redesign (bold & playful)

Design canvas (visuele spec): https://claude.ai/code/artifact/329e2eae-f326-4899-bf4f-e1a5eedaee63
Theme: Dawn 15.3.0

## Al gedaan in deze branch
- `assets/redesign.css` — nieuwe redesign-laag (tokens, @font-face, knop/kaart/announcement overrides). Geladen na `base.css`.
- `layout/theme.liquid` — `redesign.css` ingehaakt in `<head>` (regel na `base.css`).
- `config/settings_data.json` — actieve color scheme omgezet naar de palette (crème / ink / kerstrood), `buttons_radius` → 40 (pill), `buttons_border_thickness` → 2.

## Nog te doen (port vanuit de artboards)
- [ ] Fonts: `BricolageGrotesque-Bold.woff2` + `InstrumentSans-Regular/SemiBold.woff2` in `assets/` zetten (of via font_picker).
- [ ] Hero → `sections/image-banner.liquid`: twee foto-frames + gouden prijs-sticker.
- [ ] Categorie-split (Klassiek/Grappig) → `sections/collection-list.liquid` + CSS.
- [ ] Trust-strip → `sections/multicolumn.liquid` op groene achtergrond.
- [ ] Mega-menu → `snippets/header-mega-menu.liquid` + CSS.
- [ ] Cart drawer → `snippets/cart-drawer.liquid` styling.
- [ ] PDP: prijs-tag in mono, "In m'n boom" CTA, spec-accordion.
- [ ] Footer: dark scheme + crème logo-plaatje.
- [ ] Contact / Over ons / Inspiratie pagina's → templates + secties.

Houd styling zoveel mogelijk in `redesign.css`; raak Dawn's eigen `.liquid` / `.css` zo min mogelijk aan.
