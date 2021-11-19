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

    handleDelete(id){
      this.props.onDelete(id);
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
        <button onClick={this.handleDelete.bind(this,this.props.id)}>x</button>
      </div>
      );
    }



}

export default CartDetailRow;