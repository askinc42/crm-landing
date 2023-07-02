import React from 'react';
import '../../styles/index.scss'
import Header from "../../components/header/Header"
import Footer from "../../components/footer/Footer"
import Cover from '../../components/cover/Cover';
import Subcover from '../../components/subcover/Subcover';
import Analytics from '../../components/analytics/Analytics';
import Fourth from '../../components/fourth/Fourth';

const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <Cover />
            <Subcover />
            <Analytics />
            <Fourth />
            {children}
            <Footer />
        </>
    );
};

export default Layout;