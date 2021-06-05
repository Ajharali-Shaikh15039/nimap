import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Button } from 'react-bootstrap'
// import { Table } from 'react-bootstrap'

export default function Task() {

    const [userData, setUserData] = useState([]);

    useEffect(() => {
        axios.get('http://jsonplaceholder.typicode.com/todos')
            .then((res) => {
                setUserData(res.data)
            })
            .catch(() => {
                alert("not fetched")
            })
    }, [])
    return (
        <div>
            <table>
                <tbody>

                    {userData.length && userData.slice(0,3).map((user) =>
                        <tr key={user.id}>
                            <td className='hi'>{user.id}</td>
                            <td className='hi'>{user.title}</td>
                            <td className='hi'>{`${user.completed}`}</td>
                            <td><Button variant="danger" type="submit" style={{ color: 'whitesmoke' }}>delete</Button></td>
                        </tr>
                    )}
                    <tr>
                        <td>
                            <Button variant="primary" type="submit" style={{ color: 'whitesmoke' }}>add task</Button>
                        </td>
                    </tr>
                </tbody>
            </table>
            {/* <div style={{display:'block'}}>no.</div>
            <div style={{display:'block'}}>text</div>
            <div style={{display:'block'}}>boolean</div>
            <div style={{display:'block'}}>Button</div> */}
            {/* <Table>
            <tbody>
                <tr>
                <td>1</td>
                {Array.from({ length: 3 }).map((_, index) => (
                    <td key={index}>Table cell {index}</td>
                ))}
                </tr>
            </tbody>
            </Table> */}
        </div>
    )
}
