# Money Friction Scan — Revolut Referral Microsite

A conversion-first multilingual microsite for an independent Revolut referral campaign.

## Languages / market logic

- **English / UK** — holiday FX and overseas-spend friction.
- **German / Germany** — fee transparency + local DE-IBAN relevance.
- **French / France** — overseas fee friction + FR-IBAN familiarity.
- **Spanish / Spain** — travel/cash friction + local ES-IBAN relevance.

This is deliberately **not** one text translated four times. Each locale has its own headline, dominant pain point, evidence cards, local trust cue, result framing, fit recommendation and share copy.

## Funnel

1. **Fee fingerprint** — user enters their own monthly FX spend, bank FX markup, ATM fees and transfer fees.
2. **Annual friction scan** — annualises only the user's own inputs and produces a friction score.
3. **Fit decision** — gives a high/medium/low fit explanation, then exposes the referral CTA.

## Calculator safety / methodology

The calculator does **not** promise savings.

`annual friction = (monthly foreign spend × current-bank FX markup × 12) + (monthly ATM fees × 12) + (monthly transfer fees × 12)`

The “potentially addressable” figure is intentionally conservative and currently includes only the user's FX markup on monthly volume within the local Standard fair-usage threshold. It does **not** automatically count ATM-owner fees or transfer fees as savings.

## Verified evidence snapshot (August 2026)

The copy is grounded in current Revolut pages checked in August 2026, including 70M+ global customers, 13M UK, 6M Spain, 5M France, Standard-plan pricing, ATM allowance and local IBAN relevance.

Always re-check official pricing and referral terms before paid promotion or a long-running campaign.

## Local use

No build step required.

```bash
python -m http.server 8080
```

Language can be forced with `?lang=en`, `?lang=de`, `?lang=fr`, or `?lang=es`. Otherwise the page uses the browser language.

## Deployment

Works as-is on GitHub Pages, Netlify, Vercel, Cloudflare Pages, or any static host.

## Compliance notes

- Independent referral microsite; not an official Revolut property.
- No fabricated countdown or fake scarcity.
- No guaranteed-savings claim.
- Referral disclosure is visible beside the CTA.
- Current official terms always override the microsite.
