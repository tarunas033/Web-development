import Fiction  from "./components/Fiction";
import NonFiction from "./components/NonFiction";
import{useState} from "reactan"


function App() {
  const [text,setText] = useState(true)
  function handleChange(){
    setText(!text)
  }
  return (
    <div>
      <h1>Mini Book Store</h1>

      <button data-testid="toggle-btn" onClick={handleChange}>{text? "show Non-Fiction Books":"Show Fictional Books"}</button>

      <div data-testid="conditional-container">
        {/* Render either Fiction or NonFiction Based on the Condition */}
        {text?<Fiction/>:<NonFiction/>}
      </div>
    </div>
  );
}

export default App;
