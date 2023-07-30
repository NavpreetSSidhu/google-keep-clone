import React, { useState } from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import { Tooltip } from "@mui/material";

const List = (props) => {
    const[line, setLine] = useState(false);

    const cutLine = () => {
        setLine(true);
    }

    return ( <>
                <div className="to_do">
                        <Tooltip title="Mark as completed">
                            <span onClick={cutLine}><DeleteIcon className="delete_icon"/></span>
                        </Tooltip>
                        <li className="list" style={{textDecoration : line? "line-through": "none"}}>{props.text}</li>
                </div>
            </>
    );
}

export default List;