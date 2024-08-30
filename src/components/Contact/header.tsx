import { MdOutlineKeyboardBackspace, MdOutlineMessage } from "react-icons/md";

import { hideContactform } from "../../utils/functions";
import { motion } from "framer-motion";
import { useStateValue } from "../../context/StateProvider";

const ContactHeader = () => {
  const [{ user }, dispatch] = useStateValue();
  return (
    <div className="flex flex-row-reverse items-center justify-between w-full px-4 py-2 bg-white cursor-pointer">
      <motion.div
        whileTap={{ scale: 0.8 }}
        onClick={() => hideContactform(dispatch)}
      >
        <MdOutlineKeyboardBackspace className="text-2xl text-textColor " />
      </motion.div>

      <motion.div
        whileTap={{ scale: 0.9 }}
        whileHover={{ scale: 0.9 }}
        className="flex items-center justify-center px-2 gap-x-2"
      >
        <MdOutlineMessage className="text-xl text-purple-600 cursor-pointer" />
        <span>CONTACT US</span>
      </motion.div>
    </div>
  );
};

export default ContactHeader;
