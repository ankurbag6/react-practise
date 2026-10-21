/*

Build a reusable Tabs component.

1. It takes a list of tabs, each with a label and some content.
2. It shows the tab labels in a row, with the first tab selected by default.
3. Clicking a label shows that tab’s content and hides the others.
4. The selected tab looks visibly different.
5. Use it twice on the same page with different data, to show it’s reusable.

Stretch goal, if you have time: Left and Right arrow keys move between tabs.


Tabs -> label , content
- first tab selected by default

Variables - list [{label, content}]
// STATE - selectedTabIndex
// DERIVED
// ACTIONS click of button -> highlights

Implementation plan : 
1. map -> display Buttons, selectedTabIndex = 0
2. display the content with selectedTabIndex

*/
import { useState } from "react";
export default function TabsList({ tablist }) {
    const [selectedTabIndex, setSelectedTabIndex] = useState(0);
    const handleTabClick = (index) => {
        setSelectedTabIndex(index);
    }
    return (<>
        {tablist.map((tab, i) => (<button role="tab" aria-selected={selectedTabIndex === i} key={i} style={selectedTabIndex === i ? { border: '1px solid red' } : { border: '1px solid white' }} onClick={() => handleTabClick(i)}>{tab.label}</button>))}
        <div role="tabpanel" style={{ height: 100, width: 400, border: '1px solid red' }}>{tablist[selectedTabIndex]?.content}</div>
    </>)
}