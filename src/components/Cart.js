import React, {Component} from 'react';
import CartDetailRow from "./CartDetailRow"; // ATTENTION bien mettre le  "./"



class Cart extends Component{

  constructor(props){
    super(props);
    this.state = {      
          
      orderDetailRows:[{id:1, itemLabel:'buis', amount:1, unitPrice:15},{id:2, itemLabel:'if', amount:10, unitPrice:20}]
        
      
    }; 
    // ABSOLUTELY NECESSARY OTHERWISE any reference to this.state.orderDetailRows will be undifined 
    this.handleIncreaseAmount= this.handleIncreaseAmount.bind(this);   
    this.handleDelete = this.handleDelete.bind(this); 
  }

  
    handleIncreaseAmount(itemId){      

      // reference artcile about cloning Array: https://www.freecodecamp.org/news/how-to-clone-an-array-in-javascript-1d3183468f6a/ NB Other way exists
      const newOrderDetaiRows = this.state.orderDetailRows.map((x)=>x);
      const index = newOrderDetaiRows.findIndex(e=>e.id==itemId);      
      const newAmount = newOrderDetaiRows[index].amount + 1;      
      newOrderDetaiRows[index].amount = newAmount;
      this.setState({orderDetailRows : newOrderDetaiRows});       
    }


    handleDecreaseAmount=()=>{
      console.log('Cart a capté DecreaseAmount from CartDetailRow');
      
    }

    handleDelete(id){
      console.log(`delete ${id}`);
      //console.log(this.state.orderDetailRows);
      const newOrderDetaiRow = this.state.orderDetailRows.filter(x=>x.id!==id);
      //console.log(newOrderDetaiRows);
      this.setState({orderDetailRows:newOrderDetaiRow});

    }


    render(){      
      const rows = [];
      this.state.orderDetailRows.forEach(
        (item)=>{          
          rows.push(<CartDetailRow id={item.id} itemLabel={item.itemLabel}  amount={item.amount} unitPrice={item.unitPrice} onIncreaseAmount={this.handleIncreaseAmount} onDecreaseAmount={this.handleDecreaseAmount}onDelete={this.handleDelete}></CartDetailRow>);
        }
      );
        
      console.log(rows); 

      return(
          <div>         
            Contenu du Cart:
            {/*{this.state.order.forEach(item=>console.log(item))}  */}
            <table>
                <tbody>
                    {rows}
                </tbody>
            </table> 

            {/*
            <CartDetailRow productName='if' amount='0'></CartDetailRow>
            <CartDetailRow productName='Buis' amount='1'></CartDetailRow> */}   
          </div> 
      );
    }



}

export default Cart;