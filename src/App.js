import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import { Route, BrowserRouter } from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import Friends from './components/FriendsBlock/Friends';
import DialogsContainer from './components/Dialogs/DialogsContainer';

const App = (props) => {
    return (
        
            <div className="app-wrapper">
                <Header />
                <Navbar /*state={props.state.friendsBlock} */ />
                <div className="app-wrapper-content">
                    <Route path="/dialogs" render={() => <DialogsContainer /*store={props.store}*//>} />
                    <Route path="/profile" render={() => <Profile store={props.store} />} />
                    <Route path="/news" component={News} />
                    <Route path="/music" component={Music} />
                    {/* <Route path="/settings" render={() => <Settings state={props.state.settingsPage} dispatch={props.dispatch}/>} /> */}
                    {/* <Route path="/friends" render = { () => <Friends state={props.state.friendsBlock} />} /> */}
                </div>
            </div>
    )
}

export default App;