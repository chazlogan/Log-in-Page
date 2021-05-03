function submitFunction() {

    const user = document.form["myForm"]["username"].value;
    const pass = document.form["myForm"]["username"].value;

    if (user == null || user == "" || pass == null || pass == "") {
        alert("Please put something in both the username and the password")
    }
    else {
        if (user == 'atul') {
            if (pass == "12345") {
                alert("Login successfully");
            }
            else {
                alert("Invalid username or password ! ! !");
            }
        }
        else {
            alert("User doesn't exist");

        }
    }

}
