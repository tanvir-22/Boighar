import React, { Suspense } from 'react'
import Banner from '../components/home/Banner'
import AllBooks from '../components/home/AllBooks';


const bookFetch = fetch(`/booksData.json`).then(res=>res.json());

const Homepage = () => {



  return (
  <>
   <Banner/>
   <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
    <AllBooks bookFetch={bookFetch}/>
   </Suspense>
  </>
  )
}

export default Homepage