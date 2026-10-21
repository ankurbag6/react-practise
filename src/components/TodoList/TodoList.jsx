/*

Build 3: Todo list (30 min, comment block first):

A text input and an “Add” button. 
Adding puts a new todo at the bottom of the list.
Empty or whitespace-only input does nothing.
Each todo has a checkbox. Checking it marks it done (strike-through).
Each todo has a “Delete” button.
Show “X of Y done” above the list.

Stretch: pressing Enter in the input also adds.

STATE : todolistarr

structure todolistarr:
[
  {item: "add pen", isChecked: false}
]


Implementation plan -
1. add input box, add button
2. Event : handleAddClick -> push content the todolistarr, 
   and display -> li : content checkbox delete
   3. 
*/

import { useState } from "react";

export default function TodoList() {
    const [todolistarr, setTodolistarr] = useState([{ name: "add pen", isChecked: false }])
    const [currItem, setCurrItem] = useState("");
    // const totalchecked = todolistarr.map(item => {
    //     let cnt = 0;
    //     if (item.isChecked)
    //         cnt++;
    //     return cnt;
    // });

    const doneCount = todolistarr.filter(t => t.isChecked).length;
    const handleAddClick = () => {
        // add currItem to the todolistarr
        if (!currItem || currItem.length === 0 || currItem.trim().length === 0)
            return;

        const templist = [...todolistarr];
        templist.push({ name: currItem, isChecked: false });
        setTodolistarr(templist);
        setCurrItem("")

    }
    const handleCheck = (i) => {
        // update todolistarr isChecked
        const templist = [...todolistarr];
        templist[i] = { ...templist[i], isChecked: !templist[i].isChecked };   // copy the item, then change it
        setTodolistarr(templist);
    }
    const handleDelete = (i) => {
        // remove currItem to the todolistarr
        const templist = [...todolistarr];
        let newList = templist.filter((_, idx) => idx !== i)
        setTodolistarr(newList);
    }
    return (
        <>
            <h1>To Do list</h1>
            <div>
                <label>
                    Enter Item: <input type="text" value={currItem} onChange={e => setCurrItem(e.target.value)} />
                </label>
                <button onClick={handleAddClick}>Add</button>
            </div>
            <ul>
                {todolistarr.map((item, i) =>
                    <li style={item.isChecked ? { textDecoration: 'line-through' } : { textDecoration: 'none' }}>{item.name}
                        <input type="checkbox" checked={item.isChecked} onChange={() => handleCheck(i)} />
                        <button onClick={() => handleDelete(i)}> Delete </button></li>)}
            </ul>
            <h2>{todolistarr.length > 0 && <span>{doneCount} checked of {todolistarr.length} </span>}</h2>
        </>
    );
}