import { Helmet } from 'react-helmet-async';
import menuImg from '../../../assets/menu/banner3.jpg'
import dessertImg from '../../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../../assets/menu/pizza-bg.jpg'
import saladsImg from '../../../assets/menu/salad-bg.jpg'
import soupImg from '../../../assets/menu/soup-bg.jpg'
import useMenu from '../../../hooks/useMenu';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import MenuCategory from '../MenuCategory/MenuCategory';
import Cover from '../../Home/Shared/Cover/Cover';

const Menu = () => {
    const [menu] = useMenu()

    const dessert = menu.filter(item => item.category === "dessert")
    const pizza = menu.filter(item => item.category === "pizza")
    const salad = menu.filter(item => item.category === "salad")
    const soup = menu.filter(item => item.category === "soup")
    const offered = menu.filter(item => item.category === "offered")
    return (
        <div>
            <Helmet>
                <title>Bistro | Menu</title>
                <link rel="canonical" href="https://www.tacobell.com/" />
            </Helmet>
            <Cover img={menuImg} title="Our Menu"></Cover>
           {/* main cover */}
            <SectionTitle subheading="Don't miss" heading="TODAY'S OFFER"></SectionTitle>
            {/* offered menu items */}
            <MenuCategory items={offered} coverImg={menuImg}></MenuCategory>
            {/* dessert menu items */}
            <MenuCategory items={dessert}title={"dessert"} coverImg={dessertImg}></MenuCategory>
            {/* pizza menu items */}
            <MenuCategory items={pizza} title={"pizza"} coverImg={pizzaImg} ></MenuCategory>
            {/* salad menu items */}
            <MenuCategory items={salad} title={"salad"} coverImg={saladsImg}
            ></MenuCategory>
            {/* soup menu items */}
            <MenuCategory items={soup} title={"soup"} coverImg={soupImg}></MenuCategory>
           
        </div>
    );
};

export default Menu;