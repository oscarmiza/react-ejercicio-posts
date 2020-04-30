import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'

import Parrafo from './parrafo'

class Tarjetas extends React.Component {
    state = {
        searchUserId: this.props.searchUserId,
    }

    render() {
        
        return (
            <>
                <div className=" border-left">
                    <h2 className="ml-3">This is my list of Post</h2>
                    {this.props.data && this.props.data.map(item =>
                        <>
                        <Parrafo key={item.id} id={item.id} title={item.title} body={item.body} userId={item.userId} search={this.state.searchUserId? this.state.searchUserId : undefined}/>
                        </>
                    )}
                </div>
            </>
        );
    }
}

export default Tarjetas;