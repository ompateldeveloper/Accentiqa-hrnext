import { Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Landing from "./pages/Landing";
import Signin from "./pages/Auth/Signin";
// import Signup from "./pages/Auth/Signup";

function App() {
    // const user=null;
    const user={};
    return (
        <div className="">
            <Routes>
                <Route path={'/'} element={<Landing/>}/>

                <Route path={'*'} element={<Navigate to='/404' />} />
                {/* <Route path={'/dashboard/*'} element={<Dashboard/>} /> */}

                <Route path={"/dashboard/*"} element={
                    !user ?
                        <Navigate to="/signin" replace />
                        :
                        <Dashboard />
                } />
                <Route path={"/signin"} element={
                    user ?
                        <Navigate to="/dashboard" replace />
                        : <Signin />
                } />
                {/* <Route path={"/signup"} element={
                    user ?
                        <Navigate to="/dashboard" replace />
                        : <Signup />
                } /> */}

            </Routes>
        </div>
    )
}

export default App
