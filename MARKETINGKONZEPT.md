# Marketingkonzept BelegNest

> Grundlage fuer die Landingpage-Erstellung, Branding-Assets, Styling und Kommunikationsstrategie.

---

## 1. Markenidentitaet

### 1.1 Name und Bedeutung

| Element | Inhalt |
|---|---|
| **Name** | BelegNest |
| **Herkunft** | "Beleg" (Kassenzettel, Quittung) + "Nest" (sicherer Aufbewahrungsort) |
| **Kernbotschaft** | Ein digitales Nest, in dem jeder Beleg sicher, sortiert und jederzeit wiederfindbar aufgehoben ist |
| **Emotionale Ebene** | Vertrauen, Geborgenheit, Ordnung, Nachhaltigkeit |

### 1.2 Positionierung

| Dimension | Auspraegung |
|---|---|
| **Markenversprechen** | "Deine Belege. Sicher aufgehoben. Nachhaltig gedacht." |
| **Markenwerte** | Privat, Einfach, Ordentlich, Zuverlaessig, Nachhaltig |
| **Tonalitaet** | Warmherzig, freundlich, vertrauenswuerdig, nachhaltigkeitsbewusst. Nie technisch, nie belehrend. |
| **Sprachstil** | Du-Ansprache. Kurze Saetze. Klare Handlungsaufforderungen. Keine Fachbegriffe. |
| **Was BelegNest nicht ist** | Keine Buchhaltungssoftware. Kein Haushaltsbuch. Keine Cloud-Datenkrake. |

### 1.3 Claims und Slogans

| Typ | Text (DE) | Text (EN) |
|---|---|---|
| **Hauptclaim** | "BelegNest. Foto. Ablegen. Wiederfinden." | "BelegNest. Snap. Store. Rediscover." |
| **Tagline** | "Dein sicherer Platz fuer jeden Beleg" | "Your safe place for every receipt" |
| **Hero-Titel** | "Deine Belege. Sicher aufgehoben. Nachhaltig gedacht." | "Your Receipts. Safely Stored. Sustainably Managed." |
| **Hero-Untertitel** | "Kassenzettel, Quittungen und Rechnungen digital archivieren, durchsuchen und exportieren. Privat, sicher und gut fuer die Umwelt." | "Digitize, archive, search and export receipts. Private, secure and good for the environment." |
| **Nachhaltigkeit** | "Gut fuer dich. Gut fuer die Umwelt." | "Good for you. Good for the planet." |
| **CTA primaer** | "Jetzt Beleg erfassen" | "Capture Receipt Now" |
| **CTA sekundaer** | "Beleg-Archiv oeffnen" | "Open Receipt Archive" |

---

## 2. Visuelle Identitaet / Design System

### 2.1 Farbpalette

#### Primaerfarben

| Name | Hex | RGB | Tailwind-Klasse | Verwendung |
|---|---|---|---|---|
| **Nest-Gruen** (Primaer) | `#0D9668` | 13, 150, 104 | `teal-600` | Logo, Buttons, Links, Header-Akzent, CTA |
| **Nest-Gruen Hell** | `#14B8A6` | 20, 184, 166 | `teal-500` | Hover-States, Dark-Mode Buttons |
| **Nest-Gruen Dunkel** | `#0F766E` | 15, 118, 110 | `teal-700` | Hero-Gradient Start, Active States |
| **Blatt-Gruen** (Akzent) | `#34D399` | 52, 211, 153 | `emerald-400` | Nachhaltigkeit-Akzente, Leaf-Icon, Badges |
| **Wald-Gruen** | `#065F46` | 6, 95, 70 | `emerald-800` | Hero-Gradient Mitte |
| **Tief-Gruen** | `#14532D` | 20, 83, 45 | `green-900` | Hero-Gradient Ende |

#### Neutralfarben

| Name | Hex | Tailwind-Klasse | Verwendung |
|---|---|---|---|
| **Sandweiss** | `#FAF9F6` | Custom `--background` | Seitenhintergrund Light Mode |
| **Anthrazit** | `#171717` | `zinc-900` | Text Light Mode |
| **Warmgrau** | `#78716C` | `stone-500` | Sekundaertext, Footer |
| **Hellgrau** | `#F4F4F5` | `zinc-100` | Hover-Backgrounds, Trennlinien |
| **Tiefblack** | `#0A0A0A` | Custom `--background` dark | Seitenhintergrund Dark Mode |

#### Funktionale Farben

| Name | Hex | Tailwind-Klasse | Verwendung |
|---|---|---|---|
| **Warnung** | `#D97706` | `amber-600` | Garantie bald ablaufend (gelb) |
| **Erfolg** | `#16A34A` | `green-600` | Garantie aktiv, Speichern-Erfolg |
| **Fehler** | `#DC2626` | `red-600` | Garantie abgelaufen, Fehlermeldungen |
| **Info** | `#7C3AED` | `purple-600` | Export-Features |
| **Cyan** | `#0891B2` | `cyan-600` | Backup-Features |

### 2.2 Gradient-Definitionen

```
Hero-Gradient (Light):  from-teal-700 via-emerald-800 to-green-900
Hero-Gradient (Dark):   from-emerald-950 via-zinc-950 to-zinc-950
Sustainability-BG:      from-emerald-50 to-white (light) / from-emerald-950/30 to-zinc-950 (dark)
CTA-BG:                 bg-zinc-50 (light) / bg-zinc-900/50 (dark)
```

### 2.3 Typografie

| Element | Font | Groesse | Gewicht | Tailwind |
|---|---|---|---|---|
| **H1 (Hero)** | Geist Sans | 3.75rem (60px) | Bold (700) | `text-4xl sm:text-5xl lg:text-6xl font-bold` |
| **H2 (Section)** | Geist Sans | 2.25rem (36px) | Bold (700) | `text-3xl sm:text-4xl font-bold` |
| **H3 (Card)** | Geist Sans | 1.125rem (18px) | Semibold (600) | `text-lg font-semibold` |
| **Body** | Geist Sans | 0.875rem (14px) | Regular (400) | `text-sm` |
| **Hero-Subtitle** | Geist Sans | 1.25rem (20px) | Regular (400) | `text-lg sm:text-xl` |
| **Button** | Geist Sans | 1rem (16px) | Semibold (600) | `text-base font-semibold` |
| **Caption** | Geist Sans | 0.75rem (12px) | Regular (400) | `text-xs` |
| **Mono (Code)** | Geist Mono | nach Kontext | Regular | `font-mono` |

### 2.4 Abstaende und Layout

| Element | Wert | Tailwind |
|---|---|---|
| **Max-Breite Inhalt** | 80rem (1280px) | `max-w-7xl` |
| **Seitenabstand** | 1rem / 1.5rem / 2rem | `px-4 sm:px-6 lg:px-8` |
| **Section-Abstand** | 4rem / 6rem | `py-16 sm:py-24` |
| **Card-Abstand innen** | 1.5rem | `p-6` |
| **Card-Radius** | 1rem | `rounded-2xl` |
| **Button-Radius** | 9999px (pill) | `rounded-full` |
| **Grid Karten** | 1 / 2 / 3 Spalten | `grid sm:grid-cols-2 lg:grid-cols-3 gap-8` |

### 2.5 Schatten und Borders

| Element | Light | Dark |
|---|---|---|
| **Card** | `border border-zinc-200 shadow-sm` | `border-zinc-800` |
| **Card Hover** | `shadow-md` | - |
| **Header** | `border-b border-zinc-200 bg-white/80 backdrop-blur-sm` | `border-zinc-800 bg-zinc-950/80` |
| **Footer** | `border-t border-zinc-200 bg-zinc-50` | `border-zinc-800 bg-zinc-950` |

---

## 3. Logo und Favicon

### 3.1 Favicon (aktuell implementiert)

Das Favicon ist als SVG unter `public/favicon.svg` gespeichert.

**Beschreibung:**
- 64x64px, abgerundetes Quadrat (`rx=14`)
- Hintergrund: Nest-Gruen `#0D9668`
- Nest-Symbol: Weisse geschwungene Schale (Schutz-Metapher)
- Beleg/Dokument: Stilisierter weisser Zettel mit Linien (eingefuegt ins Nest)
- Blatt-Akzent: Kleines Blatt in `#34D399` (oben rechts, Nachhaltigkeit)
- Linien auf dem Dokument: 3 horizontale Striche (Datenzeilen)

### 3.2 Logo-Auspraegungen (Landingpage)

| Variante | Beschreibung | Verwendung |
|---|---|---|
| **Icon-only** | Favicon-SVG, quadratisch | Browser-Tab, App-Icon, kleine Formate |
| **Wortmarke** | "BelegNest" in Geist Sans Bold, Farbe teal-600 | Header, Footer |
| **Icon + Wortmarke** | SVG-Icon links + "BelegNest" rechts | Header-Navigation (empfohlen) |
| **Icon + Claim** | Icon + "Foto. Ablegen. Wiederfinden." | Hero-Bereich, Open-Graph |

### 3.3 Header-Logo (aktuelle Implementierung)

Im Header wird aktuell das Lucide `Receipt`-Icon mit dem Text "BelegNest" verwendet:
```
<Receipt className="h-7 w-7" /> + <span>BelegNest</span>
Farbe: text-teal-600 dark:text-teal-400
```

**Empfehlung fuer die Landingpage:** Das Custom-SVG-Favicon als Inline-SVG im Header verwenden anstelle des generischen Receipt-Icons, um die Markenidentitaet zu staerken.

---

## 4. Iconografie

### 4.1 Icon-Bibliothek

Die App verwendet **Lucide React** als Icon-Bibliothek. Alle Icons sind Outline-Stil, 24x24px Standardgroesse.

### 4.2 Feature-Icons und Farbzuordnung

| Feature | Icon | Farbe (Light/Dark) | Hintergrund |
|---|---|---|---|
| Beleg fotografieren | `Camera` | `text-teal-600 / teal-400` | `bg-teal-50 / teal-950` |
| Sofort finden | `Search` | `text-emerald-600 / emerald-400` | `bg-emerald-50 / emerald-950` |
| Garantie-Tracker | `Shield` | `text-amber-600 / amber-400` | `bg-amber-50 / amber-950` |
| Export | `FileDown` | `text-purple-600 / purple-400` | `bg-purple-50 / purple-950` |
| Privatsphaere | `Leaf` | `text-green-600 / green-400` | `bg-green-50 / green-950` |
| Backup | `HardDrive` | `text-cyan-600 / cyan-400` | `bg-cyan-50 / cyan-950` |
| Nachhaltigkeit (global) | `Globe` | `text-emerald-600 / emerald-400` | `bg-emerald-100 / emerald-900/50` |
| Weniger Papier | `TreePine` | `text-green-600 / green-400` | `bg-green-50 / green-950` |
| Keine Chemie | `Recycle` | `text-teal-600 / teal-400` | `bg-teal-50 / teal-950` |
| Nachhaltig archivieren | `Leaf` | `text-emerald-600 / emerald-400` | `bg-emerald-50 / emerald-950` |

### 4.3 UI-Icons

| Aktion | Icon | Kontext |
|---|---|---|
| Menue oeffnen | `Menu` | Mobile Header |
| Menue schliessen | `X` | Mobile Header |
| Sprache wechseln | `Globe` | LanguageSwitcher |
| Theme wechseln | `Sun` / `Moon` | ThemeToggle |
| Benutzer | `User` | UserMenu |
| Pro-Badge | `Crown` | Pricing |
| Upgrade | `Zap` | UpgradeGate |
| Uhr / Pending | `Clock` | Pro-Request Status |
| Senden | `Send` | Formular-Submit |
| Laden | `Loader2` (animated spin) | Loading-States |
| Check | `Check` | Erfolg, Feature verfuegbar |
| Kreuz | `X` | Feature nicht verfuegbar |

---

## 5. Seitenstruktur der Landingpage

### 5.1 Sektionen (von oben nach unten)

```
1. Header (sticky)
   - Logo + Navigation + Language Switcher + Theme Toggle + User Menu

2. Hero Section
   - Gradient-Hintergrund (teal → emerald → green)
   - H1: "Deine Belege. Sicher aufgehoben. Nachhaltig gedacht."
   - Subtitle: Beschreibung
   - 2 CTAs: "Jetzt Beleg erfassen" (primaer) + "Beleg-Archiv oeffnen" (sekundaer)

3. Features Section
   - H2: "Alles, was du brauchst"
   - 6 Feature-Cards im 3er-Grid
   - Icons mit farbigen Hintergruenden

4. Sustainability Section
   - Gradient-Hintergrund (emerald-50 → white)
   - Globe-Icon zentriert
   - H2: "Gut fuer dich. Gut fuer die Umwelt."
   - 3 Saeulen: Weniger Papier / Keine Chemie / Nachhaltig archivieren
   - Daten-gestuetzt (5,7 Mrd. Kassenzettel)

5. CTA Section
   - "BelegNest. Foto. Ablegen. Wiederfinden."
   - Tagline darunter
   - Grosser CTA-Button

6. Footer
   - Logo + Copyright WAMOCON GmbH
   - Legal-Links: Impressum, Datenschutz, AGB
   - Firmendetails: Adresse, HRB, USt-IdNr., Geschaeftsfuehrer
```

### 5.2 Zusaetzliche Sektionen (Empfehlung fuer erweiterte Landingpage)

| Sektion | Inhalt | Position |
|---|---|---|
| **Social Proof** | "X Belege bereits gesichert" (Live-Counter oder statisch) | Nach Features |
| **Wie es funktioniert** | 3-Schritt-Visualisierung: Foto → Kategorisieren → Fertig | Nach Hero oder nach Features |
| **Vergleichstabelle** | BelegNest vs. Expensify vs. Schublade vs. Foto-Galerie | Nach Sustainability |
| **FAQ** | 5-8 haeufige Fragen (Akkordeon) | Vor CTA |
| **Pricing** | Free vs. Pro Vergleich (schon implementiert unter `/pricing`) | Eigenstaendige Seite, Link im Footer |

---

## 6. Messaging nach Zielgruppe

### 6.1 Verbraucher (Garantie-fokussiert)

| Touchpoint | Message |
|---|---|
| **Hook** | "Garantie abgelaufen? Beleg verloren? Nie wieder." |
| **Nutzen** | "Garantie-Tracker mit Ampelsystem: gruen = aktiv, gelb = bald ablaufend, rot = vorbei." |
| **CTA** | "Sichere jetzt deinen naechsten Kaufbeleg." |

### 6.2 Steuererklaerungs-Sammler

| Touchpoint | Message |
|---|---|
| **Hook** | "Steuererklaerung steht an? Belege sortiert in 3 Sekunden." |
| **Nutzen** | "Exportiere alle steuerlich absetzbaren Belege als ZIP fuer deinen Steuerberater." |
| **CTA** | "Jetzt Belege fuer 2026 sammeln." |

### 6.3 Freelancer / Selbststaendige

| Touchpoint | Message |
|---|---|
| **Hook** | "Belege in der Foto-Galerie zwischen Urlaubsbildern? Das geht besser." |
| **Nutzen** | "10 Jahre Aufbewahrungspflicht? BelegNest archiviert, sortiert und exportiert." |
| **CTA** | "Starte dein digitales Belegarchiv." |

### 6.4 Umweltbewusste Nutzer

| Touchpoint | Message |
|---|---|
| **Hook** | "5,7 Milliarden Kassenzettel pro Jahr, allein in Deutschland." |
| **Nutzen** | "Jeder digitale Beleg spart Thermopapier, Chemie und CO2." |
| **CTA** | "Gut fuer dich. Gut fuer die Umwelt." |

---

## 7. SEO-Strategie

### 7.1 Primaere Keywords

| Keyword | Suchvolumen (DACH/Monat) | Content-Typ | Seite |
|---|---|---|---|
| "Kassenzettel aufbewahren" | 25.000+ | Ratgeber + CTA | Blog / Landingpage |
| "Garantie Beleg verloren" | 12.000+ | Guide + Musterbrief | Blog |
| "Belege digitalisieren" | 8.000+ | Vergleichsartikel | Blog |
| "Beleg fuer Steuererklaerung" | 15.000+ | Steuer-Checkliste | Blog |
| "Thermopapier verblasst" | 5.000+ | Erklaer-Artikel | Blog |
| "Steuerberater Belege uebergeben" | 3.000+ | Guide fuer Selbststaendige | Blog |

### 7.2 Meta-Tags (Landingpage)

```html
<title>BelegNest - Dein sicherer Platz fuer jeden Beleg</title>
<meta name="description" content="Kassenzettel, Quittungen und Rechnungen
digital archivieren, durchsuchen und exportieren. Privat, sicher und
nachhaltig. Kostenlos starten." />

<!-- Open Graph -->
<meta property="og:title" content="BelegNest. Foto. Ablegen. Wiederfinden." />
<meta property="og:description" content="Deine Belege. Sicher aufgehoben.
Nachhaltig gedacht. Kostenlos fuer immer." />
<meta property="og:image" content="/og-image.png" />
<meta property="og:type" content="website" />

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="BelegNest - Foto. Ablegen. Wiederfinden." />
<meta name="twitter:description" content="Kassenzettel digital archivieren.
Privat, sicher, nachhaltig." />
```

### 7.3 Strukturierte Daten

```json
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "BelegNest",
  "applicationCategory": "FinanceApplication",
  "operatingSystem": "Web",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "EUR"
  },
  "description": "Kassenzettel, Quittungen und Rechnungen digital archivieren."
}
```

---

## 8. Preismodell

### 8.1 Tier-Struktur (implementiert)

| Feature | Free (€0) | Pro (€4,99/Monat oder €49,99/Jahr) |
|---|---|---|
| Belege | 50 | Unbegrenzt |
| Speicher | 100 MB | 5 GB |
| Kategorien | 5 | Unbegrenzt |
| ZIP-Export | Nein | Ja |
| PDF-Export | Nein | Ja |
| Backup/Import | Nein | Ja |
| Garantie-Tracker | Nein | Ja |

### 8.2 Upgrade-Flow

Pro-Tier wird nicht per Stripe Checkout gebucht, sondern ueber ein Anfrage-System:
1. Nutzer klickt "Pro anfragen" auf der Pricing-Seite
2. Optionale Begruendung wird eingegeben
3. Admin sieht die Anfrage im Admin-Dashboard
4. Admin kann genehmigen oder ablehnen
5. Bei Genehmigung wird der Nutzer auf Pro hochgestuft

---

## 9. Technische Assets fuer die Landingpage

### 9.1 Benoetigte Bilder/Assets

| Asset | Format | Groesse | Status |
|---|---|---|---|
| **Favicon** | SVG | 64x64 | Vorhanden (`public/favicon.svg`) |
| **OG-Image** | PNG | 1200x630 | Noch zu erstellen |
| **Hero-Illustration** | SVG / PNG | variabel | Optional (aktuell Gradient-only) |
| **Feature-Mockups** | PNG | variabel | Optional (Smartphone mit App-Screenshot) |
| **App-Screenshots** | PNG | variabel | Noch zu erstellen (nach Fertigstellung) |
| **Logo horizontal** | SVG | variabel | Aus Favicon ableitbar |

### 9.2 Animations-Empfehlungen

| Element | Animation | Trigger |
|---|---|---|
| Feature-Cards | `hover:shadow-md` (Lift-Effekt) | Hover |
| CTA-Buttons | `hover:shadow-xl` + leichter Scale | Hover |
| "Beleg gespeichert" | Gruener Checkmark-Pulse | Nach Speichern |
| Hero-Text | Fade-in von unten | Seitenload |
| Sustainability-Zahlen | Count-up Animation | Scroll-in-View |
| Feature-Cards | Stagger fade-in | Scroll-in-View |

### 9.3 Responsive Breakpoints

| Breakpoint | Tailwind | Layout-Aenderung |
|---|---|---|
| **Mobile** | Default | 1 Spalte, kompakte Abstaende, Hamburger-Menue |
| **Tablet** | `sm:` (640px) | 2 Spalten Features, groessere Abstaende |
| **Desktop** | `lg:` (1024px) | 3 Spalten Features, volle Navigation, maximale Abstaende |

---

## 10. Dark Mode

### 10.1 Implementierung

- Gesteuert per CSS-Klasse `.dark` auf `<html>` (kein Media-Query)
- Toggle-Button im Header (`ThemeToggle.tsx`)
- Preference wird im `localStorage` gespeichert

### 10.2 Dark-Mode-Farbmapping

| Element | Light | Dark |
|---|---|---|
| Seitenhintergrund | `#FAF9F6` | `#0A0A0A` |
| Text primaer | `zinc-900` | `zinc-50` |
| Text sekundaer | `zinc-600` | `zinc-400` |
| Card-Hintergrund | `white` | `zinc-900` |
| Card-Border | `zinc-200` | `zinc-800` |
| Header | `white/80 + blur` | `zinc-950/80 + blur` |
| Hero-Gradient | `teal-700 → emerald-800 → green-900` | `emerald-950 → zinc-950 → zinc-950` |
| Primaer-Akzent | `teal-600` | `teal-400` |
| Buttons | `bg-teal-600` | `bg-teal-500` |

---

## 11. Internationalisierung

### 11.1 Unterstuetzte Sprachen

| Sprache | Code | Datei | Status |
|---|---|---|---|
| Deutsch | `de` | `messages/de.json` | Vollstaendig |
| Englisch | `en` | `messages/en.json` | Vollstaendig |

### 11.2 Translation-Architektur

- Bibliothek: `next-intl` (App Router Integration)
- Routing: `src/i18n/routing.ts` konfiguriert die Locales
- Alle UI-Texte via `useTranslations()` Hook
- Sprach-Switcher im Header (`LanguageSwitcher.tsx`)

### 11.3 Wichtige Uebersetzungsschluessel fuer die Landingpage

```
common.appName          → "BelegNest"
common.tagline          → "Dein sicherer Platz fuer jeden Beleg"
common.claim            → "Foto. Ablegen. Wiederfinden."
home.hero.title         → Hero-Titel
home.hero.subtitle      → Hero-Untertitel
home.hero.cta           → Primaerer CTA
home.hero.secondaryCta  → Sekundaerer CTA
home.features.title     → Features-Ueberschrift
home.features.*.title   → Feature-Titel (capture, search, warranty, export, privacy, backup)
home.features.*.description → Feature-Beschreibung
home.sustainability.*   → Nachhaltigkeits-Sektion
```

---

## 12. Rechtliche Anforderungen

### 12.1 Pflicht-Seiten (implementiert)

| Seite | Route | Quelldatei |
|---|---|---|
| Impressum | `/legal/imprint` | `legal-docs/impressum.md` + `imprint.md` |
| Datenschutzerklaerung | `/legal/privacy` | `legal-docs/datenschutzerklaerung.md` + `privacy-policy.md` |
| AGB | `/legal/terms` | `legal-docs/agb.md` + `terms-and-conditions.md` |

### 12.2 Footer-Pflichtangaben

```
WAMOCON GmbH
Mergenthalerallee 79-81, 65760 Eschborn
HRB 123666 | USt-IdNr.: DE344930486
Geschaeftsfuehrer: Dipl.-Ing. Waleri Moretz
```

### 12.3 Kontakt

- E-Mail: belegnest@wamocon.com

---

## 13. Marketing-Kanaele und Saisonalitaet

### 13.1 Kanaele

| Kanal | Strategie | Prioritaet |
|---|---|---|
| **SEO / Content** | Ratgeber-Artikel zu Kassenzettel, Garantie, Steuern | Hoch |
| **Steuerberater-Empfehlung** | Flyer, Affiliate, DATEV-Export als Mehrwert | Mittel |
| **Social (LinkedIn, Reddit r/Finanzen)** | Nachhaltigkeit + Privacy als Hook | Mittel |
| **Product Hunt** | Launch mit EN-Version | Einmalig |
| **Google Ads** | Brand-Kampagne auf "Belege digitalisieren" | Niedrig (erst bei Traction) |

### 13.2 Saisonale Kampagnen

| Zeitraum | Kampagne | Message |
|---|---|---|
| **Januar bis Maerz** | Steuererklaerungszeit | "Deine Belege aus 2025, noch da? Jetzt digital sichern." |
| **Black Friday / Weihnachten** | Geschenke-Saison | "Geschenke-Belege sofort sichern. Umtausch ohne Stress." |
| **Herbst** (Elektronik-Peaks) | Garantie-Fokus | "Neues iPhone? Beleg in BelegNest = 2 Jahre Garantie gesichert." |

### 13.3 KPIs (6-Monats-Plan)

| KPI | Monat 1 | Monat 3 | Monat 6 |
|---|---|---|---|
| Installationen/Registrierungen | 100 | 1.500 | 8.000 |
| Erfasste Belege/Monat | 500 | 15.000 | 80.000 |
| Unique Visitors/Monat | 800 | 8.000 | 35.000 |
| Pro-Conversions | - | - | 200 |
| SEO Top-10 Rankings | 2 | 10 | 25 |

---

## 14. Wettbewerbs-Differenzierung

### 14.1 Unique Selling Points (USPs)

| Nr. | USP | Argumentation |
|---|---|---|
| 1 | **100% Privat** | Daten bleiben lokal oder E2E-verschluesselt. Kein US-Cloud-Upload. DSGVO-nativ. |
| 2 | **Nachhaltig** | Jeder digitale Beleg spart Thermopapier, Chemie und CO2. Umweltbotschaft als Markenkern. |
| 3 | **Garantie-Tracker** | Einzige Beleg-App mit Ampel-System fuer Garantie-Ablauf. Kein Wettbewerber bietet das. |
| 4 | **DACH-fokussiert** | Deutsche Sprache, deutsches Recht (§147 AO, GoBD), DE-Hosting, EU-Datenschutz. |
| 5 | **Kostenlos nutzbar** | Free-Tier ist vollstaendig, nicht kuenstlich beschraenkt. Pro nur fuer Power-Features. |
| 6 | **30 Sekunden Workflow** | Foto machen, 3 Felder, fertig. Schneller als jede Buchhaltungs-App. |

### 14.2 Positionierung vs. Wettbewerb

```
                    Einfach
                      |
         BelegNest ●  |
                      |
  Privat ─────────────┼────────────── Cloud
                      |
                      |  ● Expensify
                      |  ● lexoffice
                    Komplex
```

---

## 15. Checkliste: Landingpage-Erstellung

- [ ] Hero-Sektion mit Gradient, Titel, Subtitle, 2 CTAs
- [ ] Feature-Grid (6 Karten mit Icons)
- [ ] Nachhaltigkeits-Sektion (3 Saeulen)
- [ ] CTA-Sektion mit Claim
- [ ] Header mit Logo, Navigation, Language Switch, Theme Toggle
- [ ] Footer mit Legal-Links und Firmenangaben
- [ ] Dark Mode vollstaendig getestet
- [ ] Mobile-Responsive (alle Breakpoints)
- [ ] DE + EN Uebersetzungen vollstaendig
- [ ] Meta-Tags und OG-Image
- [ ] Favicon korrekt eingebunden
- [ ] Structured Data (JSON-LD)
- [ ] Core Web Vitals: LCP < 2.5s, CLS < 0.1
- [ ] Impressum, Datenschutz, AGB verlinkt
- [ ] Cookie-Banner (falls Analytics aktiv)

---

*Erstellt: 30. Mai 2026 | Basis: BelegNest Anforderungsdokument V1.0 + aktuelle Codebase*
*Unternehmen: WAMOCON GmbH | Projekt: BelegNest*
