import { Link } from "react-router-dom";

const AppSideBar = () => {
  return (
    <div className="bg-purple-100">
      
      <div className=" w-72 h-screen pl-8 mt-4">
        <div className="flex-1">
        <a className="btn btn-ghost font-extrabold text-3xl mt-4">Food CRUD</a>
        <hr className="bottom-2 border-slate-300" />
        </div>
        <div className="flex-none">
          <ul className="menu menu-vertical px-1 mt-14">
            <li>
              <p className="font-bold">Menu</p>
              <Link to="/" className="font-bold text-xl">All Foods</Link>
              <Link to="/create" className="font-bold text-xl">Create Food</Link>
              
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AppSideBar;
