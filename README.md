# Km-staða

Skráning á kílómetrastöðu bifreiða hjá Slökkviliði Ísafjarðarbæjar.

Opna: https://slokkvisa.github.io/km-stada/

- **Skráning:** km-staða slegin inn fyrir hvern bíl. Síðasta staða birtist sem viðmið.
- **Vista og senda:** vistar í Sögu og opnar tölvupóst til rakelbjorns@isafjordur.is (cc slokkvilid@isafjordur.is).
- **Saga:** fyrri skráningar í þessu tæki. Hægt er að senda aftur eða sækja Excel-skrá.

## Breytingar
Efst í `<script>` í `index.html`:
- `NAMES` – nöfn í fellilista
- `GROUPS` / `TYPES` – bílar, stöðvar og tegundir
- `EMAIL` / `EMAIL_CC` – viðtakendur
- `DEFAULT_BASE` – upphafsstaða (28.10.2026)

## Forrit (PWA)
Síðan er uppsetjanleg sem forrit og virkar án nets.
- **Android / Chrome / Edge:** hnappurinn „📲 Setja upp“ efst, eða valmynd vafrans → „Setja upp forrit“.
- **iPhone / iPad:** opna í Safari → Deila → „Bæta á heimaskjá“.

Þegar `index.html` er breytt: hækka `VERSION` í `sw.js` (t.d. `kmstada-v2`) svo tækin sæki nýju útgáfuna.
