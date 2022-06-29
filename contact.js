var db=firebase.firestore();
db.settings({ timestampsInSnapshots: true });
// var contactno=0;
// var tbody = document.getElementById('tbody1');

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
        db.collection("Application").doc(user.uid).collection("Account").get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                console.log( "Account Name => ", doc.data().accountsitesearch1);
                accountname(doc.data().accountsitesearch1);
                parentaccountname(doc.data().accountsitesearch1);
             //GetAllDataOnce();
            });
        });
    }
})

function accountname(accountsitesearch1){
    var option = document.createElement("option");
    option.value = accountsitesearch1;
    option.innerHTML = accountsitesearch1;
    if(document.getElementById("accountsitesearch")){
        document.getElementById("accountsitesearch").appendChild(option);
    }
}

function parentaccountname(accountsitesearch1){
    var option = document.createElement("option");
    option.value = accountsitesearch1;
    option.innerHTML = accountsitesearch1;
    if(document.getElementById("Parentsitesearch")){
        document.getElementById("Parentsitesearch").appendChild(option);
    }
}

// function GetAllDataOnce(){
//     db.collection("Application").doc(user.uid).collection("Account").get()
//     .then((querySnapshot)=>{
//         var contact = [] ;
//         querySnapshot.forEach(doc => {
//             contact.puch(doc.data());
//         });
//         AddAllItrmsToTheTable(contact);
//         // console.log(querySnapshot); 
//         // console.log(contact); 
//     })
// }
// function GetAllDataRealtime(){
//     db.collection("Application").doc(user.uid).collection("Account").onSnapshot((querySnapshot)=>{
//         var contact = [] ;
//         querySnapshot.forEach(doc => {
//             contact.puch(doc.data());
//         });
//         AddAllItrmsToTheTable(contact);
//         // console.log(querySnapshot); 
//         // console.log(contact); 
//     })
// }

// function AddItemToTable(accountsitesearch, phone, email, user2){
//     // var contactno=0;
//     // var tbody = document.getElementById('tbody1');

//     var trow = document.createElement('tr');
//     var td1 = document.createElement('td');
//     var td2 = document.createElement('td');
//     var td3 = document.createElement('td');
//     var td4 = document.createElement('td');
//     var td5 = document.createElement('td');

//     td1.innerHTML = ++contactno;
//     td2.innerHTML = accountsitesearch;
//     td3.innerHTML = phone;
//     td4.innerHTML = email;
//     td5.innerHTML = user2;

//     trow.appendChild(td1);
//     trow.appendChild(td2);
//     trow.appendChild(td3);
//     trow.appendChild(td4);
//     trow.appendChild(td5);

//     tbody.appendChild(trow);

// }

// function AddAllItrmsToTheTable(contactlist){
//     // contactno=0;
//     // var tbody = document.getElementById('tbody1');
//     tbody.innerHTML="";
//     contactlist.forEach(element => {
//         AddItemToTable(element.accountsitesearch ,element.phone, element.email, element.user2, );
//     })
// }
// window.onload = GetAllDataRealtime;

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
            db.collection("Application").doc(user.uid).collection("Account").doc(create_UUID()).set({                // New Account
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

