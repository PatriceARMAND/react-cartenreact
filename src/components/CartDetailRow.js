import React, {Component} from 'react';


class CartDetailRow extends Component{

    constructor(props){
        super(props);
        //this.handleIncreaseAmount = this.handleIncreaseAmount.bind(this);
        this.handleDecreaseAmount = this.handleDecreaseAmount.bind(this);
    } 


    handleIncreaseAmount(id){
       //console.log({itemName});
       this.props.onIncreaseAmount(id); //ATTENTION DO NOT FORGET constructor binding AND "();"
    }


    handleDecreaseAmount(){
      console.log('removed');
      this.props.onDecreaseAmount();
    }


    render(){
    
      return(
      <div> 
        produit: {this.props.itemLabel} {/*DO NOT FORGET this.props AND NOT just props*/}
        quantité:  {this.props.amount}
        <button onClick={this.handleIncreaseAmount.bind(this,this.props.id)}>+</button>
        <button onClick={this.handleDecreaseAmount}>-</button>
        prix unitaire: {this.props.unitPrice}
        subtotal: {this.props.unitPrice * this.props.amount }
      </div>
      );
    }



}

export default CartDetailRow;