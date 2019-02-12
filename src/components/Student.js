import React from 'react';
import { Link } from 'react-router-dom'


const student = (props) => {
    let { id, first_name, last_name } = props.student

    return (
        <div key={id}>
            <p>{first_name + ', ' + last_name}</p>
            <Link to={`/${id}`}>Rate</Link>
            <br></br>
            <Link to={`/detail/${id}`}>View Rating</Link>
        </div>
    )
}

export default student;