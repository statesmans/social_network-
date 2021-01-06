import { BrowserRouter, Route } from 'react-router-dom';
import React, {Suspense} from 'react';

import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import News from './components/News/News';
import Music from './components/Music/Music';
import Setting from './components/Setting/Setting';
import s from './main.module.css';
import NavbarContainer from './components/Navbar/NavbarContainer';
import UsersContainer from './components/Users/UsersContainer';



const App = (props) => {
  

    return ( 
      <BrowserRouter>
        <div className={s.wrapper}>
          <Header/>
          <NavbarContainer />

          <div className={s.wrapper__content}>
            <Suspense fallback="Loading...">
              <Route path="/Profile" render={ () => <Profile/>}/>
              <Route path="/Dialogs" render={ () => <DialogsContainer/>}/>
              <Route path="/News" component={News}/>
              <Route path="/Music" component={Music}/>
              <Route path="/Setting" component={Setting}/>
              <Route path="/Users" component={UsersContainer}/>
            </Suspense>
          </div>
        </div>
      </BrowserRouter>
    );
} 
            
export default App;
