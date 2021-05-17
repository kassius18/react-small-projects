import './App.scss';
import Search from './components/Search'

function App() {

  return (
    <>
    <header className="top-header">
      <div className="top-header__container">
        <div className="top-header__left">UseReducer</div>
      </div>
    </header>
    <main >
      <Search/>
    </main>
    </>
  );
}

export default App;
