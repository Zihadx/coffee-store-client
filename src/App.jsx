import { Link, useLoaderData } from "react-router-dom";
import "./App.css";
import CoffeeCard from "./components/CoffeeCard";

function App() {
  const coffees = useLoaderData();
  return (
    <div className="text-center px-2 md:px-16 lg:px-24 mt-8">
      <nav>
        <Link to="/addCoffee" className="font-bold text-amber-700 mx-4">
          Add coffee
        </Link>
        <Link to="/updateCoffee" className="font-bold text-amber-700 mx-4">
          Update coffee
        </Link>
      </nav>
      <h1 className="text-4xl font-bold text-orange-800 mt-4">
        Hot Coffee: {coffees.length}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {coffees.map((coffee) => (
          <CoffeeCard key={coffee} coffee={coffee}></CoffeeCard>
        ))}
      </div>
    </div>
  );
}

export default App;
