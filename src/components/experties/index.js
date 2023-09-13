const Experties =()=>{
    return (
        <div>
      <div className="">
        <div className="md:flex  items-center h-full ">
          <div className="bg-gray-950 md:w-1/2 py-20 ">
            <div className="px-16 ">
              <h5 className="text-cyan-600 text-xl font-semibold uppercase">
                Our expertise
              </h5>
              <h2 className="text-white text-4xl uppercase font-bold pt-5">
                We are professional in the field aerial & drone
              </h2>
              <div className="text-gray-500 text-start text-xl space-y-5 pt-10">
                <p className="hidden lg:block">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
                  iure smod empor incididunt ut labore et dolore magna aliqua.
                </p>
                <p className=''>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
                  iure smod empor incididunt ut labore et
                </p>
                <p className='hidden lg:block'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
                  doeiu
                </p>
                <p className='hidden lg:block'>Lorem ipsum dolor sit amet consectetur adipisicing</p>
              </div>
              <div className="py-10 text-center grid grid-cols-3 md:grid-cols-3 gap-12 ">
                <div>
                  <h2 className="text-3xl lg:text-5xl text-white">789</h2>
                  <p className=" text-md lg:text-md font-semibold text-cyan-500">
                    Lorem ipsum Lorem
                  </p>
                </div>
                <div>
                  <h2 className="text-3xl lg:text-5xl text-white">789</h2>
                  <p className="text-md lg:text-md font-semibold text-cyan-500">
                    Lorem ipsum Lorem
                  </p>
                </div>
                <div>
                  <h2 className="text-3xl lg:text-5xl text-white">789</h2>
                  <p className="text-md lg:text-md font-semibold text-cyan-500">
                    Lorem ipsum Lorem
                  </p>
                </div>
              </div>
              <div className='mx-auto w-1/2'>
                <button className="text-md lg:text-xl font-bold uppercase bg-cyan-500 px-3 lg:px-8 py-5 mt-2">
                  get started
                </button>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 relative">
            <img className="h-[650px] lg:h-[836px] " src='/droneimage.png' alt="" />
            <div className="absolute bg-cyan-50  z-20"></div>
            <div className="bg-teal-500 absolute space-y-4 -bottom-40 w-7/12 lg:w-6/12 right-0 py-5 lg:py-7 px-5 z-50">
              <h3 className="text-xl font-semibold">
                Ready to embrace the future
              </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
                <span className='hidden lg:block'>delectus voluptates consequatur corporis quia incidunt!</span>
              </p>
              <h2 className="text-xl font-medium">Overview </h2>
            </div>
          </div>
        </div>
      </div>
    </div> 
    )
}

export default Experties