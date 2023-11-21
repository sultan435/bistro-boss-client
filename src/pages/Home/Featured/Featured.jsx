import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImage from "../../../assets/home/featured.jpg";
import './Featured.css';

const Featured = () => {
    return (
        <div className="featured-item bg-black opacity-70 bg-fixed text-white ">
         
                <div className="inset-1">
                    <SectionTitle subheading="Check it out" heading="FROM OUR MENU"></SectionTitle>
                    <div className="md:flex justify-center items-center pb-20 px-36">
                        <div>
                            <img className="" src={featuredImage} alt="" />
                        </div>
                        <div className="md:ml-10">
                            <p><span>March 20, 2023</span></p>
                            <h3 className="uppercase text-3xl">WHERE CAN I GET SOME?</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                            <button className=" btn btn-outline mt-12 border-0  border-b-4 border-white text-white font-semibold text-xl">Order now</button>
                        </div>
                    </div>
                </div>
           
        </div>
    );
};

export default Featured;