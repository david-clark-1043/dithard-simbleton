import { getAgents } from "./database.js"
import { AgentHTML } from "./agentHTML.js"
import { searchAgents } from "./buttonEvents.js"

const contentTarget = document.querySelector(".agents")

export const AgentList = () => {
    contentTarget.innerHTML += '<h2 class="agents--title">Purchasing Agents</h2>'

    const agents = getAgents()

    agents.forEach(
        (agentObject) => {
            contentTarget.innerHTML += AgentHTML(agentObject)
        }
    );

}

document
    .querySelector("#search-agents")
        .addEventListener(
            "click",
            searchAgents
 );