import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

import './footer.css'

function Footer(){
    return(
        <div className = "footer-div">
            <div style = {{paddingTop : 30, textAlign : 'center'}}>
                <a href="https://www.instagram.com" className ="items" > <InstagramIcon/></a>
                <a href="https://www.facebook.com" className ="items" > <FacebookIcon/></a>
                <a href="https://in.linkedin.com/" className ="items" > <LinkedInIcon/> </a>
                <h5>Summer School Shop | Copyright 2021</h5>
            </div>   
        </div>
    );
}

export default Footer;