import React from 'react'
import { BVid } from '../Components/BVid'
import Footer from '../Components/Footer'
import Buy from "../Components/Buy";
import Sell from "../Components/Sell";
import {Outlet} from "react-router-dom"

function Home() {
  return (
    <>
      <div >
        <BVid/>
        <Sell />
        <Buy />
        <Footer />
      </div>
      <Outlet/>
    </>
  );
}

export default Home;