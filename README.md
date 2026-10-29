# React + Vite
frågor och svar. 
1) State-hantering: Hur håller din app reda på vilka uppgifter som finns och om de är klara? Vad händer med gränssnittet när datan uppdateras?

Svar:-När jag använder useState hjälper det appen att komma ihåg mina uppgifter i minnet. När datan ändras, till exempel när jag lägger till en ny uppgift, uppdateras webbläsaren automatiskt så att ändringen syns på skärmen utan att jag behöver göra något i terminalen.

2) Oföränderlighet (Immutability): Varför får man inte ändra en befintlig array direkt med t.ex. .push() i React? Hur gör du istället när du lägger till eller tar bort en uppgift?

Svar:-I koden använder jag [...todos, newTodo] för att lägga till en ny uppgift i en helt ny array istället för att ändra den gamla direkt. När jag vill ta bort en uppgift använder jag .filter(). Det gör att React automatiskt känner av ändringen och uppdaterar listan.

3) Kodgranskning. Den här funktionen är fel i React. Förklara varför, och visa hur du skulle skriva om den:

function addTodo(todos, text) {
  todos.push(text);
  return todos;
}
Svar:-Ja koden är fel eftersom Push updatterar koden på ett osäkert sätt och ändringen blir svårt för systemet att läsa av. Den korrekta koden ser ut så här.

function addTodo(todos, text) {
    return [...todos, text];
}

Denna är den korrekta koden eftersom på den andra raden förklarar att alla todos listorna är med.


4) Problemlösning och reflektion, 3–5 meningar. Beskriv ett tillfälle då du körde fast, och hur du tog dig vidare. Om du använde AI, Google eller React-dokumentationen: ge ett konkret exempel på vad du frågade och vad du själv ändrade efteråt.

Svar:-När det gäller Problemlösning och reflektion jag körde fast med hur addTodo-funktionen skulle hanteras i React använde jag AI som en lärarassistent för att förstå vad som var fel. Jag försökte först lösa problemet själv och frågade sedan AI om varför min idé inte fungerade samt varför .push() var fel väg att gå. AI förklarade konceptet immutabilitet och varför spread-operatorn (...) behövs. Efter att ha fått den förklaringen ändrade jag själv koden så att den returnerade en ny array [...todos, text] istället för att mutera den gamla.



https://teams.microsoft.com/l/meetingrecap?driveId=b%21THKa8plQVk2KDm0hcgO8KPGpBkaZAkhKtUQOWfjA_1aPC7_BW2_NQ6Dhz7byz7OD&driveItemId=01I5BSBJW4W4AHTREYIJE2YBE3UBAG6P3Z&sitePath=https%3A%2F%2Ffunet-my.sharepoint.com%2F%3Av%3A%2Fg%2Fpersonal%2F3ggyhmu26_abdume_folkuniversitetet_nu%2FIQDctwB5xJhCSawEm6BAbz95AS4XNhu026FnDUdP1eKnpps&fileUrl=https%3A%2F%2Ffunet-my.sharepoint.com%2Fpersonal%2F3ggyhmu26_abdume_folkuniversitetet_nu%2FDocuments%2FInspelningar%2FM%C3%B6te+med+Meriem+Mehamednur+Abdu+MU26-20261023_023136-M%C3%B6tesinspelning.mp4%3Fweb%3D1&threadId=19%3Ameeting_ODQ4M2IxNjctNTgyZi00ZWU0LWJkOGItNjczYTA5NWNjOWZj%40thread.v2&organizerId=11df300a-104d-43a9-b544-4cdfa4b7356b&tenantId=a4d3b9bf-2082-4eee-ab79-fd407faef1e5&callId=870c473f-ed0e-48e1-8e83-84583223a938&threadType=Meeting&meetingType=MeetNow&subType=RecapSharingLink_RecapCore&recapType=Recording

