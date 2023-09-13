const Banner =()=>{
    return (
        <div>
            <div
                className="bg-cover bg-center  relative"
                style={{
                    backgroundImage:
                        "url('https://c4.wallpaperflare.com/wallpaper/539/37/134/drone-dji-mavic-dji-mavic-2-pro-hd-wallpaper-preview.jpg')",
                }}
            >
                {/* Background Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>

                <div className="maxWidth h-[800px] lg:h-[750px] relative px-2">
                    <div className="flex flex-col h-full  justify-center ps-5 lg:ps-16 text-white">
                        <h3 className="text-md  font-semibold">Professional Drone Service</h3>
                        <h3 className="md:text-5xl text-3xl mt-2 font-bold uppercase ">Photography & videoGraphy <br /> Inoovation with drone</h3>

                        <p className='text-xl mt-2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. </p>
                     
                        {/* Add more content here */}
                        <div className='mt-7 flex'>
                            <button className='bg-cyan-500 px-3 lg:px-14  py-2 lg:py-0 text-xl text-black font-bold'>Get Started</button>
                            <button className='px-8 lg:px-16 py-3 lg:py-5  text-xl text-white font-bold'> Get Started</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner