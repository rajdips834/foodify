import { AssetUploader, Loader } from "../..";
import { BiCategory, BiFoodMenu } from "react-icons/bi";
import {
  MdDeleteOutline,
  MdOutlineDataSaverOn,
  MdOutlineFastfood,
  MdOutlineFoodBank,
  MdOutlineProductionQuantityLimits,
} from "react-icons/md";
import {
  firebaseFetchFoodItems,
  firebaseRemoveUploadedImage,
  firebaseSaveProduct,
} from "../../../Firebase";

import { Categories } from "../../../utils/categories";
import CategoriesSelector from "./CategoriesSelector";
import { GiTakeMyMoney } from "react-icons/gi";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import { useState } from "react";
import { useStateValue } from "../../../context/StateProvider";
import { fetchFoodData } from "../../../utils/functions";

const AddFood = () => {
  const [title, setTitle] = useState("");
  const [calories, setCalories] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(null);
  const [category, setCategory] = useState("");
  const [loading, setLoading] = useState(false);
  const [quantity, setQuantity] = useState("");
  const [description, setDescription] = useState("");
  const [loaderMessage, setLoadermessage] = useState("");
  const [{ foodItems }, dispatch] = useStateValue();

  const deleteImage = () => {
    setLoadermessage("Removing Photo......");
    firebaseRemoveUploadedImage(image, setImage, setLoading);
  };
  const saveItem = () => {
    setLoadermessage(`Saving Product ${title}.`);
    setLoading(true);
    try {
      if (!title || !calories || !price || !image || !category) {
        toast.error("Please fill all fields before saving product 🤗");
        setLoading(false);
        return;
      } else {
        const data = {
          id: Date.now(),
          title: title,
          calories: calories,
          category: category,
          description: description,
          price: price,
          imageURL: image,
          qty: quantity,
        };
        toast
          .promise(firebaseSaveProduct(data), {
            pending: "Saving Product...",
            success: "Product saved successfully",
            error: "Error saving product, Please try again🤗",
          })
          .then(() => {
            clearForm();
            setLoading(false);
            fetchFoodData(dispatch);
          })
          .catch((error) => {
            console.log(error);
          });
        setLoadermessage("");
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      toast.error("Error whilesaving product");
    }
  };
  const clearForm = () => {
    setTitle("");
    setCalories("");
    setPrice("");
    setImage(null);
    // setCategory("");
    setQuantity("");
    setDescription("");
  };

  const validateNumber = (value: any) => {
    if (isNaN(value)) {
      toast.error("Please enter a valid number", { toastId: 123 });
      return "";
    }
    return value;
  };

  return (
    <div className="items-center justify-center w-full h-fullflex">
      <div className="flex flex-col items-center justify-center w-full gap-4 p-4 border border-gray-300 rounded-lg ">
        <div className="flex w-full gap-2 py-3 border-b border-gray-300 -tems-center">
          <MdOutlineFastfood className="text-xl text-gray-600" />
          <input
            type="text"
            required
            placeholder="Enter food name"
            autoFocus
            className="w-full h-full pl-2 bg-transparent border-none outline-none text-textColor placeholder:text-gray-400"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="flex flex-col items-center w-full gap-3 md:flex-row">
          <div className="flex items-center w-full gap-2 py-2 border-b border-gray-300">
            <BiCategory className="text-xl text-gray-600" />
            <CategoriesSelector
              categories={Categories}
              action={setCategory}
              selected={category}
            />
          </div>
          <div className="flex items-center w-full gap-2 py-2 border-b border-gray-300">
            <MdOutlineProductionQuantityLimits className="text-2xl text-gray-600" />
            <input
              type="text"
              required
              placeholder="Quantity"
              autoFocus
              className="w-full h-full pl-2 bg-transparent border-none outline-none text-textColor placeholder:text-gray-400"
              value={quantity}
              onChange={(e) => setQuantity(validateNumber(e.target.value))}
            />
          </div>
        </div>
        <div className="group flex justify-center items-center flex-col border-2 border-dotted border-gray-300 w-full h-[225px]  md:h-[420px] round-lg">
          {loading ? (
            <Loader progress={loaderMessage} />
          ) : (
            <>
              {image ? (
                <>
                  <div className="relative h-full">
                    <img
                      src={image}
                      alt="uploaded food"
                      className="object-cover w-full h-full"
                    />
                    <motion.button
                      whileTap={{ scale: 1.1 }}
                      whileHover={{ scale: 1.2 }}
                      title="Remove Photo"
                      className="absolute p-2 text-xl transition-all duration-500 ease-in-out bg-purple-500 rounded-full outline-none cursor-pointer bottom-3 right-3 md:p-5 hover:shadow-md"
                      onClick={() => deleteImage()}
                    >
                      <MdDeleteOutline className="text-white" />
                    </motion.button>
                  </div>
                </>
              ) : (
                <AssetUploader
                  action={setImage}
                  progressHandler={setLoadermessage}
                  promise={setLoading}
                />
              )}
            </>
          )}
        </div>
        <div className="flex flex-col items-center w-full gap-3 md:flex-row">
          <div className="flex items-center w-full gap-2 py-2 border-b border-gray-300">
            <MdOutlineFoodBank className="text-2xl text-gray-600" />
            <input
              type="text"
              required
              placeholder="Calories"
              autoFocus
              className="w-full h-full pl-2 bg-transparent border-none outline-none text-textColor placeholder:text-gray-400"
              value={calories}
              onChange={(e) => setCalories(e.target.value)}
            />
          </div>
          <div className="flex items-center w-full gap-2 py-2 border-b border-gray-300">
            <GiTakeMyMoney className="text-2xl text-gray-600" />
            <input
              type="text"
              required
              placeholder="Price"
              autoFocus
              className="w-full h-full pl-2 bg-transparent border-none outline-none text-textColor placeholder:text-gray-400"
              value={price}
              onChange={(e) => setPrice(validateNumber(e.target.value))}
            />
          </div>
        </div>
        <div className="flex w-full gap-2 py-3 border-b border-gray-300 -tems-center">
          <BiFoodMenu className="text-xl text-gray-600" />
          <input
            type="text"
            required
            placeholder="Short Description"
            autoFocus
            className="w-full h-full pl-2 bg-transparent border-none outline-none text-textColor placeholder:text-gray-400"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div className="flex items-center justify-center w-full">
          <motion.button
            whileHover={{ scale: 1.1 }}
            className="flex flex-row-reverse items-center justify-center w-full gap-2 px-12 py-2 ml-0 text-lg text-white bg-purple-500 border-none rounded outline-none md:ml-auto md:w-auto"
            onClick={() => saveItem()}
          >
            <MdOutlineDataSaverOn /> Save
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default AddFood;
