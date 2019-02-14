import React, { Component } from 'react';
import axios from 'axios';
import StarRatings from 'react-star-ratings';
import Student from './Student'

class Detail extends Component {
    constructor() {
        super();
        this.state = {
            detail: [],
            comments: '',
            id: 0,
            textArea: false,
            commId:0,
        }
    }
    componentDidMount() {
        const { id } = this.props.match.params

        axios.get(`/detail/${id}`)
            .then(res => {
                // console.log(id)
                this.setState({ detail: res.data })
                // console.log('***WHATISIT***',this.props.match.params.id)
            })

    }

    deleteCmnt = async (commId) => {
        const { id } = this.props.match.params
        // console.log('WORKING??????', commId)
        let res = await axios.delete(`/comment/${commId}/${id}`)
        this.setState({ detail: res.data })
        console.log(this.state)

        //res.data= remove from back-end. we are recevigig data from the back-end. 
        await axios.get(`/detail/${id}`)
            .then(res => {
                // console.log(id)
                this.setState({ detail: res.data })
                // console.log('***WHATISIT***',this.props.match.params.id)
            })
    }

    handleTextArea = (commId) => {
        this.setState({ textArea: true, commId: commId})
    }

    handleComment(text) {
        this.setState({ comments: text })
    }

    updateCmnt = (id) => {
        let { comments } = this.state
        axios.put(`/update/${id}`, { comments })
            .then(res => {
                this.setState({ detail: res.data })
            })
    }


    render() {
        // console.log('MUST SHOW DETAIL',this.state.detail.dedication)

        const det = this.state.detail.map(detail => {
            console.log('SHOW ME SOMETHING', detail)
            return (
                <div>

                    <p>{detail.comments}</p>
                    <button onClick={() => this.deleteCmnt(detail.id)}>Delete</button>
                    <button onClick={() => this.handleTextArea(detail.id)} >Update</button>
                   
                    <p>Dedication</p>
                    <StarRatings
                        rating={detail.dedication}
                        starRatedColor="darkred"
                        changeRating={this.changeRating}
                        numberOfStars={5}
                        name='dedication'
                        starEmptyColor='grey'
                        starDimension='14px'
                        starSpacing='2px'
                    />
                    <p>Attendance</p>
                    <StarRatings
                        rating={detail.attendance}
                        starRatedColor="darkred"
                        changeRating={this.changeRating}
                        numberOfStars={5}
                        name='attendance'
                        starEmptyColor='grey'
                        starDimension='14px'
                        starSpacing='2px'
                    />

                    <p>Independent</p>
                    <StarRatings
                        rating={detail.independent}
                        starRatedColor="darkred"
                        changeRating={this.changeRating}
                        numberOfStars={5}
                        name='independent'
                        starEmptyColor='grey'
                        starDimension='14px'
                        starSpacing='2px'
                    />

                    <p>Organization</p>
                    <StarRatings
                        rating={detail.organization}
                        starRatedColor="darkred"
                        changeRating={this.changeRating}
                        numberOfStars={5}
                        name='organization'
                        starEmptyColor='grey'
                        starDimension='14px'
                        starSpacing='2px'
                    />

                    <p>Initiative</p>
                    <StarRatings
                        rating={detail.initiative}
                        starRatedColor="darkred"
                        changeRating={this.changeRating}
                        numberOfStars={5}
                        name='initiative'
                        starEmptyColor='grey'
                        starSpacing='2px'
                        starDimension='14px'
                    />

                    <p>Professionalism</p>
                    <StarRatings
                        rating={detail.respect}
                        starRatedColor="darkred"
                        changeRating={this.changeRating}
                        numberOfStars={5}
                        name='respectful'
                        starEmptyColor='grey'
                        starDimension='14px'
                        starSpacing='2px'
                    />
                    
 
                </div>
            )
        })
        return (
            <div>
                <h1>Details</h1>
                <p>{det}</p>
                {this.state.textArea ?
                    <div> 
                        <textarea cols='80' rows='10' value={this.state.comments} onChange={(e) => this.handleComment(e.target.value)}></textarea>
                        <button onClick={() => this.updateCmnt(this.state.commId)}>Submit</button>
                    </div> : null}



            </div>
        )
    }
}

export default Detail;
