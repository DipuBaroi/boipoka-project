import React from 'react';
import Nabbar from '../../components/Header/Nabbar';
import { Outlet } from 'react-router';
import Footer from '../../components/Footer/Footer';

const Root = () => {
    return (
        <div className='max-w-6xl mx-auto'>
            <Nabbar></Nabbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;