import "./App.css"
import {Route, Routes} from "react-router-dom"
import Music from "./components/Music/Music"
import Settings from "./components/Settings/Settings"
import News from "./components/News/News"
import DialogsContainer from "./components/Dialogs/DialogsContainer"
import NavbarContainer from "./components/Navbar/NavbarContainer"
import UsersContainer from "./components/Users/UsersContainer"
import ProfileContainer from "./components/Profile/ProfileContainer"
import HeaderContainer from "./components/Header/HeaderContainer"
import LoginPage from "./components/Login/Login"

const App = () => {
    return (
        <div className="app-wrapper">
            <HeaderContainer/>
            <NavbarContainer/>
            <div className="app-wrapper-content">
                <Routes>
                    <Route path="/profile" element={<ProfileContainer/>}/>
                    <Route path="/profile/:userId" element={<ProfileContainer/>}/>
                    <Route path="/" element={<ProfileContainer/>}/>
                    <Route path="/login" element={<LoginPage/>}/>
                    <Route path="/dialogs/*" element={<DialogsContainer/>}/>
                    <Route path="/users/*" element={<UsersContainer/>}/>
                    <Route path="/music" element={<Music/>}/>
                    <Route path="/settings" element={<Settings/>}/>
                    <Route path="/news" element={<News/>}/>
                </Routes>
            </div>
        </div>
    )
}

export default App
