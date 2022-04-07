import 'materialize-css/dist/css/materialize.css';
import './style/App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return<>
    <NavBar/>
    <ItemListContainer/>
  </>;
}

export default App;