import {Link} from "react-router-dom";
import React from "react";
import styles from "./Post.css";

function Main(){
    return(
        <>
                <Link to="Post/">
                    <h3 className={styles.category}>post</h3>
                </Link>
                <Link to="RestAPI/">
                    <h3>rest api</h3>
                </Link>
            <h1>yeongjae's develop projects</h1>
                <Link to="Login/">
                    <h3>Login</h3>
                </Link>
        </>
    )
}

export default Main;