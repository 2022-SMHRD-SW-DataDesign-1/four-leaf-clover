import React from 'react'
import Header from '../../component/Header';
import Footer from '../../component/Footer';
import Locker from './Locker';
import Search from './Search';
import Tab from './Tab';

const SynopsysSelectPage = () => {

    return (
        <div>
            <Header />
            <Locker />
            <Search />
            <Tab />
            <Footer />
    </div>
    )
}

export default SynopsysSelectPage