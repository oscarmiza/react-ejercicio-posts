import React, {Component} from 'react';

class Parrafo extends Component {
    state = {  }
    render() {
        return (
            <>
            <div key={this.props.id} className="col-9 m-4">
            <div className="card">
                <div className="card-header">
                    {this.props.title}
                </div>
                <div className="card-body">
                    <h6>{this.props.id}</h6>
                    <p className="card-text"> {this.props.body}
                    </p>
                </div>
            </div>
        </div>
        </>
        );
    }
}

export default Parrafo;