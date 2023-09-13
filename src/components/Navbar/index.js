import { FaBars } from 'react-icons/fa';

const Navbar =()=>{
    return(
        <div className=''>
            <div className="drawer">
                <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col">
                    {/* Navbar */}
                    <div className="w-full  text-white">
                        <div className="flex-none hidden">
                            <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                            </label>
                        </div>

                        <div className="flex justify-between  h-[80px]  ">
                            <div className='text-white my-auto'>
                                <h2 className='text-2xl lg:text-4xl  ps-5 lg:ps-10'>Logo</h2>
                            </div>
                            <div className='lg:flex items-center hidden '>
                                <ul className='flex gap-10 text-xl font-semibold text-white '>
                                    <li>Home</li>
                                    <li>Our Works</li>
                                    <li>Our Gears</li>
                                    <li>Reviews</li>
                                    <li>Contact Us</li>
                                </ul>
                            </div>
                            <div className='bg-cyan-500 p-4 text-white  '>
                                <label htmlFor="my-drawer-3" className="px-3 bg-cyan-500 drawer-overlay">
                                    {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg> */}
                                    <FaBars className="inline-block w-5 h-10 my-auto "></FaBars>
                                </label>
                            </div>
                        </div>


                    </div>
                    {/* Page content here */}
                    {/* Content */}
                </div>

                {/* mobile responsive */}
                <div className="drawer-side">
                    <label htmlFor="my-drawer-3" className="  drawer-overlay"></label>
                    <ul className="menu text-black font-semibold gap-16 flex flex-col justify-center items-center p-4 w-80 h-full bg-base-300 ">
                        {/* Sidebar content here */}
                        <li>Home</li>
                        <li>Our Works</li>
                        <li>Our Gears</li>
                        <li>Reviews</li>
                        <li>Contact Us</li>
                    </ul>

                </div>
            </div>
            <hr className='hidden lg:block'></hr>
        </div>
    )
}

export default Navbar