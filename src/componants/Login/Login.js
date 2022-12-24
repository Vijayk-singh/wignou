import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Success } from '../minicomp/Success';


export const Login = () => {
  const isShow =false;
  const Login1 = ()=>{
   
   window.alert('login will be availble soon') 
   window.location.reload()
  }
  
  return (
    <div className=' container shadow-lg p-3 mb-5 bg-white rounded' style={{ width: '18rem' }} >

  <img src='https://www.iconbunny.com/icons/media/catalog/product/6/2/620.12-login-icon-iconbunny.jpg' width="50px" alt=''></img>
  <label className=''
  style={{ color:'#16d28d'}}>
  LOGIN
 </label>
 <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail" >
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" required/>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" required/>
      </Form.Group>
      
      <Button className='me-3 ps-4 pe-3' variant="primary" type="submit" onClick={Login1}>
        Login
      </Button>
      <Button className='me-2' variant="outline-danger" type="submit">
        Forget Password
      </Button>
    </Form>
 {/* {isShow===true?<Success/>:""} */}
</div>

  )
}
