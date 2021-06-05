import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import {Col,Row} from 'react-bootstrap'
import {useHistory} from 'react-router-dom'

export default function User() {

    const [editPassCode,setEditPassCode] = useState(false);
    const history = useHistory();
    

    const changePassword = () => {
        setEditPassCode(true)
    }

    const logout = () =>{
        history.push('/')
    }
    return (
        <div>
            <Form>
                <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                    <Form.Label column sm="2">
                    Username
                    </Form.Label>
                    <Col sm="10">
                    <Form.Control plaintext readOnly defaultValue="name" />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                    <Form.Label column sm="2">
                    {editPassCode?"New Password": "Password"}
                    </Form.Label>
                    {editPassCode?<Col sm="10">
                    <Form.Control type="password" value={"hi"}/>
                    </Col>:"*********"}
                </Form.Group>
                <Button style={{border:'1px',backgroundColor:"white",color:'black',border:'1px solid black'}} onClick={()=>changePassword()}>{editPassCode?"Save Password":"Change password"}</Button>
                <Button style={{border:'1px',backgroundColor:"white",color:'black',border:'1px solid black'}} onClick={()=>logout()}>Logout</Button>
            </Form>
        </div>
    )
}


