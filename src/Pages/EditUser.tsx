import EditDetails from "../Components/editUser";

function EditUser() {
  return (
    <div className="h-screen bg-[#F2F3F5] p-2 flex flex-col">
      {/* Page container with padding */}
      <div className="flex flex-col flex-1 bg-white rounded-lg p-6 shadow-sm border border-[#DFE1E5] overflow-hidden">
        {/* Title */}
        <h1 className="text-[20px] leading-[32px] font-semibold tracking-[-0.5px] text-[#0B1935] font-[Inter] border-b border-[#DFE1E5] pb-2 mb-4">
          Users Management
        </h1>

        {/* Scrollable content */}
        <div className="flex-1 overflow-y-auto border rounded-lg border-[#DFE1E5] py-[16px] px-[24px]">
          <EditDetails />
        </div>
      </div>
    </div>
  );
}

export default EditUser;
