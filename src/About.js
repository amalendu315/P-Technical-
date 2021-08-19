import React from 'react';
// import { NavLink } from 'react-router-dom';
import home_img from '../src/images/hero-bg.jpg'
import Common from './Common';
import "../src/React Menu/index.css"

export default function About() {
    return (
        <>
           <Common name="Welcome to About page" imgsrc={home_img} visit="/contact" btname="Contact Now" />
        </>
    )
}

