import './App.css';
import AddUser from './Components/scripts/AddUser';
import ViewUser from './Components/scripts/ViewUser';
import Header from './Components/scripts/Header';
import {BrowserRouter as Router,Route} from 'react-router-dom'
import Home from './Components/scripts/Home';
import {Provider} from 'react-redux'
import store from './store'
import EditUser from './Components/scripts/EditUser';

function App() {
  return (
    <Provider store={store}>  
      <Router>
      <Header/>
      <Route exact path='/' component={Home} />
      <Route exact path='/add' component={AddUser} />
      <Route exact path='/view' component={ViewUser}   />
      <Route exact path='/edit/:email/:first_name/:last_name/:pincode/:city/:states' component={EditUser} />
      </Router>
    </Provider>  
  );
}

export default App;
