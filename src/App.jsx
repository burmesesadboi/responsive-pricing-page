import Card from "./components/CardComponent.jsx/Card";
import Heading from "./components/Heading/Heading";

function App() {
  return (
    <main className="h-full mx-auto">
      <div className="flex flex-col justify-center items-center">
        <Heading />
        <Card />
      </div>
    </main>
  );
}

export default App;
