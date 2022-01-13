import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import { BsPerson } from "react-icons/bs";

const useStyles = makeStyles({
  root: {
    width: "200px",
    marginLeft: "100px",
    display: "flex",
    width: "70px",
    height: "50px",
    marginTop: "0px",
    border: "1px solid black",
  },

  user: {
    textDecoration: "none",
    color: "white",
    marginLeft: "12px",
    marginTop: "17px",
  },

  hello: { color: "white", border: "1px solid black", },

  login_link: { border:'1px solid black', marginTop:'17px' ,color:'black',
fontSize:'20px',
},

  current_user: { color: "white", marginLeft: "12px" },
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
