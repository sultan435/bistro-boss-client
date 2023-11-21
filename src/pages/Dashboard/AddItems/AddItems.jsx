import { useForm } from "react-hook-form";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxios from "../../../hooks/useAxios";
import Swal from "sweetalert2";




const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddItems = () => {
    const { register, handleSubmit,reset } = useForm();
    const axiosPublicHook = useAxiosPublic()
    const axios = useAxios()
    const onSubmit = async (data) => {
        console.log(data)
        //image upload to imgbb and then get an url
        const imageFile = { image: data.image[0] }
        const res = await axiosPublicHook.post(image_hosting_api, imageFile, {
            headers: {
                "content-type": "multipart/form-data",
            }
        })
        if (res.data.success) {
            const menuItem = {
                name: data.name,
                category: data.category,
                price: parseFloat(data.price),
                recipe: data.recipe,
                image: res.data.data.display_url
            }

            const menuRes = await axios.post('/menus', menuItem)
            console.log(menuRes.data);
            if (menuRes.data.insertedId) {
                //show success popup
                reset()
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${data.name} is added to the menu item`,
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        }



        console.log('with image', res.data);

    };
    return (
        <div >
            <SectionTitle heading="Add an item" subheading="What's New?">
            </SectionTitle>
            <div className="bg-[#F3F3F3] p-12 rounded-xl">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Recipe name*</span>
                        </label>
                        <input type="text" {...register("name", { required: true })} placeholder="Recipe Name" name="name" className="input input-bordered w-full mb-4" />
                    </div>
                    <div className="flex gap-6 mb-4">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Category*</span>
                            </label>

                            <select defaultValue="default" {...register("category", { required: true })} className="select select-bordered w-full">
                                <option disabled value="default">Select a category</option>
                                <option value="salad">Salad</option>
                                <option value="pizza">Pizza</option>
                                <option value="soup">Soup</option>
                                <option value="dessert">Dessert </option>
                                <option value="drinks">Drinks</option>
                            </select>
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Price*</span>
                            </label>
                            <input type="text" {...register("price", { required: true })} placeholder="Price" name="price" className="input input-bordered w-full" />
                        </div>
                    </div>
                    <div className="mb-4">
                        <label className="label">
                            <span className="label-text">Recipe Details*</span>
                        </label>
                        <textarea {...register("recipe", { required: true })} className="textarea textarea-bordered h-32 w-full" placeholder="Recipe Details"></textarea>
                    </div>
                    <div className="form-control">
                        <input {...register("image", { required: true })} type="file" className="file-input w-full max-w-xs mb-4" />
                    </div>

                    <button className="btn">
                        Add Item
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddItems;