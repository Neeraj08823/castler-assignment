import "./App.css";
import FetchApi from "./components/FetchApi";

function App() {
  return (
    <div className="App">
      <div className="back">
        <nav class="navbar navbar-light bg-secondary">
          <div class="container-fluid">
            <span class="navbar-brand mb-0 h1 fw-bold  navbg">
              User Info
            </span>
          </div>
        </nav>

        <FetchApi />
      </div>
      <footer class="bg-secondary text-center text-lg-start">
        <div className="text-center p-3">© 2022 Copyright:</div>
      </footer>
    </div>
  );
}

export default App;
