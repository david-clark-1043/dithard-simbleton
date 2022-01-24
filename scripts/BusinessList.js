import { getCustomers, stateCustomers, industryCustomers } from "./database.js"
import { CustomerHTML } from "./Business.js"
import { searchCompanies } from "./buttonEvents.js"

const contentTarget = document.querySelector(".customers")
const customers = getCustomers()

export const CustomerList = () => {
    contentTarget.innerHTML += '<h2 class="customers--title">Active Businesses</h2>'

    customers.forEach(
        (customerObject) => {
            contentTarget.innerHTML += CustomerHTML(customerObject)
        }
    );

}

export const stateCustomerList = (state) => {
    contentTarget.innerHTML += `<article class="businessList--${state}">`
    contentTarget.innerHTML += `<h2 class="filteredList--title">${state} Businesses</h2>`
    const filteredCustomersArray = stateCustomers(state)

    filteredCustomersArray.forEach(
        (customerObject) => {
            contentTarget.innerHTML += CustomerHTML(customerObject)
        }
    )

    contentTarget.innerHTML += "</article>"
}

export const industryCustomerList = (industry) => {
    contentTarget.innerHTML += `<article class="businessList--${industry}">`
    contentTarget.innerHTML += `<h2 class="filteredList--title">${industry} Businesses</h2>`
    const filteredCustomersArray = industryCustomers(industry)

    filteredCustomersArray.forEach(
        (customerObject) => {
            contentTarget.innerHTML += CustomerHTML(customerObject)
        }
    )

    contentTarget.innerHTML += "</article>"
}

//const companySearchResultArticle = document.querySelector(".foundCompanies")

document
    .querySelector("#search-company")
        .addEventListener(
            "click",
            searchCompanies
 );