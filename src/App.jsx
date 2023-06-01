import './App.css';
import 'bootstrap';
import Header from './components/Layout/Header';
import "bootstrap/dist/css/bootstrap.min.css"
import Footer from './components/Layout/Footer';
import SignUp from './components/Forms/SignUp';
import SignIn from './components/Forms/SignIn';
import { useState } from 'react';
import Blogs from './components/Blogs/Blogs';


function App() {

  const [users, setUsers] = useState(
    [{
      name: "Abdul Samad",
      email: "samadmemon991@gmail.com",
      password: "asd",
      failedAttempts: 0
    }]
  );
  const [signIn, setSignIn] = useState(false);
  const [signUp, setSignUp] = useState(true);
  const [userLoginFlag, setUserLoginFlag] = useState(false);


  const getUserSignIn = () => {
    setSignIn(true);
    setSignUp(false);
  }

  const registerUser = (userData) => {
    setUsers((prevUsers) => {
      return [...prevUsers, userData]
    })
    getUserSignIn();
  }


  const failedAttempt = (failedUser) => {
    setUsers((prevUsers) => {
      return prevUsers.map(user => {
        if (user.email === failedUser.email) {
          return failedUser;
        }
        return user;
      })
    })
  }

  return (
    < div className="App">
      <Header isUserLoggedIn={userLoginFlag} />
      <Blogs />
      {/* {!userLoginFlag && signIn && <SignIn users={users} failedAttempt={failedAttempt} setUserLoginFlag={setUserLoginFlag}/>}
      {!userLoginFlag && signUp && <SignUp registerUser={registerUser} />} */}
      <Footer />

    </div>
  );
}

export default App;
