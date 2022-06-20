var db=firebase.firestore();
db.settings({ timestampsInSnapshots: true });
//Variable to access database collection
//const db = firestore.collection("Application");

//Get Submit Form
let submitButton = document.getElementById("signUp");

document.getElementById("loginForm").addEventListener("submit",(event)=>{
    event.preventDefault()
})

function signUp(){
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value   
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((cred) => {
        console.log(cred);
        db.collection('Application').doc(cred.user.uid).set({
            
            email: email,
            password: password
        },{ merge: true })
        .then(() => {
          console.log('User added!!!!');
          location.replace("contact.html");
        });
    })

    .catch((error) => {
        document.getElementById("error").innerHTML = error.message
        console.log(error);
    })
            clearForm()
    }

function login(){
        const email = document.getElementById("email").value
        const password = document.getElementById("password").value
        firebase.auth().signInWithEmailAndPassword(email, password)
        location.replace("contact.html")
        .catch((error)=>{
            document.getElementById("error").innerHTML = error.message
        })
}
    
function clearForm() {
        document.getElementById("clearFrom").reset();
}

function forgotPass(){
    const email = document.getElementById("email").value
    firebase.auth().sendPasswordResetEmail(email)
    .then(() => {
        alert("Reset link sent to your email id")
    })
    .catch((error) => {
        document.getElementById("error").innerHTML = error.message
    });
}

