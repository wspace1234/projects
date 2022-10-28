const peopleInvited = ["raza", "wahab", "hamamd"];

peopleInvited.forEach(people => {
    console.log(people);
});

console.log(peopleInvited[1] + " can't make it.");


peopleInvited[1] = "sofia";

peopleInvited.forEach(people => {
    console.log(people);
});