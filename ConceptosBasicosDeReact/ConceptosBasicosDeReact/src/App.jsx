import "./App.css";
import Heading from "./Semana1/Heading";
import Card from "./Semana1/Card";

function Header() {
  return <h1>Hello World!</h1>;
}

function App() {
  return (
    <div>
      <Header />

      <Heading firstName="Bob" />
      <Heading firstName="Jason" />
      <Heading firstName="John" />

      <h1>Task: Add three Card elements</h1>
      <Card h2="First card's h2" h3="First card's h3" />
      <Card h2="Second card's h2" h3="Second card's h3" />
      <Card h2="Third card's h2" h3="Third card's h3" />
    </div>
  );
}

export default App;
