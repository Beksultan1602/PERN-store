import React from 'react';
import {Route, Routes} from 'react-router-dom'
import Shop from "../pages/Shop";
import Admin from "../pages/Admin";
import Auth from "../pages/Auth";
import DevicePage from "../pages/DevicePage";
import Basket from "../pages/Basket";
const AppRouter = () => {
    const isAuth = false
    return (
        <Routes>
            {/*{isAuth && AuthRoutes.map(({path, Element}) => {*/}
            {/*    <Route key={path} path={path} element={<Element />} />*/}
            {/*})}*/}
            {/*{PublicRoutes.map(({path, Element}) => {*/}
            {/*    <Route key={path} path={path} element={<Element />} />*/}
            {/*})}*/}
            { isAuth ? (
                <>
                    <Route path='/admin' element={<Admin />}></Route>
                    <Route path='/basket' element={<Basket />}></Route>
                </>
            ) : null }
            <Route path='/login' element={<Auth />}></Route>
            <Route path='/register' element={<Auth />}></Route>
            <Route path='/' element={<Shop />}></Route>
            <Route path='/device' element={<DevicePage />}></Route>

        </Routes>
    );
};

export default AppRouter;