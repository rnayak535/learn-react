import React, { Component } from 'react'

class Todoitem extends Component {
    render() {
        console.log(this.props.todo);
        return (
            <div>
                <h1>Hello</h1>
            </div>
        );
    }
}

export default Todoitem;
