import { BrowserRouter, Route } from 'react-router-dom';
import React from 'react';

import HeaderContainer from './components/Header/HeaderContainer';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import News from './components/News/News';
import Music from './components/Music/Music';
import Setting from './components/Setting/Setting';
import s from './main.module.css';
import NavbarContainer from './components/Navbar/NavbarContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';



const App = (props) => {
  

    return ( 
      <BrowserRouter>
        <div className={s.wrapper}>
          <HeaderContainer/>
          <NavbarContainer/>

          <div className={s.wrapper__content}>
              <Route path="/Profile/:userId?" render={ () => <ProfileContainer/>}/>
              <Route path="/Dialogs" render={ () => <DialogsContainer/>}/>
              <Route path="/News" component={News}/>
              <Route path="/Music" component={Music}/>
              <Route path="/Setting" component={Setting}/>
              <Route path="/Users" component={UsersContainer}/>
          </div>
        </div>
      </BrowserRouter>
    );
} 
            
export default App;
