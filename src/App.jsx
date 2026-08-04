
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import './App.css'
import SignIn from './components/SignIn';
import Info from './components/Info';
import BookRoom from './components/BookRoom';
import MyGroup from './components/MyGroup';
import MyRoom from './components/MyRoom';
import Navbar from './components/Navbar';
import Topbar from './components/Topbar';
import Iravati from './components/Iravati';
import Kalindi from './components/Kalindi';

  const router= createBrowserRouter(
    [
      {
        path: '/',
        element: 
        <div>
          <SignIn></SignIn>
        </div>
      },
      {
        path: '/dashboard',
        element:
        <div>
          <Topbar></Topbar>
          <br />
          <br />
          <br />
          <Navbar></Navbar>
          <Info></Info>
        </div>,
        children:
        [
          {
            path: '',
            element:
            <div>
              <MyRoom></MyRoom>
            </div>
          },
          {
             path: 'group',
            element:
            <div>
              <MyGroup></MyGroup>
            </div>
          },
          {
             path: 'booking',
            element:
            <div>
              <BookRoom></BookRoom>
            </div>,
          },
              {
                path:'kalindi_h',
                element:
                <div>
                  <Kalindi></Kalindi>
                </div>
              },
              {
                path: 'iravati_h',
                element:
                <div>
                  <Iravati></Iravati>
                </div>
              },
        ]      
      }
    ]
  );
function App() {

  return (
    <div className='container'>
      <RouterProvider router={router}/>
      hey dude!
    </div>
  )
}

export default App
