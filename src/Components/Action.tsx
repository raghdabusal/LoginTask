import { useState } from "react";
import { Link } from "react-router-dom";
import { EyeComponent } from "./assets/EyeComponent";
import { EditComponent } from "./assets/EditComponenet";
import { ManageComponent } from "./assets/manageRoles";

function Action() {
  const [isHoveredEye, setIsHoveredEye] = useState(false);
  const [isHoveredEdit, setIsHoveredEdit] = useState(false);
  const [isHoveredSetting, setIsHoveredSetting] = useState(false);
  const [toggled, setToggled] = useState(false);

  return (
    <div className="flex items-center gap-3">
      <Link
        to="/dashboard/user-details"
        className="relative group inline-block"
        onMouseEnter={() => setIsHoveredEye(true)}
        onMouseLeave={() => setIsHoveredEye(false)}
      >
        <div
          className={`rounded-md ${
            isHoveredEye ? "bg-[#F2F3F5]" : "bg-transparent"
          }`}
        >
          <EyeComponent color={isHoveredEye ? "#3B82F6" : "#232B61"} />
        </div>

        <div
          className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs px-[8px] py-[4px] 
          opacity-0 group-hover:opacity-100 duration-200 pointer-events-none whitespace-nowrap 
          bg-[#FFF] border border-[#DFE1E5] rounded-[4px] text-[#0B1935]"
        >
          View Details
        </div>
      </Link>

      <Link
        to="/dashboard/edit-user-details"
        className="relative group inline-block"
        onMouseEnter={() => setIsHoveredEdit(true)}
        onMouseLeave={() => setIsHoveredEdit(false)}
      >
        <div
          className={`rounded-md ${
            isHoveredEdit ? "bg-[#F2F3F5]" : "bg-transparent"
          }`}
        >
          <EditComponent color={isHoveredEdit ? "#3B82F6" : "#232B61"} />
        </div>

        <div
          className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs px-[8px] py-[4px] 
          opacity-0 group-hover:opacity-100 duration-200 pointer-events-none whitespace-nowrap 
          bg-[#FFF] border border-[#DFE1E5] rounded-[4px] text-[#0B1935]"
        >
          Edit User
        </div>
      </Link>

      <div
        className="relative group inline-block"
        onMouseEnter={() => setIsHoveredSetting(true)}
        onMouseLeave={() => setIsHoveredSetting(false)}
      >
        <div
          className={`rounded-md ${
            isHoveredSetting ? "bg-[#F2F3F5]" : "bg-transparent"
          }`}
        >
          <ManageComponent color={isHoveredSetting ? "#3B82F6" : "#232B61"} />
        </div>

        <div
          className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs px-[8px] py-[4px] 
          opacity-0 group-hover:opacity-100 duration-200 pointer-events-none whitespace-nowrap 
          bg-[#FFF] border border-[#DFE1E5] rounded-[4px] text-[#0B1935]"
        >
          Setting
        </div>
      </div>

      <label className="relative w-[26px] h-[16px]">
        <input
          type="checkbox"
          className="opacity-0 peer"
          checked={toggled}
          onChange={() => setToggled(!toggled)}
        />

        <span className="absolute inset-0 bg-gray-300 rounded-full peer-checked:bg-[#3B82F6]" />
        <span className="absolute left-[2px] top-[2px] w-[12px] h-[12px] bg-white rounded-full transition transform peer-checked:translate-x-[10px]" />
      </label>
    </div>
  );
}

export default Action;
