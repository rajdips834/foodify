import { MdDeleteForever, MdEmail } from "react-icons/md";
import { GiShieldDisabled } from "react-icons/gi";
import { Avatar } from "../../Assets";
import { FcGoogle } from "react-icons/fc";
import { motion } from "framer-motion";
import { firebaseDeleteUser } from "../../../Firebase";
const User = ({ item }: { item: any }) => {
  const handleDeleteUser = () => {
    firebaseDeleteUser(item?.uid);
  };
  return (
    <div className="h-auto max-w-sm bg-purple-600 border rounded-lg border-purple-50">
      <div className="flex flex-col items-center gap-1 pb-10">
        <motion.img
          whileHover={{ scale: 1.1 }}
          className="object-contain w-24 h-24 mb-3 rounded-full shadow-lg cursor-pointer"
          src={item?.photoURL || Avatar}
          alt="avatar"
        />
        <div className="flex flex-col items-center justify-center">
          <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
            {item?.displayName || "User"}
          </h5>
          <span className="text-sm text-gray-300 ">{item?.email}</span>
          <span className="text-sm text-gray-300 ">{item?.phoneNumber}</span>
        </div>

        <div className="flex mt-4 space-x-3 lg:mt-6">
          <p
            className="inline-flex items-center px-4 py-2 text-xl font-medium text-center text-white bg-purple-600 rounded-lg shadow-lg cursor-pointer hover:bg-purple-700"
            title="Delete"
            onClick={handleDeleteUser}
          >
            <MdDeleteForever />
          </p>
        </div>
      </div>
    </div>
  );
};

export default User;
