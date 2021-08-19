import React from 'react';
import home_img from '../src/images/home_img.svg'
import Common from './Common';

export default function Home() {
    return (
        <>
           <Common name="Grow your business with" imgsrc={home_img} visit="/services" btname="Get Started" />
        </>
    )
}