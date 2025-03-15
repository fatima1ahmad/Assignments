function validateDescription(description){
    if(description>280){
        return "description is too long"
    }
    return "description is validate"
}

console.log(
    validateDescription("bshvbhvsfjsfcjgcsjbkjbs")
)

function checkUsername(username) {
    return username.charAt(0).toUpperCase() + username.slice(1);
}
console.log(checkUsername("fatima"));

function cleanEmail(email) {
    return email.trim().toLowerCase();
}
console.log(cleanEmail(" fatimaAhmad@Gmail   "));

let str1 = 'hello today giejkbdmv hkfsjdlfvhbkdjnc';
console.log(str1.slice(0, 20));

function maskPhone(str7) {
    return "*".repeat(str7.length - 4) + str7.substring(str7.length - 4);
}
console.log(maskPhone('0778453487683'));

function checkBadWords(str11) {
    if (str11.includes("badWords")) {
        return str11.replaceAll("badWords", "***");
    }
    return "Approved word";
}
console.log(checkBadWords("bdbgdb badWords blvbl badWords "));

let str10 = "javascript world world";
console.log(str10.split(" "));

console.log(str10.includes("script"));

let fileName = "test.jpg";
if (fileName.endsWith(".jpg")) {
    console.log("This is an image file.");
}

let st11 = "javascript world world";
console.log(st11.indexOf("pt"));
console.log(st11.lastIndexOf("world"));

console.log("fatima".repeat(3));
let p1="javascript";
let p2="hello world";
console.log(p1.concat(p2));

