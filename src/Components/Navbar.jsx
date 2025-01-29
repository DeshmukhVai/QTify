import React from "react";
import styles from "./Navbar.module.css";
import Logo from "./Logo";
import Search from "./Search";
import Button from "./Button";
const Navbar =()=>{
    return(
        <>
            <nav className={styles.navbar}>
                <Logo />
                <Search search={"search a song of your choice"} />
                <Button children={"Give Feedback"} />
            </nav>
        </>
    )
}

export default Navbar;