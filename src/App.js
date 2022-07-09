import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs"
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import News from "./components/News/News";


const App = (props) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar navLinks={props.state.navbar.navLinks}/>
                <div className="app-wrapper-content">
                    <Routes>
                        <Route path="/profile" element={<Profile postsData={props.state.profilePage.posts}/>}/>
                        <Route path="/dialogs/*" element={<Dialogs profileImage={props.state.messagesPage.dialogs} messagesData={props.state.messagesPage.messages} dialogsData={props.state.messagesPage.dialogs}/>}/>

                        <Route path="/music" element={<Music/>}/>
                        <Route path="/settings" element={<Settings/>}/>
                        <Route path="/news" element={<News/>}/>
                    </Routes>

                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
