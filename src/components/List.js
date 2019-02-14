import React, { Component } from 'react';
import axios from 'axios';
import Student from './Student'
class List extends Component {
    constructor() {
        super();
        this.state = {
            list: [],
            name: '',
        }
    }

    componentDidMount() {
        axios.get('/list')
            .then(res => {

                this.setState({ list: res.data })
            })
    }

    handleInput(text) {
        this.setState({ name: text })

    }

    render() {
        let mapStudents = this.state.list.filter((val, i) => {
            console.log('**STUDENT**',val)
            return val.first_name.toLowerCase().includes(this.state.name.toLowerCase()) || val.last_name.toLowerCase().includes(this.state.name.toLowerCase())
        }).map((student) => {
               console.log(this.state.list)
            return (
                <Student student={student} />
            )
        })



        return (
            <div>
                <input className='search' onChange={(e) => this.handleInput(e.target.value)} placeholder='Search'/>
                {/* <input onChange={this.filteredArr} /> */}
                {mapStudents}

            </div>
        )
    }
}

export default List;


        // console.log(students.first_name)
        // console.log(this.state.list[0].first_name)