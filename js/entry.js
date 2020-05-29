var TestEntry = [{
    "Id": "TestEntry",
    "Title": "The Earth",
    "Data": "Mostly Harmless"
}, {
    "Id": "TestEntry2",
    "Title": "The Universe",
    "Data": "Big"
},{
    "Id": "TestEntry3",
    "Title": "Tristan Hardiman",
    "Data": "Smol"
}]

function loadEntry(){
    for (i = 0; i < TestEntry.length; i++){
        if (TestEntry[i].Id == localStorage.getItem("SelectedEntry")){
            document.getElementById("entry-title").innerText = TestEntry[i].Title
            document.getElementById("entry-text").innerText = TestEntry[i].Data
        }
    }
}   


function LoadIntoMemory(){
    window.localStorage.setItem("SelectedEntry", "TestEntry")
}

function getEntries(){
    for (i = 0; i < TestEntry.length; i++){
        var newButton = document.createElement("button")
        var lnbreak = document.createElement("br")
        var lnbreak2 = document.createElement("br")
        newButton.id = TestEntry[i].Id
        newButton.innerText = TestEntry[i].Title
        newButton.setAttribute("class", "luz-button")
        // newButton.addEventListener('click', loadEntryPage(TestEntry[i].Id))

        document.getElementById("entries-section").appendChild(newButton)
        document.getElementById("entries-section").appendChild(lnbreak)
        document.getElementById("entries-section").appendChild(lnbreak2)

        
    }
}


function loadEntryPage(entryID){
    
    for (i = 0; i < TestEntry.length; i++){
        if (TestEntry[i].Id == entryID){
            window.localStorage.setItem("SelectedEntry", entryID)
            window.location.assign("entry.html")
        }else{
            console.log("No Entry Loaded!")
        }
    }
}