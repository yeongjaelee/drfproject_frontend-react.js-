import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import axios from "axios";

function Post(){
    const [data, setData] = useState([])
    useEffect(()=>{
        axios.get('http://127.0.0.1:8000/board/')
            .then(res=>setData(res.data))
    });
    return(
        <>
            <h1>here is the board's main page</h1>
            {data.map((item)=>(
                <li key = {item.id}>
                    <Link to ="Post_detail/" state={{
                        id : item.id,
                        title : item.title,
                        content: item.content
                    }}>
                    {item.title}
                    </Link>
                    <button
                        className="btn-delete"
                        onClick={()=>{
                            axios.delete(`http://127.0.0.1:8000/board/${item.id}/`);
                            item.filter((text)=>text.id !==item.id)
                        }}>delete</button>
                </li>
                ))}
            <Link to="/">
            <h1>go to main page</h1>
            </Link>
            <Link to="Post_create/">
                create
            </Link>
        </>
    )
}

export default Post;