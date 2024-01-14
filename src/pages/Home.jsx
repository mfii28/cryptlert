import React from 'react'
import Header from '../Components/Header';
import Banner from '../Components/Banner';
import "../home.css"
import Promo from '../Components/Promo';
import Stats from '../Components/Stats';
import Market from '../Components/Market';
import Cta from '../Components/Cta';
import Instruction from '../Components/Instruction';
import Application from '../Components/Application';
import Footer from '../Components/Footer';
const Home = () => {
  return (
    <div>
        <Header/>
        <main>
            <article>
            <Banner/>
            <Promo />
            <Stats/>
            <Market/>
            <Cta/>
            <Instruction/>
            <Application/>
            </article>
        </main>
        <Footer/>
    </div>
  )
}

export default Home