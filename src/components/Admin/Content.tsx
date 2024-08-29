import { Link } from "react-router-dom";
import { useStateValue } from "../../context/StateProvider";
import { ToggleAdminMode } from "../../utils/functions";

const Content = ({
  pageTitle,
  Element,
}: {
  pageTitle: string;
  Element: JSX.Element;
}) => {
  const [{}, dispatch] = useStateValue();
  return (
    <div className="flex flex-col w-[80%] h-screen px-2">
      <div className="flex justify-between w-full px-6 pt-6 pb-2 text-xl font-bold text-gray-600 border-b-2 border-purple-200">
        {pageTitle}
        {/* home button */}
        <Link to="/" onClick={() => ToggleAdminMode(dispatch, false)}>
          <button className="flex items-center justify-center gap-3 px-4 py-2 font-bold text-purple-700 rounded-lg "></button>
        </Link>
      </div>
      <div className="flex-1 mx-6 my-2 overflow-y-scroll border-8 border-gray-200 border-dotted rounded-xl scrollbar-hidden">
        {Element}
      </div>
    </div>
  );
};
export default Content;
