import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector, useDispatch } from "react-redux";
// import Button from "@material-ui/core/Button";
import { sign_in_saga, sign_up_saga, getUser, setUser } from "./redux/actions";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import { Button } from "antd";

const useStyles = makeStyles((theme) => ({
  root: {
    // width:"350px",
    // border: " 1px solid black",
    // marginLeft:"500px",
    // marginTop:"100px",
    // height:"300px",
    //    border:" 1px solid #D3D3D3",
    // borderRadius:"4px",
    // height:"300px",
    //    backgroundColor:'#f1f1f1',
  },
  container: {
    margin: "5px auto 0px auto",
    width: "250px",
    //marginLeft: "520px",

    border: " 1px solid #D3D3D3",
    borderRadius: "4px",
    backgroundColor: "white",
    padding: "50px 20px 50px 20px",
  },

  input_container: {
    // border:"1px solid black",
    // paddingTop:"30px",
    // paddingRight:"30px",
    // paddingLeft:"30px",
    display: "grid",
    width: "100%",
    // padding:""
  },

  sign_in: {
    width: "50px",
    height: "30px",

    //marginLeft: "487px",
    //  border:"1px solid black",
    //marginTop: "180px",
    fontSize: "20px",
    fontFamily: "Work Sans, sans-serif",
    color: "#000000",
    fontWeight: 600,
    cursor: "pointer",

    paddingLeft: "00px",
  },

  email: {
    marginLeft: " 0px",
    border: "1px solid #ddd",
    width: "95%",
    height: "40px",
    padding: "0px 0px 0px 10px",
    "&:focus": {
      outline: "none",
      border: "1px solid #FCB800",
    },
    "&::placeholder": {
      padding: "0px",
    },
  },

  password: {
    marginLeft: "0px",
    marginTop: "20px",
    border: "1px solid #ddd",
    width: "95%",
    height: "40px",
    padding: "0px 0px 0px 10px",
    "&:focus": {
      outline: "none",
      border: "1px solid #FCB800",
    },
    "&::placeholder": {
      padding: "0px 0px 0px 0px",
    },
  },
  username: {
    marginLeft: "0px",
    marginTop: "20px",
    border: "1px solid #ddd",
    width: "95%",
    height: "40px",
    padding: "0px 0px 0px 10px",
    "&:focus": {
      outline: "none",
      border: "1px solid #FCB800",
      //backgroundColor: '#FCB800',
    },
  },
  container_one: {
    display: "flex",
    // border:"1px solid black",
    width: "155px",
    margin: "140px auto 0px auto",

    height: "60px",
  },
  sign_up: {
    width: "70px",
    height: "30px",
    marginLeft: "21px",
    // marginRight: "0px",
    //  border:"1px solid black",
    // marginTop: "60px",
    fontSize: "20px",
    fontFamily: "Work Sans, sans-serif",
    color: "#000000",
    fontWeight: 600,
    paddingRight: "10px",
  },
  new_user: {
    marginLeft: "100px",
  },
  button: {
    width: "100%",
    // border:"1px solid black",
  },

  signInButton: {
    //    backgroundColor: "#000",
    fontFamily: "Work Sans, sans-serif",

    color: "#000000",

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
      backgroundColor: "#000000",
      color: "#fff",

      //backgroundColor: '#FCB800',
    },
    transition: "all .4s ease",

    [theme.breakpoints.down("lg")]: {
      backgroundColor: "#FCB800",
    },
    [theme.breakpoints.up("lg")]: {
      backgroundColor: "#FCB800",
    },
  },

  link_signup: {
    textDecoration: "none",
  },
  signUpButton: {
    backgroundColor: "#FCB800",
    color: "#000000",
    marginLeft: 12,
    fontSize: "10px",
    marginTop: "30px",
    marginLeft: "150px",
  },
  sign_up_link: {
    textDecoration: "none",
  },
}));

function Login_page() {
  const [loginstate, setloginstate] = useState(true);

  const register = () => {
    setloginstate(false);
  };
  const login = () => {
    setloginstate(true);
  };

  const history = useHistory();
  const classes = useStyles();
  const dispatch = useDispatch();
  const name = useSelector((state) => state.user_login.details);
  console.log("uname", name);

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const getEmail = (e) => {
    setEmail(e.target.value);
  };

  const getPassword = (e) => {
    setPassword(e.target.value);
  };

  const current_user_email_login = email;
  console.log("current_user_email_login", current_user_email_login);
  const current_user_password_login = password;
  console.log("current_user_password_login", current_user_password_login);

  // const [sign_up_email, setSignUpEmail] = useState();
  // const [sign_up_password, setSignUpPassword] = useState();
  // const [sign_up_username, setSignUpUsername] = useState();

  // const getSignUpEmail = (e) => {
  //   setSignUpEmail(e.target.value);
  // };

  // const getSignUpPassword = (e) => {
  //   setSignUpPassword(e.target.value);
  // };
  // const getSignUpUserName = (e) => {
  //   setSignUpUsername(e.target.value);
  // };

  // const current_user_email = sign_up_email;
  // const current_user_password = sign_up_password;
  // const current_user_name = sign_up_username;

  console.log("loginstate", loginstate);

  return (
    <div className={classes.root}>
      <div className={classes.container_one}>
        <p className={classes.sign_in} onClick={login}>
          Login
        </p>
        <Link className={classes.sign_up_link} to="/sign_up">
          <p className={classes.sign_up} onClick={register}>
            Register
          </p>
        </Link>
      </div>
      {loginstate === true ? (
        <div className={classes.container}>
          <div className={classes.input_container}>
            <input
              className={classes.email}
              onChange={getEmail}
              type="text"
              placeholder="email"
            />

            <input
              className={classes.password}
              onChange={getPassword}
              type="password"
              placeholder="password"
            />

            <br />
            <div className={classes.button}>
              <Button
                onClick={() => {
                  dispatch(
                    sign_in_saga({
                      email: current_user_email_login,
                      password: current_user_password_login,
                      history,
                    })
                  );
                }}
                className={classes.signInButton}
                size="small"
              >
                Sign in
              </Button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default Login_page;
