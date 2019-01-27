import React, { Component } from 'react';
import { observer } from 'mobx-react'
import Item from "./Item";

@observer
class Market extends Component {

    addItem = (e) => {
        if (e.key === 'Enter') {
            this.props.store.addItem(e.target.value)

        }
    }

    render() {
        return (
            <div>
                <input type="text"
                    onKeyPress={this.addItem} />
                {this.props.store.items.map(i => {
                    return <Item key={i.name} item={i} store={this.props.store} />
                })}
            </div>
        )
    }
}

export default Market