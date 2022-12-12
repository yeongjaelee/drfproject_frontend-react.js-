import React, {useState} from "react";
import {Form, Link} from "react-router-dom";
import styles from "./Post_create_css.css"
import axios from "axios";
function Post_create(){
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    const titleHandler = (e) =>{
        e.preventDefault()
        setTitle(e.target.value)
    }
    const contentHandler = (e) =>{
        e.preventDefault()
        setContent(e.target.value)
    }
    const post = (e) => {
        e.preventDefault()
        console.log(1)
        console.log(title)
        let body = {
            title:title,
            content:content
        }
        axios.post("http://127.0.0.1:8000/board/", body)
            .then((res)=>console.log(res))
    };
    const onReset = () => {

    }
    return(
        <>
            <input
                name="title"
                type="text"
                placeholder="place the title"
                value={title}
                onChange={titleHandler}
            />
            <textarea
                name = "content"
                placeholder="place the content"
                value={content}
                onChange={contentHandler}
            />
            <div>
            <button type='submit' onClick={post}>
            submit</button>
            </div>
            <button onClick={onReset}>reset</button>
            <div>
            <Link to="/">
                home
            </Link>
            </div>
        </>
    )
}

export default Post_create;