import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import slider1 from '../../../assets/home/slide1.jpg'
import slider2 from '../../../assets/home/slide2.jpg'
import slider3 from '../../../assets/home/slide3.jpg'
import slider4 from '../../../assets/home/slide4.jpg'
import slider5 from '../../../assets/home/slide5.jpg'
import SectionTitle from '../../../components/SectionTitle/SectionTitle';



const Category = () => {
    return (
        <section className="">
            <SectionTitle
                subheading={"From 11:00am to 10:00pm"}
                heading={"ORDER ONLINE"}
            ></SectionTitle>
            <Swiper
                slidesPerView={4}
                spaceBetween={6}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    
                        <img src={slider1} alt="" />
                        <h2 className='text-white text-3xl uppercase -mt-24 text-center'>salads</h2>
                    
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slider2} alt="" />
                    <h2 className='text-white text-3xl uppercase shadow-lg -mt-24 text-center'>pizzas</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slider3} alt="" />
                    <h2 className='text-white text-3xl uppercase shadow-lg -mt-24 text-center'>soups</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slider4} alt="" />
                    <h2 className='text-white text-3xl uppercase shadow-lg -mt-24 text-center'>desserts</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slider5} alt="" />
                    <h2 className='text-white text-3xl uppercase shadow-lg -mt-24 text-center'>salads</h2>
                </SwiperSlide>
            </Swiper>

        </section>
    );
};

export default Category;