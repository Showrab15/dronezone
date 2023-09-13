import { AiFillCheckCircle } from 'react-icons/Ai';

const EquepmentsSection =()=>{
    return (
        <div className='maxWidth  bg-[#F9F9F9] py-2 lg:py-6'>
        <div className='mx-auto w-2/3 py-5 lg:pt-10 lg:pb-5'>
            <h1 className='text-xl lg:text-3xl font-bold text-center'>Our Gears & Equipements</h1>
            <p className='text-center mt-2 hidden lg:block'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown </p>
        </div>

        {/* first component  */}
        <div className='grid grid-cols-3  justify-between gap-10 mb-32 lg:mb-0'>
            <div className='text-center  space-y-2 p-5 '>
                <div className='flex justify-center'>
                    <AiFillCheckCircle className='text-7xl text-cyan-300'></AiFillCheckCircle>
                </div>
                <h2 className='text-sm lg:text-xl font-bold uppercase text-center'>4k 6O FPS</h2>
                <p className='px-0 lg:px-10 hidden lg:block '>Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet Lorem  </p>
            </div>

            <div></div>

            <div className='text-center  space-y-2 p-5'>
                <div className='flex justify-center'>
                    <AiFillCheckCircle className='text-7xl text-cyan-300'></AiFillCheckCircle>
                </div>
                <h2 className='text-sm lg:text-xl font-bold uppercase text-center'>Best Sensor</h2>
                <p className='px-0 lg:px-10 hidden lg:block '>Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet Lorem  </p>
            </div>
        </div>




        {/* 2nd Components  */}
        <div className='grid grid-cols-3  justify-between gap-10 -mt-44 items-center  z-10'>
            <div></div>

            <div>
                <div className='text-center rounded-full bg-cyan-300 flex flex-col justify-center h-[130px] lg:h-[380px]  w-32 lg:w-auto  space-y-5 '>

                    <img className='' src="/drone.png" alt="" />
                  
                  {/* <div className=' flex justify-center'>
                    <AiFillCheckCircle className='text-7xl text-cyan-300'></AiFillCheckCircle>
                </div> */}
                    {/* <h2 className='text-xl lg:text-2xl font-bold '></h2> */}
                    {/* <p className='hidden lg:block '>Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet Lorem  </p> */}
                </div>
            </div>

            <div></div>
        </div>




        {/* 3rd Components  */}
        <div className='grid grid-cols-3 -mt-10 lg:-mt-28  justify-between gap-10 lg:mx-40  '>
            <div className='text-center  space-y-2 p-5 '>
                <div className=' flex justify-center'>
                    <AiFillCheckCircle className='text-7xl text-cyan-300'></AiFillCheckCircle>
                </div>
                <h2 className='text-sm lg:text-xl font-bold uppercase text-center'>Mechanical Shutter</h2>
                <p className='hidden lg:block '>Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet Lorem  .</p>
            </div>

            <div></div>

            <div className='text-center  space-y-2 p-5'>
                <div className='flex justify-center'>
                    <AiFillCheckCircle className='text-7xl text-cyan-300'></AiFillCheckCircle>
                </div>
                <h2 className='text-sm lg:text-xl font-bold uppercase text-center'>1 Hour Flight</h2>
                <p className='hidden lg:block '>Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet Lorem  .</p>
            </div>
        </div>



        {/* button center  */}
        <div className='flex justify-center my-10'>
            <button className='px-12 font-bold text-xl py-4 bg-cyan-300  '>Get Started</button>
        </div>
    </div>

    )
}

export default EquepmentsSection