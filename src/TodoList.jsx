import React from "react";

const TodoList = (props) => {
    return (
        <>
            <div className="to_do">
                <i className="fa fa-times" aria-hidden="true" onClick={()=>{
                    props.onSelect(props.id);
                }}/>
                <li className="list">{props.text}</li>
            </div>
        </>
        );
}

export default TodoList;