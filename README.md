## Überblick
* Das Script basiert auf den aktuellen Versionen von [Bootstrap](http://getbootstrap.com/) (v3.3.7) und [jQuery](https://jquery.com/) (v1.12.4).
* Die E-Mails werden von `http://www.mocky.io/v2/580df778120000f60c078747` per JSONP Request geladen, um die Cross-Domain Problematik zu umgehen.
* Um das Script auszuführen, genügt es die Dateien lokal zu speichern und `index.html` zu öffnen.

## Beschreibung der Dateien
**index.html**
* Durch Aufrufen der Datei werden die E-Mails formatiert dargestellt. Es sind keine weiteren Einstellungen vorzunehmen.
  
**script.js**
* Herzstück des Scripts.
* Die E-Mails werden aufgerufen und anhand der Vorgaben formatiert werden.
* Ungelesene E-Mails werden fettgedruckt dargestellt, wobei mit einem Klick auf die E-Mail die Formatierung verschwindet.

**css.css**
* Beinhaltet Formatierungen der E-Mails.
* Die Stile der Bootstrap Panels werden teilweise überschrieben, um Platz zu sparen.
