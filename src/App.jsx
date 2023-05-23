import './App.css';
import 'bootstrap';
import Header from './components/Layout/Header';
import "bootstrap/dist/css/bootstrap.min.css"
import Footer from './components/Layout/Footer';
import SignUp from './components/Forms/SignUp';
import SignIn from './components/Forms/SignIn';


function App() {
  return (
    < div className="App">
      <Header />
      <SignIn />
      {/* <SignUp /> */}
      <Footer />

    </div>
  );
}

export default App;
