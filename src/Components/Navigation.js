import {Component} from 'react';

class Navigation extends Component {
    render(){
        return (
            <section>
                <button onClick={this.props.previousFn}>Previous</button>
                <button onClick={this.props.nextFn}>Next</button>
            </section>
        )
    }
}

export default Navigation;