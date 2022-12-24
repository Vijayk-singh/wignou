import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export const Signup = () => {
    const Signup1 = ()=>{
   
        window.alert('Signup will be availble soon') 
        window.location.reload()
       }
  return (
    <div className=' container shadow-lg p-3 mb-5 bg-white rounded' style={{ width: '18rem' }}>
       <div className=''style={{ color:"#6189D8"}}><h4>Register here!</h4></div> 
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
      
      <Button className='me-4 ps-4 pe-4' variant="primary" type="submit" onClick={Signup1}>
      Signup
      </Button>
      <Button className='me-2 ms-5' variant="outline-info" href='/login' >
       Login
      </Button>
    </Form>
    </div>
  )
}
