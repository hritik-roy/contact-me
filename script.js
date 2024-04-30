const form = document.querySelector('form');
const fullName = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const subject = document.getElementById("subject");
const mess = document.getElementById("message");

function sendEmail() {
    const bodyMessage ='Full Name: ${FullName.value}<br> Email: ${email.value}<br> Phone Number: ${phone.value}<br> Message: ${mess.value}';
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "hroy6984@gmail.com",
        Password : "9DB77A6388C91EF85A3A3F1D81AEF2372F03",
        To : 'hroy6984@gmail.com',
        From : document.getElementById("email"),
        Subject : subject.value,
        Body : bodyMessage
    }).then(
      message => alert(message)
    );
}

form.addEventListener("submit", (e) => { 
    e.preventDefault();

    sendEmail();
});