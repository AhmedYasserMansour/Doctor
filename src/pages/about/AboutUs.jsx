import React from 'react';
import AboutComponents from '../../components/aboutcomponents/aboutcomponents';
import Banner from '../../components/banner/Banner';

const AboutUs = _ => {
  return ( 
    <>
    <Banner parent={'Home'} child={'About Us'} />
    <AboutComponents/>
    </>
   );
}
 
export default AboutUs;