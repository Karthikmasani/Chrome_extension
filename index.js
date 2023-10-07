let myLeads = []
let oldLeads =[]
const inputEl = document.getElementById("input-el")
const inputbtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

const deleteBtn = document.getElementById("delete-btn")
const leadsfromlocalstorage = JSON.parse(localStorage.getItem("myLeads"))
const tabBtn = document.getElementById("tab-btn")

if (leadsfromlocalstorage){
     myLeads = leadsfromlocalstorage
     render(myLeads)

}

// const tabs = [{url: "https://www.linkedin.com/in/masani-karthik-2aba03228/"}]

tabBtn.addEventListener("click", function(){    
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads) )
        render(myLeads)
    })
})
function render(leads){
    let listitems = ""
    for (let i =0; i< leads.length; i++){

        listitems += `
            <li>
                <a target='_blank' href='${leads[i]}'>
                ${leads[i]}
                </a>
            </li>`

    }
    ulEl.innerHTML = listitems
}


deleteBtn.addEventListener("dblclick", function(){
    
    localStorage.clear()
    myLeads=[]
    render(myLeads)
})


inputbtn.addEventListener("click", function(){
    
    
    myLeads.push(inputEl.value)
    inputEl.value =""
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads)

    
})


