var firebaseConfig = {
    apiKey: "AIzaSyAdWq4-ZE4Yv87w_AEyy5b5JwkW9A8iL3U",
    authDomain: "contact-form-38b0b.firebaseapp.com",
    databaseURL: "https://contact-form-38b0b-default-rtdb.firebaseio.com",
    projectId: "contact-form-38b0b",
    storageBucket: "contact-form-38b0b.appspot.com",
    messagingSenderId: "748179068137",
    appId: "1:748179068137:web:2a3ad3ed4d8a07ac990c78",
    measurementId: "G-HC8E0ED0TD"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
var Sname, mail, msg;
var Name, Mail, Message;

function getInputVal(id) {
    return document.getElementById(id).value;
}

function ready() {
    Sname = getInputVal("name");
    mail = getInputVal("mail");
    msg = getInputVal("msg");


}

document.getElementById('send').onclick = function() {
    try {
        ready();
        if (Sname != "" && Sname != "undefined") {
            firebase.database().ref('Contact/' + Sname).update({
                Name: Sname,
                Mail: mail,
                Message: msg,
            })
            document.getElementById('contact__form').reset();
            // alert("Ticket has been raise");
            sendemail(Sname, mail, msg);
        } else {
            alert("Enter the Name");
            document.getElementById('contact__form').reset();
        }
    } catch (e) {
        alert("Some Error occur");
        console.log(e.message);
    }
}

function sendemail(Name, Mail, Message) {
    Email.send({
        Host: "smtp.gmail.com",
        Username: "devnshu.shekhar2@gmail.com",
        Password: "keqtppkfxgxekfpr",
        To: 'devanshu.shekhar2.@gmail.com',
        From: "devnshu.shekhar2@gmail.com",
        Subject: "Trying to contact to YOU!!!!",
        Body: `Name:- ${Name} <br/> Mail:- ${Mail} <br/> Message:- ${Message}`,
    }).then(
        message => alert("Mail Sent to Devanshu")
    );
}
