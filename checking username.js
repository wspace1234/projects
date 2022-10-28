const current_users = ["sofia", "raza", "imran", "hammad", "wahab"];
const new_users = ["ahmed", "Usman", "yasir", "anus", "asif"];

for (const name of new_users) {
    const regExp = new RegExp(name, 'i');
    const isDuplicate = current_users.find(curr_user => regExp.test(curr_user));
    if(isDuplicate){
        console.log(name + " will need to enter a new username.")
    }else {
        console.log("The username " + name + " is available.")
    }
}