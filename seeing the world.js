const places = ["America", "England", "New Zealand", "Germany", "Australia"];

places.forEach(place => console.log(place));

const orderedPlaces = [...places].sort();
orderedPlaces.forEach(place => console.log(place));

console.log(places);

orderedPlaces.reverse();
orderedPlaces.forEach(place => console.log(place));

console.log(places);

places.reverse();
console.log(places);

places.reverse();
console.log(places);

places.sort();
console.log(places);

places.reverse();
console.log(places)
