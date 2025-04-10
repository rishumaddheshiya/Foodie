import React, { useState } from "react";
import { toast } from 'react-toastify'
import "./Footer.css";
import validator from "validator";
const SubscribeNewsletter = ()=> {
  const [inputEmail, setInputEmail] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

  const handleEmailInput = (event) => {
    setInputEmail(event.target.value);
  };

  const handleSubscribeClick = () => {
 
     if(inputEmail===""){
toast.error("Please Enter your Email to Subscribe");
     }
      else  if(!validator.isEmail(inputEmail)){
toast.error("Please Enter a valid Email");
     }
        else{toast.success("Subscribed to Newsletter !")
          
            
             
              setInputEmail("");
        
        
        }

    
  };

  return (
    <div className="ft-info-p2">
      <p className="ft-input-title">Subscibe for more offers</p>
      <input
        type="text"
        inputMode="email"
        className="ft-input"
        placeholder="Enter your email address"
        name="email"
        value={inputEmail}
        onChange={handleEmailInput}
        autoComplete="true"
      />
      <button
        className="text-appointment-btn ft-btn "
        type="button"
        
        onClick={handleSubscribeClick}
      >
        Subscribe
      </button>


    </div>
  );
}

export default SubscribeNewsletter;
