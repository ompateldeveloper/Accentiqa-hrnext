import { Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Landing from "./pages/Landing";
import Signin from "./pages/Auth/Signin";
import { useAuthContext } from "./contexts/AuthContext";
import Signup from "./pages/Auth/Signup";
import { Loader, Loader2 } from "lucide-react";
import Loading from "./components/ui/Loading";
// import Signup from "./pages/Auth/Signup";

function App() {
    // const user=null;
    const {user,isLoading}=useAuthContext();
    if(isLoading){
        return <Loading/>
    }
    return (
        <div className="bg-zinc-50">
            <Routes>
                <Route path={'/'} element={<Landing/>}/>

                <Route path={'*'} element={<Navigate to='/404' />} />
                {/* <Route path={'/dashboard/*'} element={<Dashboard/>} /> */}

                <Route path={"/dashboard/*"} element={
                    user 
                    ?
                    <Dashboard />
                    :
                    <Navigate to="/signin" replace />
                } />
                <Route path={"/signin"} element={
                    user ?
                        <Navigate to="/dashboard" replace />
                        : <Signin />
                } />
                <Route path={"/signup"} element={
                    user ?
                        <Navigate to="/dashboard" replace />
                        : <Signup />
                } />

            </Routes>
        </div>
    )

}

export default App