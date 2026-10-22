# React + Vite
frågor och svar. 
1) State-hantering: Hur håller din app reda på vilka uppgifter som finns och om de är klara? Vad händer med gränssnittet när datan uppdateras?

Svar:-När jag använder useState hjälper det appen att komma ihåg mina uppgifter i minnet. När datan ändras, till exempel när jag lägger till en ny uppgift, uppdateras webbläsaren automatiskt så att ändringen syns på skärmen utan att jag behöver göra något i terminalen.

2) Oföränderlighet (Immutability): Varför får man inte ändra en befintlig array direkt med t.ex. .push() i React? Hur gör du istället när du lägger till eller tar bort en uppgift?

Svar:-I koden använder jag [...todos, newTodo] för att lägga till en ny uppgift i en helt ny array istället för att ändra den gamla direkt. När jag vill ta bort en uppgift använder jag .filter(). Det gör att React automatiskt känner av ändringen och uppdaterar listan.

https://teams.microsoft.com/meet/318879884678688?p=6gNAJ7PKh56miK7pPO
