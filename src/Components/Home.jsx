import React from 'react'
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Buy from "../Buy/Buy";
import Sell from "../Sell/Sell";
import { BVid } from "../BVid/BVid";


function Home() {
  return (
    <>
      <div >
        <Header />
        <BVid/>
        <Sell />
        <Buy />
        <Footer />
      </div>
    </>
  );
}

export default Home;