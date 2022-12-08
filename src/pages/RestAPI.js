import React, {useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";

function RestAPI(){
    const [text, setText] = useState([]);

    return (
        <>
            <Link to="Post/">
                <h1>go to post</h1>
            </Link>
            <h1>practice Rest API</h1>
            <div className="btn-primary">
                <button onClick={()=>{
                    axios
                        .post("http://127.0.0.1:8000/review/",{
                        title: "title", content: "content"
                    })
                        .then(function (response){
                            console.log(response);
                        })
                        .catch(function (error){
                            console.log(error);
                        });
                }}
                        >
                    POST
                </button>
                <button
                    onClick={() =>{
                    axios
                        .get("http://127.0.0.1:8000/review/")
                        .then((response) =>{
                            setText([...response.data]);
                            console.log(response.data);
                        })
                        .catch(function(error){
                        console.log(error);
                    });
                }}
                        >
                    GET
                </button>
            </div>
            {text.map((e)=>(
                <div>
                    {""}
                    <div className="list">
                        <span>
                            {e.id}, {e.title}, {e.content}
                        </span>
                        <button
                            className="btn-delete"
                            onClick={()=>{
                                axios.delete(`http://127.0.0.1:8000/review/${e.id}/`);
                                setText(text.filter((text)=> text.id !==e.id));
                            }}
                            >
                            DELETE
                        </button>{""}
                    </div>
                </div>
            ))}
        </>
    );
}

export default RestAPI;