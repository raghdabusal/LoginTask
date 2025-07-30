import { Link } from "react-router-dom";
import Details from "../../Components/UserDetails/UserDetails";

function UserDetails() {
  return (
    <div className="h-screen bg-[#F2F3F5] p-2 flex flex-col">
      {/* Main container takes full screen height */}
      <div className="flex flex-col flex-1 bg-white rounded-lg p-6 shadow-sm border border-[#DFE1E5] overflow-hidden">
        <h1 className="text-[20px] leading-[32px] font-semibold tracking-[-0.5px] text-[#0B1935] font-[Inter] border-b border-[#DFE1E5] pb-2 mb-4">
          Users Management
        </h1>

        {/* Scrollable content area */}

        <div className="flex-1 overflow-y-auto border rounded-lg border-[#DFE1E5] py-[16px] px-[24px]">
          <Link
            to="/dashboard"
            className="inline-flex items-center gap-2 font-Inter text-sm font-medium leading-[24px] text-[#232B61] mb-4"
          >
            <img src="/src/assets/images/back.svg" className="h-4 w-4" />
            back
          </Link>

          <Details />
        </div>
      </div>
    </div>
  );
}

export default UserDetails;
