import React from 'react'
import './Footer.css';


const Footer = () => {
    return (
        <div className="main-footer">
            <div className="container"> 
                <div className="row">
                    {/*col 1 */}
                    <div className="col">
                        <h4>TO DO APP</h4>
                        <ul className="list-unstyled">
                            <li>123-456-789</li>
                            <li>Weisskopfstrasse 123,</li>
                            <li>Berlin,Germany.</li>                          
                        </ul>
                    </div>
                     {/*colum 2*/}
                    <div className="col">
                        <h4>Team</h4>
                        <ul className="list-unstyled">
                            <li>Tino Borse</li>
                            <li>Kauser Jaffari</li>
                            <li>Spyridon Kavvadas</li>                          
                        </ul>
                    </div>
                     {/*colum 3*/}
                     <div className="col">
                        <h4>Powered by</h4>
                        <ul className="list-unstyled">
                            <li>React</li>
                            <li>Bootstrap</li>
                            <li>HTML, <span> CSS </span></li>                          
                        </ul>
                    </div>
                    

                </div>
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

 

