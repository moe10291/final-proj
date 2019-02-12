import React, { Component } from 'react';
import StarRatings from 'react-star-ratings';
import axios from 'axios';
import './Rate.css'

class Stars extends Component {
    constructor() {
        super();
        this.state = {
            dedication: 0,
            attendance: 0,
            independent: 0,
            organization: 0,
            initiative: 0,
            respectful: 0,
            comments: '',
            have_again: true,
            users_id: 0,
            student_id: 0,
            avg:0,
            rates: []

        }
        this.rating = this.rating.bind(this);
    }
 componentDidMount(){
     this.setState({student_id: this.props.match.params.id})
    //  console.log('***WHATISIT***',this.props.match.params.id)
 }

    handleDescription(text) {
        this.setState({ comments: text })
    }

    async rating() {
        let { users_id, student_id, dedication, attendance, independent, organization, initiative, respectful, comments, have_again } = this.state
        // console.log('**SOMETHING*', dedication, attendance, independent, organization, initiative, respectful, comments, have_again)
        const res = await axios.post('/rating/rate', { users_id, student_id, dedication, attendance, independent, organization, initiative, respectful, comments, have_again })
        this.setState({ rates: res.data })
        alert('Your Review has been submitted')
    }


    handleChange = (e) => {
        this.setState({ have_again: e.target.value })
    }

    changeRating = (stars, e) => {
        this.setState({ [e]: stars })
    }

    stdRatings=()=>{
        axios.get('/rating/avg')
        .then (res => {
            // console.log('*&&&&*RESULT*&&&*')
            this.setState({avg: res.data})
        })
    }
    

    render() {
        
        return (
            <div>
                <p>Dedication</p>
                <StarRatings
                    rating={this.state.dedication}
                    starRatedColor="darkred"
                    changeRating={this.changeRating}
                    numberOfStars={5}
                    name='dedication'
                    starEmptyColor='grey'
                    starDimension='70px'
                />
                <br></br>
                <p>Attendance</p>
                <StarRatings
                    rating={this.state.attendance}
                    starRatedColor="darkred"
                    changeRating={this.changeRating}
                    numberOfStars={5}
                    name='attendance'
                    starEmptyColor='grey'
                    starDimension='70px'
                />
                <br></br>
                <p>Independent</p>
                <StarRatings
                    rating={this.state.independent}
                    starRatedColor="darkred"
                    changeRating={this.changeRating}
                    numberOfStars={5}
                    name='independent'
                    starEmptyColor='grey'
                    starDimension='70px'
                />
                <br></br>
                <p>Organization</p>
                <StarRatings
                    rating={this.state.organization}
                    starRatedColor="darkred"
                    changeRating={this.changeRating}
                    numberOfStars={5}
                    name='organization'
                    starEmptyColor='grey'
                    starDimension='70px'
                />
                <br></br>
                <p>Initiative</p>
                <StarRatings
                    rating={this.state.initiative}
                    starRatedColor="darkred"
                    changeRating={this.changeRating}
                    numberOfStars={5}
                    name='initiative'
                    starEmptyColor='grey'
                    starDimension='70px'
                />
                <br></br>
                <p>Professionalism</p>
                <StarRatings
                    rating={this.state.respectful}
                    starRatedColor="darkred"
                    changeRating={this.changeRating}
                    numberOfStars={5}
                    name='respectful'
                    starEmptyColor='grey'
                    starDimension='70px'
                />
                <br></br>
               
             <div className='radio-buttons'>
             <p>Have this Student Again ?</p>
             <label>
             <input className='true' type='radio' name='Yes' value={true}
               checked={this.state.have_again==='true'} onChange={this.handleChange}/>
               <span className='yes'>YES</span>

                <input className='false' type='radio' name='No' value={false}
               checked={this.state.have_again==='false'} onChange={this.handleChange}/>
               <span className='no'>NO</span>
             </label>
               

</div>  
                <h3>Comments</h3><textarea className='desc' rows='10' cols='80' value={this.state.comments} onChange={(e) => this.handleDescription(e.target.value)}></textarea>
                <br></br>
                <button className='submit' onClick={this.rating}>Submit</button>
               

            </div>
        )
    }
}

export default Stars;



    // changeRating=( newRating)=> {
    //     this.setState({rating: newRating});
    //   }


    //     changeRating=()=> {
    // console.log('Does it work')
    //         const rating = this.state.numbers.reduce((acc, val, i, arr) => {
    //             const total = acc + val
    //             if (i === this.state.numbers.length - 1) {
    //                 return total / this.state.numbers.length
    //             }
    //             return total
    //         }, 0)
    //         console.log('SHOULD',rating)
    //         this.setState({rating: rating}) 
    //     }