import SearchBar from "../Components/SearchBar";
import UserTable from "../Components/UserTable";

function Dashboard() {
  return (
    <div className="min-h-screen bg-[#F2F3F5] p-2">
      <div className="bg-white rounded-lg p-6 shadow-sm border border-[#DFE1E5]">
        <h1 className="text-[20px] leading-[32px] font-semibold tracking-[-0.5px] text-[#0B1935] font-[Inter] border-b border-[#DFE1E5] pb-2 mb-4">
          Users Management
        </h1>
        <h2 className="block text-[16px] leading-[24px] font-semibold text-[#0B1935] font-[Inter] my-[26px] p-[6px]">
          List of Users
        </h2>
        <div className="border rounded-lg border-[#DFE1E5] py-[16px] px-[24px]">
          <SearchBar />
          <UserTable />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
