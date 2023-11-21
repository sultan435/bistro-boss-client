import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import CategoryBanner from "../CategoryBanner/CategoryBanner";
import Featured from "../Featured/Featured";
import PopularMenu from "../PopularMenu/PopularMenu";
import RecipesCart from "../RecipesCart/RecipesCart";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro | Home</title>
                <link rel="canonical" href="https://www.tacobell.com/" />
            </Helmet>
            <Banner></Banner>
            <Category></Category>
            <CategoryBanner></CategoryBanner>
            <PopularMenu></PopularMenu>
            <RecipesCart></RecipesCart>
            <Featured></Featured>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;