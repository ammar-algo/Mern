import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
//import {  useDispatch } from "react-redux";
//import {getUser} from './redux/actions/index';
import { useSelector, useDispatch } from "react-redux";
import { addToSaga } from "./redux/actions/index";
import { useFormik } from "formik";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles({
  root: {
    marginLeft: 30,
  },
  disp: {
    marginTop: 40,
  },
  inputOne: { marginTop: 10, width: "240px" },
  inputTwo: { width: "240px" },
  year: {
    width: "240px",
  },
  click: {
    marginTop: 10,
    backgroundColor: "#FF9900",
    color: "#000000",

    fontSize: "10px",
  },
});

function Entry(setFieldValue) {
  const classes = useStyles();
  const [data, setData] = useState("");
  //const dispatch = useDispatch();
  const [price, setPrice] = useState("");
  const dispatch = useDispatch();

  //console.log('datas',data.id)
  const getData = (val) => {
    setData(val.target.value);
  };
  //console.log ('data',data)
  const getPrice = (event) => {
    setPrice(event.target.value);
  };
  //console.log('price',price)
  var pri = parseInt(price);
  const [year, setYear] = useState("");
  const getYear = (event) => {
    setYear(event.target.value);
  };
  const [rating, setRatings] = useState("");
  const getRatings = (event) => {
    setRatings(event.target.value);
  };
  //console.log(rating)
  var rat = parseInt(rating);

  const formik = useFormik({
    initialValues: {
        file: '',
      link: "",
      price: "",
      /* year:'',
        ratings:'',*/
    },
    onSubmit: (values) => {
      alert(JSON.stringify(  { 
        fileName: values.file.name, 
        type: values.file.type,
        size: `${values.file.size} bytes`
      }, null, 2));
    },
  });

  return (
    <div className={classes.root}>
      <h1 className={classes.disp}> Add New items</h1>
      <form onSubmit={formik.handleSubmit}>
        {/* <input
          className={classes.inputOne}
          type="text"
          onChange={formik.handleChange}
          value={formik.values.link}
          name="link"
          placeholder=" Image "
        /> */}
         <input
           type="file"
           className={classes.inputOne}
           accept=".png, .jpg, .jpeg"
           name="file"
       
       
        
          // onChange={(formProps) => {
          //   formProps.setFieldValue("file", event.currentTarget.files[0]);
          // }}
     
           />
        <div>
          <input
            className={classes.inputTwo}
            onChange={formik.handleChange}
            value={formik.values.price}
            type="number"
            name="price"
            placeholder=" Price "
          />
        </div>
        {
          <div>
            <select
              onChange={formik.handleChange}
              value={formik.values.year}
              className={classes.year}
              name="year"
            >
              <option value="" default selected>
                Year of release
              </option>
              <option value="1999">1999</option>
              <option value="1991">1991</option>
              <option value="1998">1998</option>
              <option value="1994">1994</option>
            </select>
          </div>
        }
        {
          <div>
            <select
              onChange={formik.handleChange}
              value={formik.values.ratings}
              className={classes.year}
              name="ratings"
            >
              <option value="" default selected>
                Ratings
              </option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
        }
        <div></div>
        <div>
          <Button
            className={classes.click}
            type="submit"
            onClick={() =>
              dispatch(
                addToSaga({
                  image: formik.values.link,
                  price: formik.values.price,
                  /*year:formik.values.year,*/ rating: formik.values.ratings,
                })
              )
            }
          >
            add item
          </Button>
        </div>
      </form>
    </div>
  );
}

export default Entry;
