import { getAgents } from "./database.js"
import { AgentHTML } from "./agentHTML.js"

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