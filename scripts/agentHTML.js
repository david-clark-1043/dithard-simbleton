export const AgentHTML = ( agentObject ) => {
    return `
        <section class="agent">
            <h3 class="agent_name">${agentObject.fullName}</h3> 
            <div class="address_block">
            <p class="agent_company">${agentObject.company}</p>
            <p class="agent_phone">${agentObject.phoneNumber}</p>
            </div>
        </section>
        <hr>
    
    `
}