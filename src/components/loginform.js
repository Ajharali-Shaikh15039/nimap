import React from 'react'
import {useDispatch, useSelector } from "react-redux"
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'

import {loginAction} from "./redux/action"

export default function Loginform() {
    /* const dispatch = useDispatch()
    const usersInfo = useSelector((state) => state.login);
    const loginCall = ()=> {
        dispatch(loginAction(true))
    } */
    return (
        <div>
      <Form className="fullform">
        <Form.Group controlId="formBasicEmail">
          <Form.Row>
          <Form.Label column lg={2}>Email address</Form.Label>
          <Col xs={3}>
          <Form.Control type="email" placeholder="Enter email" />
          </Col>
        </Form.Row>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Row>
          <Form.Label column lg={2}>Password</Form.Label>
          <Col xs={3}>
          <Form.Control type="password" placeholder="Password" />
          </Col>
          </Form.Row>
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">
          <Form.Row>
          <Col xs={7}>
          <Form.Check type="checkbox" label="Check me out" />
          </Col>
          </Form.Row>
        </Form.Group>
        <Form.Row>
          <Col xs={7}>
        <Button variant="primary" type="submit">
          Submit
        </Button>
        </Col>
        </Form.Row>
      </Form>
        </div>
    )
}
