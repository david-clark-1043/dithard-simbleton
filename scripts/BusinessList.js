import { getCustomers, stateCustomers, industryCustomers } from "./database.js"
import { CustomerHTML } from "./Business.js"

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

const companySearchResultArticle = document.querySelector(".foundCompanies")

document
    .querySelector("#companySearch")
        .addEventListener(
            "keypress",
            keyPressEvent => {
                if (keyPressEvent.charCode === 13) {
                    /*
                        When the user presses 'Enter', find the matching business.

                        You can use the `.includes()` string method to
                        see if a smaller string is part of a larger string.

                        Example: business.companyName.includes(keyPressEvent.target.value)
                    */

                    const foundBusiness = customers.find(customer => customer.companyName.includes(keyPressEvent.currentTarget.value))/** implement .find() method here */
                    if(foundBusiness) {
                        companySearchResultArticle.innerHTML = CustomerHTML(foundBusiness);
                    } else {
                        companySearchResultArticle.innerHTML = "<h3>No results</h3>"
                    }
                }
        });