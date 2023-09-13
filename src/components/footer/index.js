const Footer =()=>{
    return (
        <div className=' py-20 bg-gray-950 text-white px-10 lg:px-20'>
        <div className='grid justify-around grid-cols-1 lg:grid-cols-2'>
          <div className='space-y-8 '>
            <h2 className='text-white text-center lg:text-left text-2xl lg:text-5xl font-bold'>Ready to Get Started?</h2>
            <button className='hidden lg:block text-center border border-gray-500 p-3 font-bold text-md lg:text-lg text-white'>Get in Touch</button>
          </div>
  
          <div className='space-y-7'>
            <div className='space-y-5'>
              <h3 className='text-md lg:text-2xl mt-5 lg:mt-0 font-bold ps-2 lg:ps-0 text-center lg:text-left'>Have any Question? Go to out Faqs</h3>
              <p className="text-base py-4 pb-12">Lorem ipsum dolor sit amet consectetur adipisicing elit
                Explicabo voluptatum beatae eum consectetur vel dignissimos 
                <span className="hidden lg:block">voluptates aperiam dolorem perspiciatis dicta</span></p>
            </div>
  
            <div className='flex justify-between mt-5 lg:mt-10 pe-0 lg:pe-40 '>
              <div className='space-y-10'>
                <div>
                  <p className="font-bold">Email</p>
                  <p>manggon@gmail.com</p>
                </div>
  
                <div>
                  <p className="font-bold">Phone</p>
                  <p>(+62) 89897878</p>
                </div>
  
                <div>
                  <p className="font-bold">Address</p>
                  <p>rtaa yogyakarta Street</p>
                  <p>2308, Indonesia</p>
                </div>
  
              </div>
              <div>
                <ul className="font-bold space-y-5">
                  <li>Facebook</li>
                  <li>twitter</li>
                  <li>Linkedin</li>
                  <li>Instagram</li>
                  <li>Youtube</li>
                </ul>
              </div>
  
            </div>
  
          </div>
  
        </div>
      </div>
    )
}

export default Footer