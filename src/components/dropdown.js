import React from 'react'
import * as drop from 'react-bootstrap'

export default function Dropdown() {
    return (
        <div>
            <drop.DropdownButton className="buttondrop" id="dropdown-basic-button" title="Dropdown button">
            <drop.Dropdown.Item href="#/action-1">Action</drop.Dropdown.Item>
            <drop.Dropdown.Item href="#/action-2">Another action</drop.Dropdown.Item>
            <drop.Dropdown.Item href="#/action-3">Something else</drop.Dropdown.Item>
            </drop.DropdownButton>
        </div>
    )
}
