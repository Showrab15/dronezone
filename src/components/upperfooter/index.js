const UpperFooter = ()=>{
    return (
        <div className=" mx-auto mt-72 mb-32">
            <div style={{ backgroundImage: 'url(https://i.ibb.co/7VWfShy/Rectangle-15.png)' }} className="lg:w-[1240px] lg:h-[560px] bg-cover bg-center mx-auto bg-no-repeat mt-12">
                <div className="md:flex  gap-12 ">
                    <div className="md:w-1/2">

                        <img className="md:ml-14 lg:w-[450px] h-[680px] relative bottom-16 " src="https://i.ibb.co/F3kQw9L/Screenshot-589.png" alt="" />

                    </div>
                    <div className="mt-12 md:w-1/2 flex flex-col gap-4 px-5 lg:px-0 text-white">
                        <h3 className="text-2xl ">OUR EXPERTIES</h3>
                        <h1 className="text-4xl font-semibold">WE ARE  PROFESSIONAL IN THE FIELD AERIAL & DRONE</h1>
                        <p className="text-base font-normal pr-10">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi ipsa, delectus beatae deserunt sint numquam quisquam aut nisi voluptas ducimus.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi ipsa, delectus beatae deserunt sint numquam quisquam aut nisi voluptas ducimus.</p>
                        <div className="flex gap-4 items-center pb-10 lg:pb-0">
                            <img className="w-[80px] h-[80px]" src="https://i.ibb.co/4fvGZ6b/Ellipse-4.png" alt="" />
                            <div className="">
                                <h1 className="font-semibold text-xl ">Jason Haris</h1>
                                <p className=" text-base">Lorem Ipsum is</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UpperFooter