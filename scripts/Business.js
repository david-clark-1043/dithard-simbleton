export const CustomerHTML = ( customerObject ) => {
    return `
        <section class="customer">
            <h3 class="customer_name">${customerObject.companyName}</h3> 
            <div class="address_block">
            <p class="customer_address_line1">${customerObject.addressFullStreet}</p>
            <p class="customer_address_line2">${customerObject.addressCity}, ${customerObject.addressStateCode} ${customerObject.addressZipCode}</p>
            </div>
        </section>
        <hr>
    
    `
}