import { useState } from "react";

function EditDetails() {
  const [file, setFile] = useState<string | null>(null);

  return (
    <div className="w-full">
      {/*Main Div */}
      <div className="flex justify-between items-center ">
        {/*Head and button Div */}
        <h2 className="block text-xl leading-[28px] font-semibold text-[#0B1935] font-[Inter] my-[26px]">
          Edit User Details
        </h2>

        <div className="flex items-center justify-center ">
          {/* Button Div */}
          <button className="inline-flex items-center gap-2 text-sm font-medium leading-[24px] text-white bg-[#232B61] h-[36px] px-4 rounded-md ml-4">
            <span className="sm:hidden">Save</span>
            <span className="hidden sm:inline">Save Changes</span>
          </button>

          <button className="inline-flex items-center gap-2 text-sm font-medium leading-[24px] text-[#232B61] bg-[#FFFFFF] border border-[#232B61] h-[36px] px-4 rounded-md ml-4">
            Discard{" "}
          </button>
        </div>
      </div>

      <h3 className=" text-sm leading-[20px] font-semibold text-[#0B1935] font-[Inter] p-[6px] ">
        Photo
      </h3>

      <div className="flex items-center gap-4 mt-[8px] mb-[40px]">
        <img
          src={file || "/src/assets/images/user-img.jpg"}
          className="w-[128px] h-[128px] rounded-md"
        />

        <div className="flex flex-col w-[174px]">
          <span className="text-sm font-medium leading-[20px] text-[#969CA8] mb-[16px]">
            Max size 2MB. JPG or PNG only.
          </span>

          <label
            htmlFor="upload-image"
            className="cursor-pointer text-[#3B82F6] text-sm font-medium inline-flex items-center gap-2"
          >
            <img src="/src/assets/images/upload.svg" className="w-4 h-4" />
            Upload Image
          </label>
        </div>

        <input
          id="upload-image"
          type="file"
          accept="image/*"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            const selectedFile = e.target.files?.[0];
            if (selectedFile) {
              setFile(URL.createObjectURL(selectedFile));
            }
          }}
          className="hidden"
        />
      </div>

      <div className=" flex flex-col lg:flex-row w-auto rounded-md gap-[40px]">
        {/* //Firstname */}
        <div className="flex-1 w-full ">
          <label className="text-sm font-semibold text-[#0B1935] font-Inter leading-[#20px] ">
            First Name{" "}
          </label>

          <div className="flex items-center bg-[#FFF] border border-[#DFE1E5] rounded px-2 py-3 h-[2.75rem] mt-[8px]">
            <img
              src="/src/assets/images/identification.svg"
              className="mr-[0.75rem]"
            />
            <input
              type="text"
              defaultValue="Jackson"
              className="bg-transparent outline-none text-[#0B1935] w-full"
            />
          </div>
        </div>

        {/* //Surname */}
        <div className="flex-1 w-full ">
          <label className="text-sm font-semibold text-[#0B1935] font-Inter leading-[#20px] ">
            Surname{" "}
          </label>

          <div className="flex items-center bg-[#FFF] border border-[#DFE1E5] rounded px-2 py-3 h-[2.75rem] mt-[8px]">
            <img
              src="/src/assets/images/identification.svg"
              className="mr-[0.75rem]"
            />
            <input
              type="text"
              defaultValue="John"
              className="bg-transparent outline-none text-[#0B1935] w-full"
            />
          </div>
        </div>

        <div className="flex-1 w-full ">
          <label className="text-sm font-semibold text-[#0B1935] font-Inter leading-[#20px] ">
            E-Mail Address
          </label>

          <div className="flex items-center bg-[#FFF] border border-[#DFE1E5] rounded px-2 py-3 text-[#969CA8] h-[2.75rem] mt-[8px]">
            <img src="/src/assets/images/user.svg" className="mr-[0.75rem]" />
            <input
              type="email"
              defaultValue="jackson.m@usclarity.com"
              className="bg-transparent outline-none text-[#0B1935] w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditDetails;
