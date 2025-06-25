import { useState } from "react";
import { Link } from "react-router-dom";

function Action() {
  const [toggled, setToggled] = useState(false);

  return (
    <div className="flex items-center gap-3">
      <Link to="/user-details">
        <img
          src="/src/assets/images/view.svg"
          className="w-5 h-5 cursor-pointer"
        />
      </Link>

      <img
        src="/src/assets/images/edit.svg"
        className="w-5 h-5 cursor-pointer"
      />
      <img
        src="/src/assets/images/setting.svg"
        alt="Settings"
        className="w-5 h-5 cursor-pointer"
      />

      <label className="relative w-[26px] h-[16px]">
        <input
          type="checkbox"
          className="opacity-0 peer"
          checked={toggled}
          onChange={() => setToggled(!toggled)}
        />

        <span className="absolute inset-0 bg-gray-300 rounded-full  peer-checked:bg-[#3B82F6]"></span>
        <span className="absolute left-[2px] top-[2px] w-[12px] h-[12px] bg-white rounded-full transition transform peer-checked:translate-x-[10px]"></span>
      </label>
    </div>
  );
}

export default Action;
