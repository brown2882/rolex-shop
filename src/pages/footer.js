import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import '../assets/style/footer.scss'
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { useRef } from "react";



export const Footer = () => {
   
    
    
    return (
        <>
            <div className="footerr">
                <h4 className="h44">Share</h4>
                <div className="iconss">
                    <FontAwesomeIcon style={{marginLeft:'5px'}} icon={faInstagram} />
                    <FontAwesomeIcon style={{marginLeft:'5px'}} icon={faFacebook} />
                    <FontAwesomeIcon style={{marginLeft:'5px'}} icon={faTwitter} />
                    <FontAwesomeIcon style={{marginLeft:'5px'}} icon={faLinkedin} />
                    <FontAwesomeIcon style={{marginLeft:'5px'}} icon={faWhatsapp} />
                    <FontAwesomeIcon style={{marginLeft:'5px'}} icon={faYoutube} />
                </div>
                <div className="divCall">
                    <h3>contact Us</h3>
                    <div style={{display:'flex',marginTop:'10px'}}>
                        <FontAwesomeIcon style={{marginLeft:'3px',marginRight:'3px'}} icon={faPhone} />
                        <p style={{marginLeft:'3px'}}>Call (877) 834-1437</p>
                    </div>
                </div>
              
            </div>
            
            <hr/>
        </>
    )
}