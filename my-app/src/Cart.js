import React from 'react';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { StarOutlined, StarFilled, StarTwoTone,ShoppingCartOutlined  } from '@ant-design/icons';
import { GiShoppingCart } from "react-icons/gi";



const useStyles = makeStyles({
    root:{
              
              
                display:'flex',
                top:"0px",
                marginTop:"12px",
                  marginLeft:'350px',
                width:"48px",
                height:"25px",
                // border: "1px solid black",
                // '&:hover': {
                //   border:" 1px solid white",
                // },
              
    },

    icon: {
     color:'#000000',
    // height:"23px",
     marginTop:"0px",
    // border:"1px solid black",
    fontWeight:50,
     width:"23px",
     fontSize: "1.5rem",
     fontFamily: "Work Sans, sans-serif",

    
    },
    count:{
            marginTop:'3px', 
            color:'#000000',
            textDecoration:'none',
            margin: "0px",
            fontSize: "16px",
            fontFamily: "Work Sans, sans-serif",

            // border:"1px solid black",
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
               
           <GiShoppingCart/>
             </span> 
          
          
         
        </div>
        </Link >
           
    )
}

export default Cart
