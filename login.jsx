import React from "react";
import './login.css';
import {useFormik} from 'formik';
const validate = values =>{
    const errors ={};
    if(!values.FirstName){
        errors.FirstName = "*Required"
    } else if(values.FirstName.length > 8){
        errors.FirstName = "*must be 8 characters or less"
    }
    if(!values.LastName){
        errors.LastName = "*Required"
    } else if(values.LastName.length > 8){
        errors.LastName = "*last name required"
    }
    if(!values.Email){
        errors.Email = "*Required"
    } else if(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(values.Email)){
        errors.Email = "*Invalid email address";
    }
    if(!values.Password){
        errors.Password = "*Required"
    } else if(values.Password.length > 8){
        errors.Password = "*maximum 8 characters"
    }
    else if(values.Password.length < 4){
    errors.Password = "*minimum 5 characters"
    }
    if(!values.ConfirmPassword){
        errors.ConfirmPassword = "*Required"
    } else if(values.Password.length !== values.Password ){
        errors.Password = "*password must match"
    }
return errors;


}

function Login() {
const formik = useFormik(
    {
        initialValues :{
            FirstName: '',
            LastName: '',
            Password: '',
            ConfirmPassword: '',
        },
        validate,
        onSubmit : values => {
            alert('Hello! , ${values.FirstName} you successfully signed up!' );
        }
         
    });

console.log(formik.values);


    return(
        <div className="head">
        <h1>..<span>L</span>ogin <span>P</span>age..</h1>

        <div className="form">
            <form onSubmit={formik.handleSubmit}>
            <input type="text" placeholder="FirstName.." name="FirstName" autoComplete="off" onChange={formik.handleChange} value={formik.values.FirstName} onBlur={formik.onBlur}/>
            {
              formik.touched.FirstName && formik.errors.FirstName ? <span>{formik.errors.FirstName}</span> : null
            }
            <input type="text" placeholder="LastName.." name="LastName" autoComplete="off" onChange={formik.handleChange} value={formik.values.LastName} onBlur={formik.onBlur}/>
            {
               formik.touched.LastName && formik.errors.LastName ? <span>{formik.errors.LastName}</span> : null
            }
            <input type="text" placeholder="Email.." name="Email" autoComplete="off" onChange={formik.handleChange} value={formik.values.Email} onBlur={formik.onBlur}/>
            {
               formik.touched.Email && formik.errors.Email ? <span>{formik.errors.Email}</span> : null
            }
            <input type="password" placeholder="Password"  name="password" autoComplete="off" onChange={formik.handleChange} value={formik.values.Password} onBlur={formik.onBlur}/>
            {
               formik.touched.Password && formik.errors.Password ? <span>{formik.errors.Password}</span> : null
            }
            <input type="password" placeholder="ConfirmPassword" name="ConfirmPassword" autoComplete="off" onChange={formik.handleChange} value={formik.values.ConfirmPassword} onBlur={formik.onBlur}/>
            {
              formik.touched.ConfirmPassword && formik.errors.ConfirmPassword ? <span>{formik.errors.ConfirmPassword}</span> : null
            }
            <input type="submit" value="Submit" />
            
            </form>
        
        </div>

   
        </div>
    );
    
}

export default Login;