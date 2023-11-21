import { Parallax } from 'react-parallax';
import 'aos/dist/aos.css'; 
import { useEffect } from "react";
import Aos from "aos";

const Cover = ({img, title}) => {
    useEffect(()=>{
        Aos.init({
            duration: 3000,
        });
    },[])
    return (
        <Parallax
        blur={{ min: -50, max: 50 }}
        bgImage={img}
        bgImageAlt="the dog"
        strength={300}
    >
        <div className="hero h-[700px]" >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 data-aos="fade-right" className="mb-5 text-5xl font-bold uppercase">{title}</h1>
                    <p data-aos="fade-left" className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
            </div>
        </div>
    </Parallax>
        
    );
};

export default Cover;