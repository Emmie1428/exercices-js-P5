// votre code ici
function checkAge(int) {
    if (int < 18) {
        return "Vous êtes mineur.";
    } else if (int >= 65) {
        return "Vous êtes senior.";
    } else {
        return "Vous êtes majeur.";
    }
}
export default checkAge;

console.log(checkAge(15));
console.log(checkAge(30));
console.log(checkAge(75));
