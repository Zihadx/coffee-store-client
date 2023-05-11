import { useLoaderData } from "react-router-dom";
import "./App.css";
import CoffeeCard from "./components/CoffeeCard";

function App() {
  const coffees = useLoaderData();
  return (
    <div className="text-center md:px-24">
      <h1 className="text-4xl font-bold text-orange-800">Hot Coffee: {coffees.length}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {
          coffees.map(coffee => <CoffeeCard
          key={coffee}
          coffee={coffee}
          ></CoffeeCard>)
        }
      </div>
    </div>
  );
}

export default App;
