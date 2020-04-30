import React from 'react';
// Stateful Componet


class Counter extends React.Component {
    state = {
        counter: 0,
        value: 0
    }

    handleClick = e => {
        e.target.name === "suma" ? this.handleSum() : this.handleRest();
    }

    handleSum = () => {
        this.setState({ counter: this.state.counter + this.state.value })
    }
    handleRest = () => {
        this.setState({ counter: this.state.counter - this.state.value })
    }

    handleChange = e => {
        this.setState({ value: parseInt(e.target.value )})
    }
    render() {
        return (
            <>
                <br /><hr /><br />
                <div style={{ display: 'flex' }}>
                    <input onChange={this.handleChange} name="input1" type="number" />
                </div>
                <button onClick={this.handleClick} name="resta">-</button>
                <button onClick={this.handleClick} name="suma">+</button>
                <h2>Total: {this.state.counter}</h2>
            </>
        )
    }
}

export default Counter