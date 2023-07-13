import React, { useState } from "react";
import TodoList from "./TodoList";

const App = () => {
    const [inputList, setinputList] = useState("");
    const [items, setItems] = useState([]);

    const itemEvent = (event) => {
        let addedItem = event.target.value;
        setinputList(addedItem);
    }

    const addList = () => {
            setItems((list)=> {
                return [...list,inputList];
        })
        setinputList("");
    }

    const deleteItem = (id) => {
        console.log("bye")
        setItems((list)=> {
            return list.filter((element,index)=>{
                return index !== id;
            })
        })
    }

    return(
        <>
            <div className="main_div">
                <div
                className="center_div">
                    <br/>
                    <h1 className="new_heading">ToDo List</h1>
                    <br/>
                    <input type="text" placeholder="Add Items" className="input_field" onChange={itemEvent} value={inputList}/>
                    <button className="button" onClick={addList}>+</button>
                    <ol className="ol_list">
                        {items.map((itemVal, index)=>{
                            return <TodoList
                                key = {index}
                                id = {index}
                                text = {itemVal}
                                onSelect = {deleteItem}
                            />
                        })}
                    </ol>
                </div>
            </div>
        </>
    )
}

export default App;