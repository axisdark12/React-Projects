import MenuItem from "./components/MenuItem";
import { menuItems } from "./data/db";

function App() {
  console.log(menuItems);

  return (
    <>
      <header className="bg-teal-400 py-5">
        <h1 className=" text-center text-4xl font-black ">export</h1>
      </header>

      <main className=" max-w-7xl mx-auto py-20 grid md:grid-cols-2">
        <div>
          <h2>Menu</h2>
          { menuItems.map(


          item =>(
            <MenuItem
            item={item}
            key={item.id}
            />
          )
        )}
        </div>

        

        <div>
          <p> consumo</p>
        </div>
      </main>
    </>
  );
}

export default App;
