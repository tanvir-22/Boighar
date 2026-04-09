import React from 'react'
import { Star } from 'lucide-react';
import { Link } from 'react-router';
const Card = ({ item }) => {
    return (
      


            <Link to={`/bookdetails/${item.bookId}`} className="card bg-base-200 w-96 shadow-sm p-4">
                <figure>
                    <img className='h-70'
                        src={item.image}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {item.bookName}
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>By: {item.author}</p>
                    <div className="text-[16px] border-dashed py-3 border-t card-actions justify-between">
                        <div className="">{item.category}</div>
                        <div className="flex gap-3 items-center">
                            <div>{item.rating}</div>
                            <div><Star/></div>
                        </div>
                    </div>
                </div>
            </Link>
       
    )
}

export default Card