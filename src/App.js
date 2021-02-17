import image from "./image/apple.jpg";
import css from "./App.css";
function App() {
  return (
    <header className="App-header">
      <div>
        <h1 className="tilte"> My Phone Store</h1>
        <h4 className="Description">welcome to my mobile store</h4>

        <img src={image} className="image" alt="iphone-image" />
      </div>
    </header>
  );
}

export default App;
