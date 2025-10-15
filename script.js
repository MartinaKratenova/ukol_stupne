let fahrenheit = Number(prompt("Zadej stupně Fahreiheita:"));

let celsius = (fahrenheit - 32) * 5 / 9;


document.body.innerHTML += "<br>" + fahrenheit + "°F je " + celsius.toFixed(2) + "°C.";


// Zadání
// Pokud pečete podle anglických receptů, často se po váš požaduje rozehřát troubu na uvedenou teplotu. Pokud si ovšem neuvědomíte, že Američané používají pro měření teploty stupně Fahrenheita namísto Celsia, bude vás na konci pečení čekat nemilé překvapení.

// Nastudujte si na České Wikipedii jak se převádějí stupně Fahrenheita na stupně Celsia a vytvořte webovou stránku, která takový převod provede. Vaše stránka se zeptá uživatele teplotu ve stupních Fahrenheita a pomocí document.body.innerHTML vypíše její ekvivalent ve stupních Celsia.

 

// Forma odevzdani:
// - link na repozitar na GitHubu
// - zkopirovat obsah `index.js` souboru
