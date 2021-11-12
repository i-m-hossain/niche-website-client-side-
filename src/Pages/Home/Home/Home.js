import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import Banner from '../Banner/Banner';
import Review from '../Review/Review';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Header></Header>
            {/* <Banner></Banner> */}
            <Services></Services>
            <Review></Review>
            <Footer></Footer>
        </div>
    );
};

export default Home;