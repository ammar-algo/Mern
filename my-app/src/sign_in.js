import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import { BsPerson } from "react-icons/bs";

const useStyles = makeStyles({
  root: {
    width: "200px",
    marginLeft: "0px",
    display: "flex",
    width: "70px",
    height: "23px",
    marginTop: "-25px",
    // border: "1px solid black",
    
  },

  user: {
    textDecoration: "none",
    color: "white",
    marginLeft: "12px",
    marginTop: "17px",
  },

  hello: { color: "#000000", marginTop:"3px",height:"20px",    fontSize: "16px",    fontFamily: "Work Sans, sans-serif",

},

  login_link: { marginTop:'3px' ,color:'#000000',
fontSize:'20px', height:'20px',
// border:"1px solid black"
},

  current_user: { color: "#000000", marginLeft: "12px",height:'20px',
marginTop:'3px', fontFamily: "Work Sans, sans-serif",},
});

function Sign_in() {
  const classes = useStyles();
  var user_name = localStorage.getItem("user_details");
  var checkUserLoggedIn = user_name?.length > 0;

  return (
    <div className={classes.root}>
      <p className={classes.hello}>Hello,</p>

      {checkUserLoggedIn == true ? (
        <p className={classes.current_user}>{user_name}</p>
      ) : (
        <Link className={classes.login_link} to="/login_page">
        <BsPerson/>
    </Link>
      )}
    </div>
  );
}

export default Sign_in;
