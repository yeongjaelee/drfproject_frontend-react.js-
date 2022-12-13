import {Link} from "react-router-dom";
import React from "react";

function Main(){
    return(
        <>
        <h1>Main page</h1>
        <div>
            <Link to="Post/">
                    go to post service
            </Link>
        </div>
        <div>
            <Link to="RestAPI/">
                go to rest api service
            </Link>
        </div>
        </>
    )
}

export default Main;