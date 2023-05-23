import './App.css';
import 'bootstrap';
import Header from './components/Layout/Header';
import "bootstrap/dist/css/bootstrap.min.css"
import Footer from './components/Layout/Footer';
import SignUp from './components/Forms/SignUp';
import SignIn from './components/Forms/SignIn';
import { useState } from 'react';


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


  const getUserSignIn = () => {
    setSignIn(true);
    setSignUp(false);
  }
  const getUserSignUp = () => {
    setSignIn(false);
    setSignUp(true);
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
    console.log(users);
  }

  return (
    < div className="App">
      <Header />
      {signIn && <SignIn users={users} failedAttempt={failedAttempt} />}
      {signUp && <SignUp registerUser={registerUser} />}
      <Footer />

    </div>
  );
}

export default App;
