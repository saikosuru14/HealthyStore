import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import MainContainer from './MainContainer'
import { useEffect } from 'react';

export default function Home() {

    //To prevent user going back
    useEffect(() => {
        window.history.pushState(null, document.title, window.location.href);
        window.addEventListener('popstate', function (event){
        window.history.pushState(null, document.title, window.location.href);
        });
        }, []);

    return (
        <div>
            <Navbar />
            <MainContainer/>
            <Footer />
        </div>
    )
}
