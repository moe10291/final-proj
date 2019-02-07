import React from 'react';
import { Link } from 'react-router-dom'
import Stars from './Rate';

const student = (props) => {
    let { id, first_name, last_name } = props.student

    return (
        <div key={id}>
            
            <Link to={`/${id}`}><p>{first_name + ', ' + last_name}</p></Link>
        </div>
    )
}

export default student;