import { BiUser } from "react-icons/bi";
import { BsPhone } from "react-icons/bs";
import { MdOutlineDataSaverOn, MdDeleteOutline } from "react-icons/md";

import { motion } from "framer-motion";
import { toast } from "react-toastify";
import { useState } from "react";
import { useStateValue } from "../../context/StateProvider";
import { AssetUploader, Loader } from "../../components";
import { updateUserData } from "../../utils/functions";
import { firebaseRemoveUploadedImage } from "../../Firebase";

const UpdateProfile = () => {
  const [{ user }, dispatch] = useStateValue();
  const [displayName, setDisplayName] = useState(user.displayName);
  // const [email, setEmail] = useState(user.email)
  const [photoURL, setPhotoURL] = useState(user.photoURL);
  const [loading, setLoading] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState(user.phoneNumber);
  const [btnText, setBtnText] = useState("Save");
  const [loaderMessage, setLoadermessage] = useState("");

  const deleteImage = async () => {
    setLoadermessage("Removing Photo......");
    firebaseRemoveUploadedImage(photoURL, setPhotoURL, setLoading);
    const data = { ...user, photoURL: null };
    await updateUserData(data, dispatch, false);
  };
  const saveChanges = async () => {
    setBtnText("Saving....");
    if (displayName.lenth < 0 || phoneNumber.length !== 10) {
      toast.error("Fill out fields correctly");
      setBtnText("Save");
    } else {
      const data = {
        ...user,
        displayName,
        phoneNumber,
        photoURL,
      };
      await updateUserData(data, dispatch, true);
      setBtnText("Save");
    }
  };

  const updatePhotoUrl = async (newUrl: string) => {
    setPhotoURL(newUrl);
    const data = { ...user, photoURL: newUrl };
    await updateUserData(data, dispatch, false);
  };

  const validateNumber = (value: any) => {
    if (isNaN(value)) {
      toast.error("Please enter a valid phone number", { toastId: 123 });
      return "";
    }
    return value;
  };

  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="border w-full  md:w-[60%]  flex border-gray-300 items-center rounded-lg p-4 flex-col justify-center gap-4  mt-8 mg:mt-10">
        <div className="flex w-full gap-2 py-3 border-b border-gray-300 -tems-center">
          <BiUser className="text-xl text-gray-600" />
          <input
            type="text"
            required
            placeholder="Enter full name"
            autoFocus
            className="w-full h-full pl-2 bg-transparent border-none outline-none text-textColor placeholder:text-gray-400"
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
          />
        </div>

        <div className="flex flex-col items-center w-full gap-3 md:flex-row">
          <div className="flex items-center w-full gap-2 py-2 border-b border-gray-300">
            <BsPhone className="text-2xl text-gray-600" />
            <input
              type="text"
              required
              placeholder="Phone"
              className="w-full h-full pl-2 bg-transparent border-none outline-none text-textColor placeholder:text-gray-400"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(validateNumber(e.target.value))}
            />
          </div>
        </div>
        <div className="group flex justify-center items-center flex-col border-2 border-dotted border-gray-300 w-full h-[225px]  md:h-[420px] round-lg">
          {loading ? (
            <Loader progress={loaderMessage} />
          ) : (
            <>
              {photoURL ? (
                <>
                  <div className="relative h-full">
                    <img
                      src={photoURL}
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
                  action={updatePhotoUrl}
                  progressHandler={setLoadermessage}
                  promise={setLoading}
                />
              )}
            </>
          )}
        </div>

        <div className="flex items-center justify-center w-full">
          <motion.button
            whileHover={{ scale: 1.1 }}
            className="flex flex-row-reverse items-center justify-center w-full gap-2 px-12 py-2 ml-0 text-lg text-white bg-purple-500 border-none rounded outline-none md:ml-auto md:w-auto"
            onClick={() => saveChanges()}
          >
            <MdOutlineDataSaverOn /> {btnText}
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;
