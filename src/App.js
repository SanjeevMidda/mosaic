import "./index.css";
import Color from "./components/Color";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Color color="blue" gridArea="a" time={1} />
        <Color color="green" gridArea="b" time={2} />
        <Color color="red" gridArea="c" time={1} />
        <Color color="brown" gridArea="d" time={1.5} />

        <Color color="purple" gridArea="e" time={1} />
        <Color color="black" gridArea="f" time={2} />
        <Color color="grey" gridArea="g" time={1} />
        <Color color="yellow" gridArea="h" time={1.5} />

        <Color color="pink" gridArea="i" time={1} />
        <Color color="orange" gridArea="j" time={2} />
        <Color color="gold" gridArea="k" time={1.5} />
        <Color color="beige" gridArea="l" time={2} />

        <Color color="yellow" gridArea="m" time={1} />
        <Color color="grey" gridArea="n" time={1.5} />
        <Color color="pink" gridArea="o" time={2} />
      </div>
    </div>
  );
}

export default App;
