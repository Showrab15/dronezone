const RecentWork =()=>{
    return (
        <div>
        <div className="text-center my-20">
            <h2 className="text-4xl font-bold text-center">Our Recent Works & Cinematic Shots</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 w-10/12 mx-auto my-12">
                <div className="space-y-5">
                    <img className="h-[400px] mx-auto"  src='/imges(1).png'  alt="" />
                    <h4 className="text-3xl font-semibold uppercase">Project 1</h4>
                    <p className="text-xl text-gray-600">
                        Lorem ipsum dolor sit amet cons consectetur adipisicing elit. Utelit
                        tellius luctes necari
                    </p>
                </div>
                <div className="lg:pt-24 space-y-5">
                    <img className="h-[400px] mx-auto" src="/imges(2).png" alt="" />
                    <h4 className="text-3xl font-semibold uppercase">Project 2</h4>
                    <p className="text-xl text-gray-600">
                        Lorem ipsum dolor sit amet cons consectetur adipisicing elit. Utelit
                        tellius luctes necari
                    </p>
                </div>
                <div className="space-y-5">
                    <img className="h-[400px] mx-auto" src='/imges(1).png' alt="" />
                    <h4 className="text-3xl font-semibold uppercase">Project 3</h4>
                    <p className="text-xl text-gray-600">
                        Lorem ipsum dolor sit amet cons consectetur adipisicing elit. Utelit
                        tellius luctes necari
                    </p>
                </div>
                <div className="lg:pt-24 space-y-5">
                    <img className="h-[400px] mx-auto" src="/imges(2).png" alt="" />
                    <h4 className="text-3xl font-semibold uppercase">Project 4</h4>
                    <p className="text-xl text-gray-600">
                        Lorem ipsum dolor sit amet cons consectetur adipisicing elit. Utelit
                        tellius luctes necari
                    </p>
                </div>
            </div>
            <button className="text-xl font-bold uppercase bg-cyan-500 px-8 py-3">get started</button>
        </div>
    </div>
    )
}

export default RecentWork