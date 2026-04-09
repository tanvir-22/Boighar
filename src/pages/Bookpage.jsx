import React, { useContext, useState } from 'react'
import { BookContext } from '../Context/BookProvider'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ReadList from '../Book/ReadList';
import WishList from '../Book/WishList';

const Bookpage = () => {
  const { markedBook, wishList } = useContext(BookContext);
  const [sortingType, setSortingType] = useState('');
  return (
    <div>
      <h1 className='text-center text-3xl pt-2'>Find your books</h1>
      <div className='flex justify-center items-center'>
        <details className="dropdown">
          <summary className="btn m-1">Sort</summary>
          <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
            <li onClick={() => setSortingType('page')}><a>page</a></li>
            <li onClick={() => setSortingType('rating')}><a>rating</a></li>
          </ul>
        </details>
      </div>
      <div className='w-11/12 mx-auto py-20'>

        <Tabs>
          <TabList>
            <Tab>Read List</Tab>
            <Tab>Wish List  </Tab>
          </TabList>

          <TabPanel>

            <ReadList sortingType={sortingType} />


          </TabPanel>
          <TabPanel>

            <WishList sortingType={sortingType} />

          </TabPanel>
        </Tabs>
      </div>
    </div>
  )
}

export default Bookpage