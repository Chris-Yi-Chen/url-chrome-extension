let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const deleteBtn = document.querySelector("#delete-btn")
const ulEl = document.getElementById("ul-el")


const leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeads"))
if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    renderLeads()
}

deleteBtn.addEventListener("dblclick", function() {
    localStorage.clear()
    myLeads = []
    renderLeads()
})

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    inputEl.value = "" // clears out after submitting


    // save url in local storage (persistent)
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    
    renderLeads()
})

function renderLeads() {


    let listItems = ""
    for (let i = 0; i < myLeads.length; i++) {
        let url = myLeads[i]
        if (!url.startsWith("http://") && !url.startsWith("https://")) {
            url = "https://" + url;
        }
        listItems += `
            <li>
                <a target='_blank' href='${url}'>
                    ${url}
                </a>
            </li>
        `
    }
    ulEl.innerHTML = listItems  
}
