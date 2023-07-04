import React from 'react';
import '../../styles/index.scss'
import Header from "../../components/header/Header"
import Footer from "../../components/footer/Footer"
import Cover from '../../components/cover/Cover';
import Subcover from '../../components/subcover/Subcover';
import Analytics from '../../components/analytics/Analytics';
import Slider from '../../components/slider/Slider';
import Amount from '../../components/amount/Amount';

const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <Cover />
            <Subcover />
            <Analytics />
            <Slider />
            <Amount />
            {children}
            <Footer />
        </>
    );
};

export default Layout;