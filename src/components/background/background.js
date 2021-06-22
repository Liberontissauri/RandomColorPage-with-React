import React from "react"
import "./background.css"

const color_list = [
    "white",
    "red",
    "blue",
    "green",
    "yellow",
    "brown",
    "grey",
    "pink"
]

class Background extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            color: "white"
        }
    }
    newRandomColor() {
        let random_num = Math.floor(Math.random() * (7 - 0 + 1)) + 0
        // eslint-disable-next-line react/no-direct-mutation-state
        this.setState({color: color_list[random_num]})
    }
    render() {
        return (
            <div class="background-div" onClick={() => this.newRandomColor()} style={
                {
                    backgroundColor: this.state.color
                }
            }></div>
        )
    }
}

export default Background

