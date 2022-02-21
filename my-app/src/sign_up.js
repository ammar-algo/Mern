import React, {useState} from 'react';
import {useHistory}  from 'react-router-dom';
import { makeStyles } from "@material-ui/core/styles";
import { useSelector, useDispatch } from "react-redux";
import Button from "@material-ui/core/Button";
import { sign_up_saga} from "./redux/actions";
import { Link } from "react-router-dom";


const useStyles = makeStyles({
    root: {
        // width:"450px", 
        // border: " 1px solid black",
        // marginLeft:"500px",
        // marginTop:"100px",
        // height:"300px",
        // borderColor:"#D3D3D3",  
        // borderRadius:"4px"      
    },
    container_one: {
        display: "flex",
        // border:"1px solid black",
        width:'155px',
        margin:"140px auto 0px auto",
       
        height:"60px",
      },
      container: {
        margin: "5px auto 0px auto",
        width: "250px",
        //marginLeft: "520px",
       
       
       
        border: " 1px solid #D3D3D3",
        borderRadius: "4px",
        backgroundColor: "white",
        padding:"50px 20px 50px 20px", 
      },
     
     
      input_container:{
        // border:"1px solid black",
        // paddingTop:"30px",
        // paddingRight:"30px",
        // paddingLeft:"30px",
        display:"grid", 
        width:"100%",
        // padding:""
      },

      sign_in: {
        width: "50px",
        height:"30px",
      
        //marginLeft: "487px",
        //  border:"1px solid black",
        //marginTop: "180px",
        fontSize: "20px",
        fontFamily: "Work Sans, sans-serif",
        color: "#000000",
        fontWeight: 600,
        cursor: "pointer",
       
         paddingLeft:"00px",
      },
      sign_up: {
        width: "70px",
        height:"30px",
        marginLeft: "21px",
      // marginRight: "0px",
        //  border:"1px solid black",
        // marginTop: "60px",
        fontSize: "20px",
        fontFamily: "Work Sans, sans-serif",
        color: "#000000",
        fontWeight: 600,
        paddingRight:"10px",
      },
      email: {
        marginLeft: " 0px",
        border: "1px solid #ddd",
        width: "95%",
        height: "40px",
        padding:"0px 0px 0px 10px",
        "&:focus": {
          outline: "none",
          border: "1px solid #FCB800",
         },
         '&::placeholder': {
          padding:"0px"
          }
      },
      password: {
        marginLeft: "0px",
        marginTop: "20px",
        border: "1px solid #ddd",
        width: "95%",
        height: "40px",
        padding:"0px 0px 0px 10px",
        "&:focus": {
          outline: "none",
          border: "1px solid #FCB800",
         
        },
        '&::placeholder': {
          padding:"0px 0px 0px 0px"
          }
      },
      username: {
        marginLeft: "0px",
        marginTop: "20px",
        border: "1px solid #ddd",
        width: "95%",
        height: "40px",
        padding:"0px 0px 0px 10px",
        "&:focus": {
          outline: "none",
          border: "1px solid #FCB800",
          //backgroundColor: '#FCB800',
        },
      },
      signInButton: {
        //    backgroundColor: "#000",
        fontFamily: "Work Sans, sans-serif",
    
        color: "#000000",
        backgroundColor: "#FCB800",
        fontSize: "16px",
        fontWeight: 600,
        marginTop: "10px",
        // marginLeft:"-20px",
        width: "100%",
        height: "40px",
        borderRadius: "4px",
        border: "none",
        "&:hover": {
          outline: "none",
         backgroundColor:"#000000",
          color:"#fff",
    
          //backgroundColor: '#FCB800',
        },
        transition:"all .4s ease",
    
        
      },
      sign_up_link:{
          textDecoration:"none"
      },
      sign_in_link:{
        textDecoration:"none"
    }
  
    
    
      
});




function Sign_up() {
    const history = useHistory()
    // const path = history.push("/login_page")
    const classes = useStyles();
    const dispatch = useDispatch();

    const [loginstate, setloginstate] = useState(true);
    const register = () => {
    
        setloginstate(false);
      };
      const login = () => {
        setloginstate(true);
      };


    const[sign_up_email, setSignUpEmail] = useState()
    const[sign_up_password, setSignUpPassword] = useState()
    const[sign_up_username, setSignUpUsername] = useState()

    const getSignUpEmail = (e)=>{
        setSignUpEmail(e.target.value)
    }

    const getSignUpPassword = (e)=>{
        setSignUpPassword(e.target.value)
    }
    const getSignUpUserName = (e)=>{
        setSignUpUsername(e.target.value)
    }
    
    const current_user_email = sign_up_email
    const current_user_password = sign_up_password
    const current_user_name = sign_up_username
    // history.push(./)
    // function refreshPage() {
    //     window.location.reload();
    //   }

    return (
        <div className={classes.root}>
          
          <div className={classes.container_one}>
       
          <Link className={classes.sign_in_link} to="/login_page">
       
       <p
          className={classes.sign_in}
          onClick={login}
        >
          Login
        </p>
        </Link>
        <Link className={classes.sign_up_link} to="/sign_up">
        <p className={classes.sign_up} onClick={register}>
          Register
        </p>
        </Link>
     
    </div>
    <div className={classes.container}>
          <div className={classes.input_container}>
          <input
            className={classes.email}
            onChange={getSignUpEmail}
            type="text"
            placeholder="email"
          />
          <input
            className={classes.password}
            onChange={getSignUpPassword}
            type="password"
            placeholder = "password"
          />
          <input
            className={classes.username}
            onChange={getSignUpUserName}
            type="text"
            placeholder="username"
          />
          <br />
          <div className={classes.button}>
          <Button
            onClick={() => {
              dispatch(
                sign_up_saga({
                  email: current_user_email,
                  password: current_user_password,
                  user_name: current_user_name,
                  history,
                })
              );
              // dispatch(getUser(localStorage.getItem('for_reducer')));
              //
              // dispatch(setUser())
              // history.push("/login_page")
              // history.go(1)
              // window.location.reload(true)
              // dispatch(getUser());
            }}
            className={classes.signInButton}
            size="small"
          >
            Register
          </Button>
          </div>
          </div>
        </div>
        </div>
    )
}

export default Sign_up
