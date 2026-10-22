import { useState } from "react";

/*
1. Show every agent in a list or table with name, owner and status.
2. Each row has a button: 
“Suspend” 
 if the agent is active, 
 “Activate” if it’s suspended. 
 Clicking it flips the status.
3. Suspended rows look visibly different (greyed out or similar).
4. Above the list, 
show a summary: “3 active · 2 suspended”, always correct as you click.
5. Add a filter with three options, 
All / Active / Suspended, that controls which rows are shown.

Implementation plan:
1. AgentListTable -> showing agents. (coming from the array : AGENTS)
2. Each AgentRow has -> name, owner and status. Button label : “Suspend” | “Activate”
  -> event onClick : flip the status
  -> Suspended row looks different background-color : grey 
3. Summary Label : Derived from the Agents Filtered 
4. Fillter Dropdown : All / Active / Suspended
  - onChange : filteredList based on the status

// STATE - agentsList , selectedFilter
// DERIVED - filteredList
// EVENTS

*/
export default function AdminPanel({ agents }) {

    const [agentsList, setAgentsList] = useState(agents);
    const [selectedFilter, setSelectedFilter] = useState('all');

    const filteredList =
        selectedFilter !== 'all' ?
            agentsList.filter(a => a.status === selectedFilter.toLowerCase()) :
            agentsList;

    const suspendedAgents = agentsList.filter(a => a.status === 'suspended').length;
    const activeAgents = agentsList.length - suspendedAgents;
    const toggleStatus = (agentId) => {
        const prev = [...agentsList];
        const idx = prev.findIndex(a => a.id === agentId);
        const tempAgent = { ...prev[idx] };
        tempAgent.status = prev[idx].status === 'active' ? 'suspended' : 'active';
        prev[idx] = tempAgent;
        setAgentsList(prev);
    };

    return (
        <>
            <h1>Admin Panel</h1>
            {/* Show total suspended*/}
            <div><i>Summary</i> - {activeAgents} active | {suspendedAgents} suspended </div>
            {/* Filter*/}
            <select onChange={(e) => setSelectedFilter(e.target.value.toLowerCase())}>
                <option>All</option>
                <option>Active</option>
                <option>Suspended</option>
            </select>

            {/* Table of Agents*/}
            <table>
                <tbody>
                    <tr>
                        <td><strong>Name</strong></td>
                        <td><strong>Owner</strong></td>
                        <td><strong>Status</strong></td>
                        <td><strong>Action</strong></td>
                    </tr>
                    {filteredList.map(
                        (agent) =>
                            <tr key={agent.id} style={{ color: agent.status === "suspended" ? "#999" : "inherit" }}>
                                <td >{agent.name}</td>
                                <td >{agent.owner}</td>
                                <td >{agent.status}</td>
                                <td >
                                    <button onClick={() => toggleStatus(agent.id)}>
                                        {agent.status === 'active' ? 'Suspend' : 'Activate'}
                                    </button>
                                </td>
                            </tr>
                    )}

                </tbody>
            </table>

        </>
    );
}