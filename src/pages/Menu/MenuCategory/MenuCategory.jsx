import { Link } from "react-router-dom";
import Cover from "../../Home/Shared/Cover/Cover";
import MenuItem from "../../Home/Shared/MenuItem/MenuItem";


const MenuCategory = ({ items,title,coverImg }) => {
    return (
        <div className="pt-16">
            {title &&  <Cover img={coverImg} title={title}></Cover>}
            <div className="grid md:grid-cols-2 gap-10 my-10">
                {
                    items.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            <div className="flex justify-center">
           <Link to={`/order/${title}`}>
           <button className="btn btn-outline mt-12 border-0   border-b-4 border-[#BB8506] text-[#BB8506] font-medium">Order Food</button>
           </Link>
            </div>
        </div>
    );
};

export default MenuCategory;