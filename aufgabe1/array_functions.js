const fs = require('fs');
const rawdata = fs.readFileSync('driving_school.json');
const data = JSON.parse(rawdata);

// GENERELLE HINWEISE
// Du kannst zusätzliche Variablen verwenden, wenn es für die Bearbeitung nötig oder leichter ist.
// Jede Aufgabe hat einen Scope (also eigene { }), daher sind die Variablen nur dort gültig.

// *************************************************************************************************
// AUFGABE 1
// Welche Kurse werden angeboten? Gib course_name, course_code und die Anzahl der Blöcke an.
// *************************************************************************************************
{
    const result = null; // Replace null with your implementation.
    console.log("AUFGABE 1");
    console.table(result);
}

// *************************************************************************************************
// AUFGABE 2
// Gib course_name und course_code des Kurses mit dem Code CA101 aus.
// Hinweis: Verwende find(). Es liefert kein Array, sondern den ersten Eintrag, der dem predicate entspricht.
//          Erstelle danach ein neues JSON Object in result mit den 2 Properties.
// *************************************************************************************************
{
    const result = null; // Replace null with your implementation.
    console.log("AUFGABE 2");
    console.log(result)
}

// *************************************************************************************************
// AUFGABE 3
// Gib den billigsten und teuersten Block des Kurses BC101 aus.
// Hinweis: Suche zuerst den Kurs und schreibe ihn in eine Variable.
//          Basierend auf diesem Kurs erstelle ein JSON Object mit den 3 Properties.
//          Verwende Math.min() und Math.max() mit dem Spread Operator (...)
// *************************************************************************************************
{
    const result = null; // Replace null with your implementation.
    console.log("AUFGABE 3");
    console.log(result);
}

// *************************************************************************************************
// AUFGABE 4
// Gib den ersten und den letzten Tag aus, an dem der Block mit der ID 1 des Kurses CB101 statt findet.
// Hinweis: Suche zuerst den Kurs mit find(). Dann suche den Block des Kurses mit find().
//          Der Wert von date ist ein String. Strings können mit Math.min() nicht verglichen werden.
//          Daher brauchst du ein reduce. Verwende als Startwert 2000-01-01 bzw. 2999-12-31
//          und "hebe" dir den kleineren bzw. größeren Wert auf.
// *************************************************************************************************
{
    const result = null; // Replace null with your implementation.
    console.log("AUFGABE 4");
    console.log(result);
}

// *************************************************************************************************
// AUFGABE 5
// Wie viele Kunden gibt es in den Blöcken des Kurses BC101?
// *************************************************************************************************
{
    const result = null; // Replace null with your implementation.
    console.log("AUFGABE 5");
    console.table(result);
}

// *************************************************************************************************
// AUFGABE 6
// Wie viele Kunden haben die einzelnen Kurse und welchen Umsatz generieren sie?
// Hinweis: Um die Anzahl der Kunden zu berechnen, musst du mit reduce über die Blöcke iterieren
//          und die länge des customers Arrays aufaddieren.
//          Beim Umsatz musst du im reduce die Länge mal den Preis berechen und addieren.
// *************************************************************************************************
{
    const result = null; // Replace null with your implementation.
    console.log("AUFGABE 6");
    console.table(result);
}

// *************************************************************************************************
// AUFGABE 7
// Welche Fahrlehrer (instructor) sind in der Fahrschule beschäftigt? 
// Jeder darf nur 1x aufgelistet werden.
// Hinweis: Um ein Array aller Fahrlehrer zu bekommen, brauchst du ein map im map (course -> block -> instructor).
//          Mit flat() kannst du das verschachtelte Array "flach" machen. Speichere dies in eine Variable.
//          Dann hole alle Ids der Instruktoren in ein Set und mache daraus ein Array, das geht
//          mit Array.from(new Set(...)).
//          Dann projiziere das Array mit den Ids so, dass du jede Ids im Instruktor Array suchst.
// *************************************************************************************************
{
    const result = null; // Replace null with your implementation.
    console.log("AUFGABE 7");
    console.table(result);
}
