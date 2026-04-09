import React from 'react'

const Banner = () => {
  return (
    <div className="hero w-11/12 p-5 pb-6  mx-auto mt-3 bg-base-200 rounded-md">
  <div className=" flex  justify-around flex-col w-full items-center md:flex-row-reverse">
   <div>
     <img
      src="https://images.unsplash.com/photo-1641260199871-1c7145f3fc3b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGJvb2slMjBjb3ZlcnxlbnwwfHwwfHx8MA%3D%3D"
      className="w-full md:h-[80vh] rounded-md "
    />
   </div>
    <div className=' '>
      <h1 className="text-3xl py-3  md:text-6xl font-bold">Books to freshen up <br /> your bookshelf</h1>
     
     <div className='flex justify-center md:justify-start'>
         <button className="mt-5 btn btn-primary  ">View The List</button>
     </div>
    </div>
  </div>
</div>
  )
}

export default Banner