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
          window.location.reload(); 
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <form ref={form} onSubmit={sendEmail } id='modal'>
        <h3 className='container'>Ask your Query</h3>
        <div className='input-group input-group-md mb-3'>
      <label className='input-group-text' >Name</label>
      <input className='' type="text" name="user_name" required='true' />
      </div>
      <div className='input-group input-group-md mb-3'>
      <label className='input-group-text'>Email</label>
      <input type="email" name="user_email" required='true'/>
      </div>
      <div  className='input-group input-group-md mb-3'>
      <label className='input-group-text'>Qustion</label>
      <textarea name="message" required='true'/>
      </div>
      <div className=''>
      <input className='btn btn-info me-5 ps-4 pe-4' type="submit" value="Send"  />
      <input className='btn btn-danger ms-5 ps-4 pe-4' type="reset" value="reset" onClick={freset}/>
      </div>
      
    </form>
  );
};