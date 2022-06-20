var db=firebase.firestore();
db.settings({ timestampsInSnapshots: true });


let submitButton = document.getElementById("signup2","signup3");

firebase.auth().onAuthStateChanged((user)=>{
    if(!user){
        location.replace("index.html")
    }else{
        document.getElementById("user").innerHTML = "Hello, "+user.email
        document.getElementById("user2").innerHTML = "Hello, "+user.email
        document.getElementById("user3").innerHTML = "Hello, "+user.email
        uid = user.uid;
        console.log(uid); 

    }
})

function logout(){
    firebase.auth().signOut()
}

document.getElementById("loginForm").addEventListener("submit",(event)=>{
    event.preventDefault()
})


// ######################################################################################################
// to create random UUID
function create_UUID() { 
    var dt = new Date().getTime(); 
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) { 
        var r = (dt + Math.random() * 16) % 16 | 0; 
        dt = Math.floor(dt / 16); 
        return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16); 
    }); 
    return uuid;
}
// ######################################################################################################

function signup2(){
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            uid = user.uid;
            const email = document.getElementById("email").value
            const salutation = document.getElementById("salutation").value
            const fname = document.getElementById("fname").value
            const mname = document.getElementById("mname").value
            const lname = document.getElementById("lname").value
            const suffix = document.getElementById("suffix").value
            const accountsitesearch = document.getElementById("accountsitesearch").value
            const Reportssitesearch = document.getElementById("Reportssitesearch").value
            const title = document.getElementById("title").value
            const department = document.getElementById("department").value
            const fax = document.getElementById("fax").value
            const phone = document.getElementById("phone").value
            const Mobile = document.getElementById("Mobile").value
            const Mailingsitesearch = document.getElementById("Mailingsitesearch").value
            const malingstreet = document.getElementById("malingstreet").value
            const malingcity = document.getElementById("malingcity").value
            const malingstate = document.getElementById("malingstate").value
            const malingzip = document.getElementById("malingzip").value
            const malingcountry = document.getElementById("malingcountry").value
            db.collection("Application").doc(user.uid).collection("ORG").doc(create_UUID()).set({
                uid: uid,
                email: email,
                salutation: salutation,
                fname: fname,
                mname: mname,
                lname: lname,
                suffix: suffix,
                accountsitesearch: accountsitesearch,
                Reportssitesearch: Reportssitesearch,
                title: title,
                department: department,
                fax: fax,
                phone: phone,
                Mobile: Mobile,
                Mailingsitesearch: Mailingsitesearch,
                malingstreet: malingstreet,
                malingcity: malingcity,
                malingstate: malingstate,
                malingzip: malingzip,
                malingcountry: malingcountry
            },{ merge: true })
            .then(() => {
                db.collection("Master-Account").doc(create_UUID()).set({
                    uid: uid,
                    accountsitesearch: accountsitesearch                      
                },{ merge: true })
            }) 
            .then(() => {alert("Submitted Successfully"); })
            .then(() => {
                console.log('User added!!!!');
              })
          
        
          .catch((error) => {
              document.getElementById("error").innerHTML = error.message
              console.log(error)
          })
                  
          // ...
        } else {
          // User is signed out
          // ...
        }
      });
}

function signup3(){
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            uid = user.uid;
            // New Account
            const accountsitesearch1 = document.getElementById("accountsitesearch1").value
            const type1 = document.getElementById("type1").value
            const Parentsitesearch = document.getElementById("Parentsitesearch").value
            const website = document.getElementById("website").value
            const phone1 = document.getElementById("phone1").value
            const description = document.getElementById("description").value
            const industry = document.getElementById("industry").value
            const Billingsitesearch = document.getElementById("Billingsitesearch").value
            const Billingstreet = document.getElementById("Billingstreet").value
            const Billingcity = document.getElementById("Billingcity").value
            const BillingState = document.getElementById("BillingState").value
            const BillingZip = document.getElementById("BillingZip").value
            const BillingCountry = document.getElementById("BillingCountry").value
            const Shippingsitesearch = document.getElementById("Shippingsitesearch").value
            const Shippingstreet = document.getElementById("Shippingstreet").value
            const Shippingcity = document.getElementById("Shippingcity").value
            const ShippingState = document.getElementById("ShippingState").value
            const ShippingZip = document.getElementById("ShippingZip").value
            const ShippingCountry = document.getElementById("ShippingCountry").value
            db.collection("Application").doc(user.uid).collection("Account").doc(create_UUID()).set({
                // New Account
                uid: uid,
                accountsitesearch1: accountsitesearch1,
                type1: type1,
                Parentsitesearch: Parentsitesearch,
                website: website,
                phone1: phone1,
                description: description,
                industry: industry,
                Billingsitesearch: Billingsitesearch,
                Billingstreet: Billingstreet,
                Billingcity: Billingcity,
                BillingState: BillingState,
                BillingZip: BillingZip,
                BillingCountry: BillingCountry,
                Shippingsitesearch: Shippingsitesearch,
                Shippingstreet: Shippingstreet,
                Shippingcity: Shippingcity,
                ShippingState: ShippingState,
                ShippingZip: ShippingZip,
                ShippingCountry: ShippingCountry
        
            },{ merge: true })
            .then(() => {alert("Submitted Successfully"); })
            .then(() => {
                console.log('User added!!!!');
              })
          
        
          .catch((error) => {
              document.getElementById("error").innerHTML = error.message
              console.log(error);
          })
                  
          // ...
        } else {
          // ...
        }
      });
}

function accountname(accountsitesearch, uid){
    var option = document.createElement("option");
    option.value = accountsitesearch;
    option.setAttribute(uid);
    option.innerHTML = accountsitesearch;
    if(document.getElementById("addGuestsInput")){
        document.getElementById("addGuestsInput").appendChild(option);
    }
}