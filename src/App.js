import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs"
import {Route, Routes} from 'react-router-dom'
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import News from "./components/News/News";
import {updateNewPostText} from "./Redux/state";


const App = (props) => {
    return (

        <div className='app-wrapper'>
            <Header/>
            <Navbar state={props.state}  />
            <div className="app-wrapper-content">
                <Routes>
                    <Route path="/profile" element={<Profile dispatch={props.dispatch} state={props.state}/>}/>
                    <Route path="/dialogs/*" element={<Dialogs state={props.state} dispatch={props.dispatch}/>}/>
                    <Route path="/music" element={<Music/>}/>
                    <Route path="/settings" element={<Settings/>}/>
                    <Route path="/news" element={<News/>}/>
                </Routes>

            </div>
        </div>


    );
}

export default App;
