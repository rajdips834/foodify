import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useStateValue } from "../../../context/StateProvider";
import User from "./user";

const Users = () => {
  const [{ users }, dispatch] = useStateValue();
  const [query, setQuery] = useState("");
  const [filteredUsers, setFilteredUsers] = useState(users);

  const filterUsers = () => {
    if (query.length === 0) {
      setFilteredUsers(users);
    } else {
      const filter = users.filter((item: any) =>
        item.displayName.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredUsers(filter);
    }
  };
  const searchUsers = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    filterUsers();
  };
  return (
    <div className="flex flex-col justify-center w-full">
      {/* search bar */}
      <div className="flex justify-center w-full p-2 mb-4 bg-white rounded-lg">
        <input
          className="w-full p-2 rounded-lg outline-none "
          type="text"
          placeholder="Search user"
          value={query}
          onChange={(e) => searchUsers(e)}
        />
        {/* search button */}
        <button className="flex items-center justify-center gap-3 px-4 py-2 font-bold text-purple-700 rounded-lg">
          <FaSearch />
        </button>
      </div>

      {/* dasboard statistics and counts */}
      <div className="grid w-full grid-cols-3 gap-1">
        {filteredUsers.map((user: any) => (
          <User key={user.uid} item={user} />
        ))}
      </div>
    </div>
  );
};

export default Users;
