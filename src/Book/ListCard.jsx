import React from 'react'

const ListCard = ({item}) => {
  return (
          <div className='flex border gap-5 border-base-500 rounded-md p-3 mt-3'>
            <div>
                <img className='w-30' src={item.image} alt="" />
            </div>
            <div>
                <p className='text-xl'>{item.bookName}</p>
                <p className='text-xl'>{item.author}</p>
                <p >page: {item.totalPages}</p>
                <p >rating: {item.rating}</p>
            </div>
        </div>
  )
}

export default ListCard