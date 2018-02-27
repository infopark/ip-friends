# Infopark & Friends Workshop-App 

Basic Scrivito JS Applikation for the Infopark & Friends Workshop: Website-Entwicklung mit Scrivito, JavaScript und ReactJS

## Tennant Setup

- Anmelden bei [scrivito.com]
- neues Trial CMS Anlegen
- App auschecken
- API-Key holen / .env gemäß Hinweisen erstellen
- `cd ip-friends`
- `npm install`
- `npm start`
- Im Borwser zu to `/scrivito` gehen
- neue Working Copy anlegen
- In edit Modus wechseln
- Browser Console öffnen
- Frage auf "scrivito-application" wechseln
- In der Konsole folgende Kommandos ausführen
  ```javascript
  Scrivito.load(() => [...Scrivito.Obj.all()])
    .then((objs) => {
      objs.forEach(obj => {
        console.log("Obj: " + obj.id());
        obj.destroy();
      });
      Scrivito.getClass('Homepage').create({
        _path: "/"
      });
      console.log("Done");
    });
  ```
