import React from 'react';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


const useStyles = makeStyles({
    root:{
              
              
                display:'flex',
                top:"0px",
                marginTop:"7px",
                  marginLeft:'350px',
                width:"48px",
                height:"25px",
                border: "1px solid black",
                // '&:hover': {
                //   border:" 1px solid white",
                // },
              
    },

    icon: {
     color:'#000000',
    height:"23px",
     marginTop:"0px",
    border:"1px solid black",
     width:"23px",
    
    },
    count:{
            marginTop:'3px', 
            color:'#000000',
            textDecoration:'none',
            margin: "0px",
            border:"1px solid black",
            width:" 15px", 
            paddingLeft:"4px",
            height:"20px",
            //marginLeft:"2px",
    },
    checkout_link:{
      textDecoration:"none"
    }
   
  });

function Cart() {
    const classes = useStyles()
    const counts= useSelector((state)=> state.checkout)
   console.log("carts count",counts)
   var sum = 0
   var totalCount = counts.map(i=>{
     
     sum += i.qty
   })
   var itemsCount= sum
    return (
      
      <Link  className= {classes.checkout_link} to='/checkout'>
           
        <div className={classes.root}>
         
           <h3 className={classes.count}>{itemsCount}</h3>
        
            
           <span className={classes.icon}>
               
                <AddShoppingCartIcon/>
             </span> 
          
          
         
        </div>
        </Link >
           
    )
}

export default Cart
