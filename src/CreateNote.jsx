import React, { useState } from "react";
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';

const CreateNote = (props) => {

    const [expand, changeSize] = useState(false);

    const[placeholder, setPlaceHolder] = useState("Click to get started");

    const [note, setNote] = useState({
            title: "",
            content: ""
    });

    const inputEvent = (event) => {
        
        // const value = event.target.value; 
        // const name = event.target.name;

        const {name, value} = event.target;

        setNote((prevData)=> {
            return {
                ...prevData,
                [name] : value
            }
        })
    }

    const addEvent = () => {
        props.passNote(note);
        setNote({
            title: "",
            content: ""
        })
    }

    const expandArea = () => {
        changeSize(true);
        setPlaceHolder("Write Your Note...");
    }

    const shorten = () => {
        changeSize(false);
        setPlaceHolder("Click to get started");
    }

    return (
        <>
            <div className="main_note" onDoubleClick={shorten}>
                <form className="form">
                    {expand?
                    <input 
                        type="text" 
                        placeholder="Title" 
                        className="ipt" 
                        autoComplete="off" 
                        name="title" 
                        value={note.title} 
                        onChange={inputEvent}>

                    </input> : null}
                    <textarea 
                        rows="" 
                        column="" 
                        placeholder={placeholder} 
                        className="textAr" 
                        name="content"
                        value={note.content} 
                        onChange={inputEvent} 
                        onClick={expandArea}
                        onDoubleClick={shorten}>
                    </textarea>
                   {expand ? 
                    <Button onClick={addEvent}>
                        <AddIcon className="plus_sign"/>
                    </Button>:null}
                </form>
            </div>
        </>
    )
}

export default CreateNote;