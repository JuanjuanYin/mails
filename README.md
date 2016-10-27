## Überblick
* Das Script basiert auf den aktuellen Versionen von [Bootstrap](http://getbootstrap.com/) (v3.3.7) und [jQuery](https://jquery.com/) (v1.12.4).
* Die E-Mails werden von `http://www.mocky.io/v2/580df778120000f60c078747` per JSONP Request geladen, um die Cross-Domain Problematik zu umgehen.
* Um das Script auszuführen, genügt es die Dateien lokal zu speichern und `index.html` zu öffnen.

## Beschreibung der Dateien

`index.html`
* Durch Aufrufen dieser Datei werden die E-Mails formatiert dargestellt. Es sind keine weiteren Einstellungen vorzunehmen.

### CSS Dateien
`css.css`
* Diese Datei beinhaltet die Formatierungen der E-Mails.
* Die Stile der Bootstrap Panels werden teilweise überschrieben, um Platz zu sparen.

`bootstrap.min.css`
* Bootstrap

### JS Dateien
`script.js`
* Herzstück des Scripts.
* Die E-Mails werden aufgerufen und anhand der Vorgaben formatiert.
* Ungelesene E-Mails werden fettgedruckt angezeigt, wobei mit einem Klick auf eine E-Mail diese nicht mehr fettgedruckt dargestellt wird.

`bootstrap.min.js`
* Bootstrap

`jquery.min.js`
* jQuery



