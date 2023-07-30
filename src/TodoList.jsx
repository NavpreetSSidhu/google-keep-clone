import React, { useState } from "react";
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import List from "./List";
import { Tooltip } from "@mui/material";


const TodoList = () => {
    const[item, setItem] = useState("");
    const[newItem, setNewItem] = useState([]);

    const itemEvent = (event) => {
        setItem(event.target.value);
    }

    const addItem = () => {
        setNewItem((oldVal) => {
            return [...oldVal, item];
        })
        setItem(" ");
    }

    return (
        <>
            <div className="main_div">
                <div className="center_div">
                    <h1 className="new_heading">Todo List</h1>
                    <br></br>
                    <input type="text" className="input_field" placeholder="Add an item" onChange={itemEvent} value={item}></input>
                    <Tooltip title="Add item">
                        <Button className="new_button" onClick={addItem}>
                            <AddIcon/>
                        </Button>
                    </Tooltip>
                    <ol className="ol_list">
                        {newItem.map((val, index) => {
                            return <List 
                            key = {index}
                            text = {val}/>;
                        })}
                    </ol>
                </div>
            </div>
        </>
    )
}

export default TodoList;