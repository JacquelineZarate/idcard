function generateID()
{
    let userFirstName = document.getElementById("firstName").value;

    let userLastName = document.getElementById("lastName").value;

    let userAge = document.getElementById("age").value;

    let userNumber = document.getElementById("phoneNumber").value;

    let userAddress = document.getElementById("address").value;

    let fullName = userFirstName + " " + userLastName;
    let card = [userAge, userNumber, userAddress];

    document.getElementById("idCard").innerHTML =
    fullName + "<br><br>" +
    "Age: " + card[0] + "<br>" +
    "Phone Number: " + card[1] + "<br>" +
    card[2] + "<br>";
}
