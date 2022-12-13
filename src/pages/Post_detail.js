import {Link, useLocation} from "react-router-dom";
import React from "react";


function Post_detail(){
    const location = useLocation()
    const content = location.state.content
    return(
        <>
            <h1> here is the board's detail page</h1>
            {content}
            <Link to="/">
                <h1>go to main page</h1>
            </Link>
        </>
    )
}

export default Post_detail;