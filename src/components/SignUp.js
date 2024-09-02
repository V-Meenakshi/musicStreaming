import {  useEffect, useRef, useState } from "react";
import './SignUp.css';

export default function SignUp(){
    const NameRef=useRef(null);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const confirmPasswordRef = useRef(null);
    
    const[NameValue, setName]=useState("");
    const[emailValue,setEmail]=useState("");
    const[passwordValue,setPassword]=useState("");
    const[confirmPasswordValue,setConfirmPassword]=useState("");
    const[ageValue,setAge]=useState("");
    const[genderValue,setGender]=useState("");
    const[user,setUser]=useState("");
    const[Input,setInput]=useState("");
    
    
    useEffect(() =>{
        
        NameRef.current.focus();
        
    },[]);
    const getName=(event)=>{
        setName(event.target.value);
        console.log(event.target.value);
    }
    const getPassowrd=(event)=>{
        setPassword(event.target.value);
        console.log(event.target.value);
    }
    const getEmail=(event)=>{
        setEmail(event.target.value);
        console.log(event.target.value);
    }
    const getConfirmPassword=(event)=>{
        setConfirmPassword(event.target.value);
        console.log(event.target.value);
    }
    const getAge=(event)=>{
        setAge(event.target.value);
        console.log(event.target.value);
    }
    
    const getGender = (event)=>{
        console.log(event.target.value);
        setGender(event.target.value)
    }
    const submitData=(event)=>{
        event.preventDefault();
        const obj={
            NameValue,passwordValue,emailValue,genderValue,confirmPasswordValue
        }
        console.log(obj);
        setUser(obj);
        setGender("");
        setAge("");
        NameRef.current.value=("");
        passwordRef.current.value=("");
        emailRef.current.value=("");
        confirmPasswordRef.current.value=("");
        if(passwordValue===confirmPasswordValue){
            setInput("Completed");

        }
        else{
            setInput(" wrong confirm password");
        }

        console.log(user);
    }
    

    return(
        <div className="Sign-up" >
            <div className="container" style={{display:"flex",justifyContent:"center"}}>
                <div className="SignUp-card">
                    <div className="card" style={{width:"300" ,display:"flex",flexDirection:"column",padding:"15px"}}>
                        <h3>SIGNUP</h3>
                        
                        <form onSubmit={submitData}
                            style={{display:"flex",flexDirection:"column",gap:"10px"}}>
                            
                            <label>Name:</label>
                            <input type="text" placeholder="Name" onChange={getName} ref={NameRef} style={{backgroundColor:"black",color:"white"}}/>
                            <label>Email:</label>
                            <input type="text" placeholder="Email address" onChange={getEmail} ref={emailRef} style={{backgroundColor:"black",color:"white"}}/>
                            <label>Password</label>
                            <input type="password" placeholder="Password" onChange={getPassowrd} ref={passwordRef} style={{backgroundColor:"black",color:"white"}}/>
                            <label>Comfirm Password</label>
                            <input type="password" placeholder="Comfirm Password" onChange={getConfirmPassword} ref={confirmPasswordRef} style={{backgroundColor:"black",color:"white"}}/>
                            <label>Age</label>
                            <select className="form-select form-select-sm" ariaLabel="Small select example" onChange={getAge} value={ageValue} style={{backgroundColor:"black",color:"white"}}>
                                <option value="" >Select your Age</option>
                                <option value="0-10">0-10</option>
                                <option value="11-18">11-18</option>
                                <option value="19-29">19-29</option>
                                <option value="30-40">30-45</option>
                                <option value="Above 45">Above 45</option>
                            </select>
                            <label>Gender</label>
                            <div style={{dispaly:"flex"}}>
                                <label style={{marginRight:"10px"}}>
                                <input type="radio" checked={genderValue==="Male"} value="Male" onChange={getGender}></input>Male 
                                </label> 
                                <label style={{marginRight:"10px"}}>
                                <input type="radio" checked={genderValue==="Female"} value="Female" onChange={getGender}></input>Female  
                                </label>
                                <input type="radio" checked={genderValue==="Other"} value="Other" onChange={getGender}></input>Other
                            </div>
                            <div style={{display:"flex",justifyContent:"flex-end"}}>
                                <button type="submit" className="btn btn-dark" style={{width:"100" ,justifyContent:"flex-end"}} onClick={submitData}>SIGNUP</button>
                            </div>
                            <p>{Input}</p>
                        </form>
                
                    </div>
                </div>
            </div>
        </div>
    );
}