import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const Email2 = () => {
  const form = useRef();
  const freset = (e) => {  this.form.reset()}
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ul5iydk', 'template_m3d5oka', form.current, '4EhK-Dumfjhxa5lZ8')
  
      .then((result) => {
          console.log(result.text);
          window.alert(result.text);
          window.location.reload(); 
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className=' container shadow-lg p-3 mb-5 bg-white rounded' style={{ width: '18rem' }}>
    <form ref={form} onSubmit={sendEmail } id='modal'>
        <h3 className='container m-3'>Ask your Query</h3>
        <div className='input-group input-group-sm mb-3 mt-5'>
      <label className='input-group-text' >Name</label>
      <input className='' type="text" name="user_name" required='true' />
      </div>
      <div className='input-group input-group-sm mb-3'>
      <label className='input-group-text'>Email</label>
      <input type="email" name="user_email" required='true'/>
      </div>
      <div  className='input-group input-group-sm mb-3'>
      <label className='input-group-text'>Qustion</label>
      <textarea name="message" required='true'/>
      </div>
      <div className=''>
      <input className='btn btn-info me-5 ps-4 pe-4' type="submit" value="Send"  />
      <input className='btn btn-danger ms-4 ps-4 pe-4' type="reset" value="reset" onClick={freset}/>
      </div>
      
    </form>
    </div>
  );
};