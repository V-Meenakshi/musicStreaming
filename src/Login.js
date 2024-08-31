import {useContext,useEffect,useRef} from "react";
import { GlobalContext } from './App';
import './App.css';

function Login(){
    const mailRef = useRef(null);
    const passRef = useRef(null);
    const {setGlobalIsLogin} = useContext(GlobalContext);
    useEffect(() => {
        mailRef.current.focus();
    }, []);
    const submitted = (event) => {
        event.preventDefault();
        console.log("submitted");
        mailRef.current.value = "";
        passRef.current.value = "";
        setGlobalIsLogin(true);
    }
    return (
        <div className='container' style={{display:"flex", justifyContent:"center"}}>
            <div className='form'>
                <h1>LOGIN</h1>
                <form onSubmit={submitted}>
                    <label>Email:</label><br/>
                    <input type='email' className='inputField' ref={mailRef} /><br/>
                    <label>Password:</label><br/>
                    <input type='password' className='inputField' ref={passRef} /><br/>
                    <button type='submit' className='loginButton'>Login</button>
                </form>
            </div>
        </div>
    );
}
export default Login;
