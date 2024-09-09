import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createContext, useState } from "react";
import Home from "./components/Home";
import ProfilePage from "./components/ProfilePage";
import SignUp from "./components/SignUp";
// import Login from "./components/auth/login";
// import { setClientToken } from "./components/spotify";

export const GlobalContext = createContext();
function App() {
    const [globalIsLogin, setGlobalIsLogin] = useState(false); 
    //const [token,setToken] = useState("");
    // useEffect(()=>{
    //     const token = window.localStorage.getItem("token")
    //     const hash = window.location.hash;
    //     window.location.hash = ""
    //     if(!token && hash) {
    //         const _token = hash.split("&")[0].split("=")[1];
    //         window.localStorage.setItem("token", _token);
    //         setToken(_token);
    //         setClientToken(_token);
    //     } else {
    //         setToken(token);
    //         setClientToken(token);+
    //     }    
    // },[])
    return (
        <GlobalContext.Provider
        value={{globalIsLogin, setGlobalIsLogin}}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    {/* <Route path="/favourites" element={} />
                    <Route path="/downloads" element={} /> */}
                    <Route path="/SignUp" element={<SignUp />}/>
                    <Route path="/profile" element={<ProfilePage/>} />
                </Routes>
            </BrowserRouter>
        </GlobalContext.Provider>
        //<Login/>
    );
}
export default App;