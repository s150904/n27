/**
 * Hier können Sie IF und ELSE trainieren. 
 * Am besten dazu den nodemon staren:
 *
 * .\node_modules\.bin\nodemon Training\if-else-training.js
 * 
 * und die Ausgabe im Terminal beobachten.
 */


// Die Zahl 1 wird zugewiesen an eine Varibale namens x
 let x = undefined
 let y = 100
 
 if("GW11B".includes("11") && "GW11B".startsWith("G")){
     console.log("Die Prüfung ist WAHR. ES werden die Anweisungen im Rumpf von if ausgeführt")
 }else{
    console.log("Die Prüfung ist FALSCH. ES werden die Anweisungen im Rumpf von if ausgeführt")
 }

 // 20.  if("GW11b".includes(11)) Die Prüfung ist wahr. Die Methode includes prüft, ob ein String einen anderen enthält.

 // 19. if("GW11b".endsWith("b")) Die Prüfung ist wahr. Die Methode endsWith prüft, ob ein String mit einem anderem String endet.

 // 18. if("GW11b".startsWith("GW")) Die Prüfung ist wahr. Die Methode startsWith prüft, ob ein String mit einem anderem String beginnt.

 // 17. if("max".length)    Die Prüfung ist wahr. Der Wert von ("max".length) ist 3.    

 // 16. if(undefined)     Die Prüfung ist falsch. Wenn ein Objekt nicht existiert ist es undefined.

 // 15. if(0  > x ||  x < 11) Logisches "oder". Die Prüfung ist wahr, wenn die Linke oder die Rechte oder Beide Prüfungen wahr sind.

 // 14. if(0 < x && x < 11) Logisches und. Die Prüfung ist wahr, wenn beide Prüfungen wahr sind.

 // 13. if("")       Die Prüfung ist falsch. 

 // 12. if("#*+")    Die Prüfung ist wahr. Alle Zeichenketten (Strings) sind wahr.

 // 11. if(123)      Die Prüfunng ist wahr. Alle Zahlen außer 0 sind wahr.

 // 10. if(0)        Die Prüfung ist falsch.

 // 9. if(false)     Die Prüfung ist falsch. Der Rumpf von if ist unereichbarer Code.

 // 8. if(true)     Die Prüfung ist wahr. Der Rumpf von else ist unereichbarer Code.
 
 // 7. if(1 === "!") Prüfung auf "Gleichheit des Wertes" und "Gleihheit des Typs". Die Prüfung ist falsch.
 
 // 6. if(0 != 1)   Prüfung auf "Ungleichheit". Die Prüfung ist wahr.
 
 // 5. if(0 <= 1)   Prüfung auf "kleiner geich". Die Prüfung ist wahr.
 
 // 4. if(0 >= 1)    Prüfung auf "größer gleich". Die Prüfung ist falsch.
 
 // 3. if(0 < 1)    Prüfung auf "kleiner als". Die Prüfung ist wahr.
 
 // 2. if(0 > 1)    Prüfung auf "größer als". Die Prüfung ist falsch.
 
 // 1. if(1 == 1)   Prüfung auf Gleihheit des Wertes. Die Prüfung ist wahr.