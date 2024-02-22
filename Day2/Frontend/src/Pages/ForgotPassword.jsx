import React, { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import '../Assests/CSS/Styles.css';
function ForgotPassword() {
  const [showVerification, setShowVerification] = useState(false);
  const [otpSent, setOtpSent] = useState(false);
  const successVariant = 'success';
  const [show, setShow] = useState(true);
  const handleResendOTP = () => {
    setShowVerification(true);
    setOtpSent(true);
  };

  return (
    <>


      <div className='forgot-container'>
      <center><h3>Forgot Passoword</h3></center>
        <h4>Valid Mail Id</h4>
        <div className='mail'>
          <input type='email' placeholder='E-mail Id' required />
          <button className='btn btn-primary' onClick={handleResendOTP}>
            {otpSent ? 'Re-send OTP' : 'Send OTP'}
            </button>
            </div>
        {showVerification && (
          
          <div className='verification'>
          <div className='otp'>
          <h4>Enter OTP</h4>
          </div>
          <div className='otpnum'>
            <input type='text' placeholder='' minLength={1} maxLength={1} required />
            <input type='text' placeholder='' minLength={1} maxLength={1} required />
            <input type='text' placeholder='' minLength={1} maxLength={1} required />
            <input type='text' placeholder='' minLength={1} maxLength={1} required />
          </div>
            <button className='btn btn-success'>Verify</button>
          </div>
        )}
      </div>
    </>
  );
}

export default ForgotPassword;
