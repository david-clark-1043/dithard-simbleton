import { getCustomers, getAgents } from "./database.js"
import { CustomerHTML } from "./Business.js"
import { AgentHTML } from "./agentHTML.js"

//const contentTarget = document.querySelector(".customers")


export const searchCompanies = () => {
        /*
            When the user presses 'Enter', find the matching business.

            You can use the `.includes()` string method to
            see if a smaller string is part of a larger string.

            Example: business.companyName.includes(keyPressEvent.target.value)
        */
    const customers = getCustomers()
    
    const companySearchResultArticle = document.querySelector(".foundCompanies")
    companySearchResultArticle.innerHTML = "<h2>Searching By Company Name</h2>"
    
    let inputValue = document.querySelector("#companySearch")
    inputValue = inputValue.value.toLowerCase()
    if(!inputValue) {
        companySearchResultArticle.innerHTML += "<h4>Please enter text to search</h4>"
    } else {
        const foundBusinesses = customers.filter(customer => customer.companyName.toLowerCase().includes(inputValue))/** implement .find() method here */
        
        if(foundBusinesses.length > 0) {
            for(const biz of foundBusinesses){
            companySearchResultArticle.innerHTML += CustomerHTML(biz);
            }
        } else {
            companySearchResultArticle.innerHTML += "<h4>No results</h4>"
        }
        companySearchResultArticle.innerHTML += "<hr>"
    }
}

const agentNameCheck = (inputValue) => {
    const agents = getAgents()
    const foundAgents = agents.filter(agent => agent.fullName.split(" ")[0].toLowerCase().includes(inputValue) ||
                                                agent.fullName.split(" ")[1].toLowerCase().includes(inputValue) )
    return foundAgents
}

export const searchAgents = () => {
    
    const companySearchResultArticle = document.querySelector(".foundCompanies")
    let inputValue = document.querySelector("#companySearch")
    inputValue = inputValue.value.toLowerCase()
    const foundAgents = agentNameCheck(inputValue)
    companySearchResultArticle.innerHTML = "<h2>Searching By Agent</h2>"
    if(!inputValue) {
        companySearchResultArticle.innerHTML += "<h4>Please enter text to search</h4>"
    } else {
        if(foundAgents.length > 0) {
            for(const agent of foundAgents){
            companySearchResultArticle.innerHTML += AgentHTML(agent);
            }
        } else {
            companySearchResultArticle.innerHTML += "<h4>No results</h4>"
        }
        companySearchResultArticle.innerHTML += "<hr>"
    }

}