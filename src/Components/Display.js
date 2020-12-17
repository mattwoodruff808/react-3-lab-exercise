import {Component} from 'react';
import data from '../data';
import Navigation from './Navigation';

class Display extends Component {
    constructor(){
        super();
        this.state = {
            arr: data,
            index: 0
        }
    }

    previousIndex = () => {
        if (this.state.index >= 1 && this.state.index <= 24){
            this.setState({index: this.state.index - 1})
        } else {
            this.setState({index: 24})
        }
    }

    nextIndex = () => {
        if (this.state.index >= 0 && this.state.index <= 23){
            this.setState({index: this.state.index + 1})
        } else {
            this.setState({index: 0})
        }
    }

    render(){
        return (
            <section>
                <h2>{this.state.arr[this.state.index].id}/25</h2>
                <h2>{this.state.arr[this.state.index].name.first} {this.state.arr[this.state.index].name.last}</h2>
                <h4>From: {this.state.arr[this.state.index].city}, {this.state.arr[this.state.index].country}</h4>
                <h4>Job Title: {this.state.arr[this.state.index].title}</h4>
                <h4>Employer: {this.state.arr[this.state.index].employer}</h4>
                <h4>Favorite Movies: {this.state.arr[this.state.index].favoriteMovies.map((movie, i) => (
                    <h5 key={i}>{movie}</h5>
                ))}</h4>
                <Navigation 
                    previousFn={this.previousIndex}
                    nextFn={this.nextIndex}/>
            </section>
        )
    }
}

export default Display;