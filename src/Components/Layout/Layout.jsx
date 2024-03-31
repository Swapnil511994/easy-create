import Sidebar from "./Sidebar";

const Layout = () => {
  return (
    <div className="flex flex-row">
      <div className="w-16 min-w-16 max-w-4">
        <Sidebar />
      </div>
    </div>
  );
};

export default Layout;
