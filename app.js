window.onload = function() {
    document.getElementById("entryname").value = "";
    document.getElementById("entryemail").value = "";
    document.getElementById("entrypassword").value = "";
    document.getElementById("entrycpassword").value = "";
    document.getElementById("entryage").value = "";
}


function newperson(name, email, password, age) {
    this.name = name;
    this.email = email;
    this.password = password;
    this.age = age;
}
var erto = new newperson("ertugrul", "sarihan", "ertugrulsarihan@outlook.com");

console.log(erto);

function correct() {
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var namebox = document.getElementById("entryname").value;
    var emailbox = document.getElementById("entryemail").value;
    var passwordbox = document.getElementById("entrypassword").value;
    var passwordConbox = document.getElementById("entrycpassword").value;
    var agebox = document.getElementById("entryage").value;

    if (namebox == "") {
        document.getElementById("error").innerHTML = "Name empty";
    } else {


        if (emailbox == "") {
            document.getElementById("error").innerHTML = "Email empty";
        } else if (!regexEmail.test(emailbox)) {

            document.getElementById("error").innerHTML = "İnvalid email address!";
        } else {
            if (passwordbox == "") {
                document.getElementById("error").innerHTML = "Empty password!"
            } else if (passwordbox !== passwordConbox) {
                document.getElementById("error").innerHTML = "Password didnt match!"
            } else {
                if (agebox == null) {
                    document.getElementById("error").innerHTML = "Password didnt match! or Empty!"
                } else if (agebox <= 12) {
                    document.getElementById("error").innerHTML = "Agebox cannot be less than 12 and empty!"
                } else {
                    document.getElementById("error").innerHTML = "";
                    document.getElementById("correct").innerHTML = "Registered"
                    var person = new newperson(namebox, emailbox, passwordbox, agebox);
                    console.log(person);
                }

            }

        }

    }

}