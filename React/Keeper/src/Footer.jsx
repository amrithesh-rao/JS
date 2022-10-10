import React from "react";


function Footer(){

    var curYear = new Date().getFullYear();   
    return (
        <footer>
            <p>Copyright ⓒ {curYear}</p>
        </footer>
    );
}

export default Footer;