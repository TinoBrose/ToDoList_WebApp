import React from 'react'
import './Footer.css';


const Footer = () => {
    return (
        <div className="main-footer">
            <div className="container"> 
                <hr/>
                <div className="row">
                    <p className="col-sm">
                        &copy; {new Date().getFullYear()} TO DO APP INC. | All Rights reserved. | Terms of Usage. | Privacy.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Footer;

 

