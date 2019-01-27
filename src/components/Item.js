import React, { Component } from 'react';
import { observer } from 'mobx-react'

@observer
class Item extends Component {

  buyItem = (e) => {
    this.props.store.buyItem(e.target.value)
  }

  changePrice = (e) => {
    let newPrice = prompt("Enter new price")
    this.props.store.changePrice(this.props.item.name, newPrice)
  }

  render() {
    let item = this.props.item
    return (
      <div>
        <li onDoubleClick={this.changePrice}>
          {item.name} - {item.quantity} available at ${item.price} per item
        </li>
        <button value={item.name} onClick={this.buyItem}>Buy</button>
      </div>
    )
  }
}

export default Item