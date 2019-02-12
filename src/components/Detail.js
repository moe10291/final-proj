import React, { Component } from 'react';
import axios from 'axios';
import Student from './Student'

class Detail extends Component {
    constructor() {
        super();
        this.state = {
            detail: [],
            comments:'',
            id:0,
        }
    }
    componentDidMount() {
        const { id } = this.props.match.params
        
        axios.get(`/detail/${id}`)
        .then(res => {
            console.log(res)
            this.setState({ detail: res.data })
            // console.log('***WHATISIT***',this.props.match.params.id)
        })
    }
    
    deleteCmnt = (id) => {
        console.log('WORKING??????', id)
         axios.delete(`/comment/${id}`)
            .then(res => {
                this.setState({ detail: res.data })
                //res.data= remove from back-end. we are recevigig data from the back-end. 
            })
    }

    handleComment(text){
        this.setState({comments: text})
    }

    updateCmnt=(id)=> {
        let {comments}= this.state
        axios.put(`/update/${id}`, {comments})
        .then(res => {
            this.setState({detail: res.data})
        })
    }


    render() {

        const det = this.state.detail.map(detail => {
            console.log('SHOW ME SOMETHING',detail.id)
            return (
                <div>
                    <p>{detail.comments}</p>
                    <button onClick={() => this.deleteCmnt(detail.id)}>Delete</button>
                    <button onClick={() => this.updateCmnt(detail.id)}>Update</button>
                    
                </div>
            )
        })
        return (
            <div>
                <h1>Details</h1>
                <p>{det}</p>
                <textarea cols='80' rows='10' value={this.state.comments}onChange={(e)=>this.handleComment(e.target.value)}></textarea>

            </div>
        )
    }
}

export default Detail;
