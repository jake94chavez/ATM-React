import React, { Component } from 'react';

function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}
export default class Account extends Component {
  constructor (props) {
    super(props)
    this.state= {
      balance: 0
    }
  }
  handleDepositClick(e) {
    e.preventDefault();
    let amount = Math.round(parseFloat(this.inputBox.value)*100)/100;
    !isNaN(amount) ? amount = Math.round(parseFloat(this.inputBox.value) * 100)/100 : amount = 0;
    let newBalance = this.state.balance + amount;
     if (amount < 0) {
      alert('We cannot deposit money you don\'t have!')
    } else {
    this.setState({
      balance: newBalance
    })
    }
    this.inputBox.value= '';
  }
  handleWithdrawClick(e) {
    e.preventDefault();
    let amount = parseInt(this.inputBox.value);
    let newBalance = this.state.balance - amount;
      if (newBalance >= 0) { 
      this.setState({
        balance: newBalance
      })
      } else {
        alert('Insufficient funds!')
      }
    this.inputBox.value= '';
  }
  render() {
    return (
      <div className="account">
        <h2>{this.props.name}</h2>
        <div className="balance">{this.state.balance}</div>
        <input type="text" placeholder="enter an amount" ref={(input) => this.inputBox = input}/>
        <input type="button" value="Deposit" onClick={(e) => this.handleDepositClick(e)} />
        <input type="button" value="Withdraw" onClick={(e) => this.handleWithdrawClick(e)} />
      </div>
    )
  }
}
