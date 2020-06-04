
var firebaseConfig = {
    apiKey: "AIzaSyCSrKiVbg_cMJ9CMCHO_DNJQyjVgHHgIlk",
    authDomain: "hhttg-d0c23.firebaseapp.com",
    databaseURL: "https://hhttg-d0c23.firebaseio.com",
    projectId: "hhttg-d0c23",
    storageBucket: "hhttg-d0c23.appspot.com",
    messagingSenderId: "990294893505",
    appId: "1:990294893505:web:3b39f4901d133f944e4540",
    measurementId: "G-BB5RQNY7QL"
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

var database = firebase.database()


function databaseTest(){
    database.ref('TestNode/Test Value').once('value').then(function(snapshot){
        console.log(snapshot.val())
    })
}

function loadEntry(){
    database.ref('Entries').once('value').then(function(snapshot){
        snapshot.forEach(function(childSnapshot){
            if (childSnapshot.val().ID == localStorage.getItem("SelectedEntry")){
                document.getElementById("entry-title").innerText = childSnapshot.val().Title
                document.getElementById("entry-text").innerText = childSnapshot.val().Data
                document.title = "The Hitchhikers Guide To The Galaxy - " + childSnapshot.val().Title
            }
        })
    })

    
}   

function createEntry(){
    var newID = document.getElementById('newID').value
    var newTitle = document.getElementById('newTitle').value
    var newData = document.getElementById('newData').value

    database.ref(`Entries/${newID}`).set({
        ID: newID,
        Title: newTitle,
        Data: newData
    })

    alert("Entry Added Successfully, The Universe thanks you!")
    window.location.assign("entries.html")
}

function LoadIntoMemory() {
    window.localStorage.setItem("SelectedEntry", "TestEntry")
}

function getEntries() {
    var html = ''
    var entryID = ''
    database.ref(`Entries/`).once('value').then(function(snapshot){
        snapshot.forEach(function(childSnapshot){
            entryID = childSnapshot.val().ID
            console.log(childSnapshot.val())
            html += `<button class="luz-button" onClick="loadEntryPage(${childSnapshot.val().ID})" id="${childSnapshot.val().ID}">${childSnapshot.val().Title}</button>`
        })
        document.getElementById('entries-section').innerHTML = html
    })
}

function loadEntryPage(entryID) {
    var entry = entryID.id

    database.ref(`Entries/${entry}`).once('value').then(function(snapshot){
        if (snapshot.val().ID == entry){
            window.localStorage.setItem('SelectedEntry', entry)
            window.location.assign("entry.html")
        }else{
            console.log("No Entry Loaded!")
        }  
    })
}
