import { Link } from "react-router-dom";

function Details() {
  return (
    <div className="w-full">
      {" "}
      <div className="flex justify-between items-center">
        <h2 className="text-xl leading-[28px] font-semibold text-[#0B1935] font-[Inter] my-[26px]">
          User Details
        </h2>

        <div className="flex items-center">
          <Link
            to="/dashboard/edit-user-details"
            className="inline-flex items-center justify-center gap-2 font-Inter text-sm font-medium leading-[24px] text-white bg-[#316AC8] h-[36px] px-4 rounded-md"
          >
            <img src="/src/assets/images/white-edit.svg" className="h-4 w-4" />
            <span className="hidden sm:inline">Edit User</span>
          </Link>

          <button className="inline-flex items-center gap-2 text-sm font-medium leading-[24px] text-white bg-[#EF4444] h-[36px] px-4 rounded-md ml-4">
            <img src="/src/assets/images/Dectivate.svg" className="h-4 w-4" />
            <span className="hidden sm:inline">Deactivate User</span>
          </button>
        </div>
      </div>
      <h3 className="text-sm leading-[20px] font-semibold text-[#0B1935] font-[Inter] p-[6px]">
        Photo
      </h3>
      <img
        src="/src/assets/images/user-img.jpg"
        className="mt-[8px] p-[6px] mb-[40px]"
      />
      <div className="flex flex-col lg:flex-row w-auto rounded-md gap-[40px]">
        {/* First Name */}
        <div className="flex-1 w-full">
          <label className="text-sm font-semibold text-[#0B1935] font-Inter leading-[#20px]">
            First Name
          </label>
          <div className="flex items-center bg-[#F2F3F5] border border-[#CBCFD6] rounded px-2 py-3 text-[#969CA8] h-[2.75rem] mt-[8px]">
            <img src="/src/assets/images/user.svg" className="mr-[0.75rem]" />
            jackson
          </div>
        </div>

        {/* Surname */}
        <div className="flex-1 w-full">
          <label className="text-sm font-semibold text-[#0B1935] font-Inter leading-[#20px]">
            Surname
          </label>
          <div className="flex items-center bg-[#F2F3F5] border border-[#CBCFD6] rounded px-2 py-3 text-[#969CA8] h-[2.75rem] mt-[8px]">
            <img src="/src/assets/images/user.svg" className="mr-[0.75rem]" />
            jackson
          </div>
        </div>

        {/* Email */}
        <div className="flex-1 w-full">
          <label className="text-sm font-semibold text-[#0B1935] font-Inter leading-[#20px]">
            E-Mail Address
          </label>
          <div className="flex items-center bg-[#F2F3F5] border border-[#CBCFD6] rounded px-2 py-3 text-[#969CA8] h-[2.75rem] mt-[8px]">
            <img src="/src/assets/images/user.svg" className="mr-[0.75rem]" />
            jackson.m@usclarity.com
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;
