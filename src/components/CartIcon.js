import React, {Component} from 'react';


class CartIcon extends Component{
    
    


    render(){


      

      const cartAmount={
        color: 'red'
      };

      const cartImage={        
        /*backgroundColor:'blue'*/
        width:40
      };

      return(
      <div  style={{display:'flex' }} /* positionne digit above at the rigth of image */>
         {/* comments ouside tag must begin with a '{' */}
          {/* comment inside tag use the /* notation */}    
         <img  /*src="https://cdnjs.cloudflare.com/ajax/libs/geomicons-open/1.0.1/icons/shopping-cart.svg" style={{width:40}} /> */ /* fonctionne aussi style in line*/
        src="https://cdnjs.cloudflare.com/ajax/libs/geomicons-open/1.0.1/icons/shopping-cart.svg" style={cartImage} />
         
         <span style={cartAmount}> 5</span>
        

      </div>
      );
    }



}

export default CartIcon;