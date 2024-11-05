import { NavLink } from "react-router-dom";

const HomeNavBar = () => {
  const links = <>
  <li><NavLink className="focus:font-bold" to="/">Home</NavLink></li>
  <li><NavLink className="focus:font-bold" to="statistics">Statistics</NavLink></li>
  <li><NavLink className="focus:font-bold" to="dashboard">Dashboard</NavLink></li>
  <li><NavLink className="focus:font-bold" to="blog">Blog</NavLink></li>
  </>
    return (
        <div className="w-11/12 mx-auto pt-6 mb-[28rem] bg-[#F7F7F7]">

              <div className="navbar bg-purple-600 rounded-t-[2rem] pr-6 lg:px-10 pt-8">
                <div className="navbar-start">
                  <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M4 6h16M4 12h8m-8 6h16" />
                      </svg>
                    </div>
                    <ul
                      tabIndex={0}
                      className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                  </div>
                  <a href="/" className="text-xl font-bold text-white">Gadget Heaven</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                  <ul className="flex space-x-6 px-1 text-white">
                    {links}
                  </ul>
                </div>
                <div className="navbar-end">
                <div className="flex-none space-x-4">
                  <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle bg-white">
                      <div className="indicator">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        <span className="badge badge-sm indicator-item">0</span>
                      </div>
                    </div>
                    <div
                      tabIndex={0}
                      className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow">
                      <div className="card-body">
                        <span className="text-lg font-bold"><span>0</span> Items</span>
                        <span className="text-info">Subtotal: $<span>0</span></span>
                        <div className="card-actions">
                          <button className="btn bg-purple-600 btn-block">View Cart</button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle bg-white">
                      <div className="indicator">
                      <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                        <span className="badge badge-sm indicator-item">0</span>
                      </div>
                    </div>
                    <div
                      tabIndex={0}
                      className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow">
                      <div className="card-body">
                        <span className="text-lg font-bold"><span>0</span> Items</span>
                        <div className="card-actions">
                          <button className="btn bg-purple-600 btn-block">View Wishlist</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                </div>
              </div>
              <div className="hero bg-purple-600 h-[40rem] items-start pt-10 rounded-b-[2rem]">
                      <div className="hero-content text-center">
                      <div className="max-w-6xl">
                        <h1 className="text-[3.5rem] font-bold text-white">Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h1>
                        <p className="py-8 max-w-2xl mx-auto text-white">
                        Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
                        </p>
                        <button className="btn btn-white rounded-r-full rounded-l-full px-7 text-purple-600 text-xl font-bold">Shop Now</button>
                      </div>
                      </div>
                      <div className="relative top-[24rem] rounded-[2rem] p-6 bg-white bg-opacity-30">
                        <img className="w-[60rem] h-[35rem] rounded-3xl" src="../../public/assets/banner.jpg" />
                      </div>
                  </div>
        </div>
    );
};

export default HomeNavBar;