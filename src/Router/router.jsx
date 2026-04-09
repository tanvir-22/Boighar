import { createBrowserRouter} from 'react-router'
import Bookpage from '../pages/Bookpage.jsx';
import Homepage from '../pages/Homepage.jsx';
import MainLayout from '../layout/MainLayout.jsx';
import Error from '../Error.jsx';
import BookDetails from '../components/BookDetails.jsx';

export const router = createBrowserRouter([
  {
    path: "/",
    Component:MainLayout,
    children:[
      {
        index:true,
        Component:Homepage
      },
      {
        path:"/books",
        Component:Bookpage
      },
      {
        path:"/bookdetails/:id",
        loader: ()=>{
            return fetch(`/booksData.json`)
        },
        Component:BookDetails
      }
    ],
    errorElement:<Error/>
  },
]);