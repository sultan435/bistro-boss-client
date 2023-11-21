// import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../Shared/MenuItem/MenuItem";
import useMenu from "../../../hooks/useMenu";


const PopularMenu = () => {
    const [menu] = useMenu()

    const popular = menu.filter(item => item.category === "popular")
    // const [menu, setMenu] = useState([])

    // useEffect(()=>{
    //     fetch('menu.json')
    //     .then(res=> res.json())
    //     .then(data =>{
    //         const popularItems = data.filter(item => item.category === "popular")
    //         setMenu(popularItems)
    //     })
    // },[])
    return (
        <section className="">
            <SectionTitle
            subheading={"Check it out"}
            heading={"FROM OUR MENU"}
            ></SectionTitle>
            <div className="grid md:grid-cols-2 gap-10">
                {
                    popular.map(item =><MenuItem
                    key={item._id}
                    item={item}
                    ></MenuItem>)
                }
            </div>
            <div className="flex justify-center">
            <button className="btn btn-outline mt-12 border-0  border-b-4 border-black">view full menu</button>
            </div>
            <div>
                <p className="text-white text-5xl font-semibold bg-black py-24 text-center mt-32">Call Us: +88 01833225351</p>
            </div>
        </section>
    );
};

export default PopularMenu;