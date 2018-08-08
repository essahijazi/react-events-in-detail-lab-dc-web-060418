// Code CoordinatesButton Component Here
import React, {Component} from "react"

class CoordinatesButton extends Component {
    onClickHandler = (event) => {
        let position = [event.clientX, event.clientY]
        this.props.onReceiveCoordinates(position)
    }

    render() {
        return (
            <button onClick={this.onClickHandler}>
                Button
            </button>
        )
    }
}

export default CoordinatesButton;