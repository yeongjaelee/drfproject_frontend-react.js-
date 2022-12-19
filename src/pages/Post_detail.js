import {Link, useLocation} from "react-router-dom";
import React, {useState} from "react";
import axios from "axios";


function Post_detail(){
    const location = useLocation()
    const title = location.state.title
    const content = location.state.content
    const id = location.state.id
    const [new_title, setNewTitle] = useState('')
    const [new_content, setNewContent] = useState('')

    const titleHandler = (e) =>{
        e.preventDefault()
        console.log('here is the title handler')
        setNewTitle(e.target.value)
    }
    const contentHandler = (e) =>{
        e.preventDefault()
        console.log('here is the content handler')
        setNewContent(e.target.value)
    }
    const update = (e) => {
        e.preventDefault()
        console.log(1)
        console.log(new_title)
        console.log(new_content)
        window.print(1)
        window.print(new_title)
        let body = {
            board_id:id,
            new_title:new_title,
            new_content:new_content
        }
        axios.put(`http://127.0.0.1:8000/board/${id}/${new_title}/${new_content}`)
            .then((res)=>console.log(res))
        window.location.href = "/Post"
    };
    return(
        <>
            <h1> here is the board's detail page</h1>
            <div>
                title : <textarea name="new_title"
            onChange={titleHandler}>{title}</textarea>
            </div>
            <div>
                content : <textarea name="new_content"
                onChange={contentHandler}>{content}</textarea>
            </div>
            <button type='submit' onClick={update}>
                update</button>
            <Link to="/">
                <h1>go to main page</h1>
            </Link>
        </>
    )
}

export default Post_detail;