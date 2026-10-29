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
