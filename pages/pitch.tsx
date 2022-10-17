import 'react-slideshow-image/dist/styles.css';
import { Zoom } from "react-slideshow-image";
import Image from 'next/image'


const images = ['/slides/s1.png','/slides/s2.png','/slides/s3.png','/slides/s4.png','/slides/s5.png','/slides/s6.png','/slides/s7.png','/slides/s8.png','/slides/s9.png','/slides/s10.png','/slides/s11.png','/slides/s12.png'];

  const zoomOutProperties = {
    duration: 20000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    scale: 0.4,
    arrows: true
  };

import HeaderSecondaryContainer from "../containers/Marketplace/components/HeaderSecondaryContainer";
import Footer from "../containers/Marketplace/components/Footer";

const pitch = () => {


    return (
        <div className="flex flex-1 flex-col min-h-screen text-gray-500  bg-fmug">
            <HeaderSecondaryContainer termsUrl="./pitch.png" />
            <div className="bg-brt-green p-5 flex justify-center">
                <div className="slide-container w-4/5">
                    <Zoom {...zoomOutProperties}>
                        {images.map((each, index) => (
                        <Image key={index} width={1400}
                        height={870}
                        layout="responsive" src={each} />
                        ))}
                    </Zoom>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default pitch;
