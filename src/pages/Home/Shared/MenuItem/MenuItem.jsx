const MenuItem = ({ item }) => {
    const { name, image, price, recipe } = item
    return (
        <div className="flex space-x-2">
            <img style={{borderRadius: "0 200px 200px 200px"}} className="w-[100px]" src={image} alt="" />
            <div>
                <h1 className="text-3xl text-[#151515]">{name} ------------------</h1>
                <p>{recipe}</p>
            </div>
            <p className="text-xl text-[#BB8506]">${price}</p>
        </div>
    );
};

export default MenuItem;