import React, { useState } from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Header from "./Header";
import Footer from "./Footer";
import CreateNote from "./CreateNote";
import Note from "./Note"

const App = () => {

    const [addItem, setItem] = useState([]);

    const addNote = (note) => {
        setItem((oldData) => {
            return [...oldData, note];
        })
    }

    const onDelete = (id) => {
        setItem((prevData) => prevData.filter((currData, idx) => {
                return idx !== id;
            })
        );
    }

    return (
        <>
            <Header/>
            <CreateNote
                passNote = {addNote}
            />

            {addItem.map((val,index)=>{
                return (
                    <Note
                        key={index}
                        id={index}
                        title={val.title}
                        content={val.content}
                        delete={onDelete}
                    />
                );
            })}

            <Footer/>
        </>
    );
}

export default App;

