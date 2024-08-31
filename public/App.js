import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createContext, useState } from "react";
import Home from "./Home";
import ProfilePage from "./ProfilePage";

export const GlobalContext = createContext();
function App() {
    const [globalIsLogin, setGlobalIsLogin] = useState(false); 
    return (
        <GlobalContext.Provider
        value={{globalIsLogin, setGlobalIsLogin}}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    {/* <Route path="/favourites" element={} />
                    <Route path="/downloads" element={} /> */}
                    <Route path="/profile" element={<ProfilePage/>} />
                </Routes>
            </BrowserRouter>
        </GlobalContext.Provider>
    );
}
export default App;