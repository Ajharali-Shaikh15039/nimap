import React from 'react'
// import Navheader from './navbar'
import Dropdown from './dropdown'
import Information from './information';
import { Container } from 'react-bootstrap';

export default function Home() {
    return (
        <div>
            {/* <Navheader/> */}
            <Container>
                <Dropdown/>
                <Information/>
            </Container>
        </div>
    )
}
