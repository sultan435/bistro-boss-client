import img from '../../../assets/home/chef-service.jpg'
const CategoryBanner = () => {
    return (
        <div className="mt-24 p-28" style={{backgroundImage: `url(${img})`}}>
            <div className="text-center bg-white py-24 px-40">
                <h1 className="text-4xl text-[#151515] uppercase">bistro boss</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia totam perferendis aut suscipit asperiores earum quisquam laborum consequuntur illo, facere vero aliquam debitis, excepturi adipisci illum eos sed nulla animi. Perferendis maiores rerum voluptates .</p>
            </div>
        </div>
    );
};

export default CategoryBanner;