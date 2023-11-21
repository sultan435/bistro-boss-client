import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import salads from "../../../assets/home/slide1.jpg"
import pizza from "../../../assets/home/slide2.jpg"
import desert from "../../../assets/home/slide3.jpg"

import 'aos/dist/aos.css'; 
import { useEffect } from "react";
import Aos from "aos";

const RecipesCart = () => {
    useEffect(()=>{
        Aos.init({
            duration: 3000,
        });
    },[])
    return (
        <section>
            <SectionTitle  subheading="Should Try" heading="CHEF RECOMMENDS"></SectionTitle>
            <div className="grid md:grid-cols-3 gap-6 mb-32">
                <div data-aos="fade-in" className="bg-[#F3F3F3]">
                    <img className="w-full h-[300px]" src={salads} alt="" />
                    <div data-aos="fade-left" className="py-8 px-10 flex flex-col justify-center text-center">
                        <h3 className="text-2xl font-semibold text-[#151515]">Caeser Salad</h3>
                        <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets</p>
                        <button className="btn btn-outline mt-12 border-0  border-b-4 border-[#BB8506] text-[#BB8506] font-medium">Add to Cart</button>
                    </div>
                </div>
                <div data-aos="fade-right" className="bg-[#F3F3F3]">
                    <img className="w-full h-[300px]" src={pizza} alt="" />
                    <div className="py-8 px-10 flex flex-col justify-center text-center">
                        <h3 className="text-2xl font-semibold text-[#151515]">Pizzas</h3>
                        <p data-aos="fade-right">Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets</p>
                        <button className="btn btn-outline mt-12 border-0  border-b-4 border-[#BB8506] text-[#BB8506] font-medium">Add to Cart</button>
                    </div>
                </div>
                <div className="bg-[#F3F3F3]">
                    <img className="w-full h-[300px]" src={desert} alt="" />
                    <div className="py-8 px-10 flex flex-col justify-center text-center">
                        <h3 className="text-2xl font-semibold text-[#151515]">Soups</h3>
                        <p data-aos="fade-down">Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets</p>
                        <button className="btn btn-outline mt-12 border-0  border-b-4 border-[#BB8506] text-[#BB8506] font-medium">Add to Cart</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RecipesCart;