var db=firebase.firestore();
db.settings({ timestampsInSnapshots: true });
var contactno=0;
var tbody = document.getElementById('tbody2');

firebase.auth().onAuthStateChanged((user)=>{
    if(!user){
        location.replace("index.html")
    }else{
        document.getElementById("user7").innerHTML = "Hello, "+user.email
        uid = user.uid;
        console.log(uid); 
        var contact2 = [] ;
        db.collection("Application").doc(user.uid).collection("Account").get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                console.log(doc.id, "Account Name => ", doc.data().accountsitesearch1);
                contact2.push(doc.data());
                AddAllItemsToTheTable2(contact2);
                // accountname(doc.data().accountsitesearch1);
                // parentaccountname(doc.data().accountsitesearch1);
                //GetAllDataOnce();
            });
        });
    }
})
// function GetAllDataOnce(){
//     db.collection("Application").doc(user.uid).collection("Account").get()
//     .then((querySnapshot) => {
//         var contact = [] ;
//         querySnapshot.forEach(doc => {
//             contact.push(doc.data());
//         });
//         AddAllItemsToTheTable(contact);
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
//         AddAllItemsToTheTable(contact);
//         // console.log(querySnapshot); 
//         // console.log(contact); 
//     })
// }

function AddItemToTable2(accountsitesearch, phone, user2){
    var trow = document.createElement('tr');
    var td1 = document.createElement('td');
    var td2 = document.createElement('td');
    var td3 = document.createElement('td');
    var td4 = document.createElement('td');

    td1.innerHTML = ++contactno;
    td2.innerHTML = accountsitesearch;
    td3.innerHTML = phone;
    td4.innerHTML = user2;

    trow.appendChild(td1);
    trow.appendChild(td2);
    trow.appendChild(td3);
    trow.appendChild(td4);
    tbody.appendChild(trow);

}

function AddAllItemsToTheTable2(contactlist){
    tbody.innerHTML="";
    contactlist.forEach(element => {
        AddItemToTable2(element.accountsitesearch ,element.phone, element.user2, );
    })
}
// window.onload = GetAllDataOnce;
