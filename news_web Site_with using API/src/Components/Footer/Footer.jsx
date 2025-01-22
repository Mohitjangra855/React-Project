import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-left">
        <img
          src="https://s3-alpha-sig.figma.com/img/8a23/832f/baf10fd9d43e587281158ffe874ba28b?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fEMxB7MaRfN0ti0UkhabtFOjGrKOCzIZXwfmlDnSIwjLhfPmZoISs5OU70hgxXA9euXORD4wYP66DlkPAkRSG3TD8gOtpPCsMmlorfY9o4eDWxjwgAxsVzm-cbniOTHSmXrRT42GIMwhmitqKsaxTlOO-mLfWM2uHV4epcVnDDvgStrmxM8j0007hxcIkieV3olRt7yxDY2dixDljwSxZFoBYpRaiO-iskhyXOqeqILsd2I-I4Hbb5mnVOiWJE60VrAc4bE4GbzwnfgGYIcFazT9roinJyuScLVaj0XEKxgSya~kNfi2-AfZempdn6AtwS6M-pvfSEl7wz0sdoyZAw__"
          alt=""
        />
        <p>Copyright © 2024 GNews API.All Rights Reserved.</p>
      </div>
      <div className="footer-right">
        <div className="footer-right-ul1">
            <li className="first_li">Navigation</li>
            <li>Documention</li>
            <li>Pricing</li>
            <li>FAQ</li>
            <li>About Us</li>
        </div>
        <div className="footer-right-ul2">
            <li className="first_li">Company</li>
            <li>Terms of Services</li>
            <li>Privacy policy</li>
        </div>
      </div>
    </div>
  );
};

export default Footer;
