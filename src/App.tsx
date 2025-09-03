import MenuItem from "./components/MenuItem";
import OrderContents from "./components/OrderContents";
import OrdenTotal from "./components/OrdenTotal";
import { menuItems } from "./data/db";
import useOrder from "./hooks/useOrder";
import TipPercentageForm from "./components/TipPercentageForm";

function App() {
  const { order, addItem, removeItem } = useOrder();

  return (
    <>
      <header className="bg-teal-400 py-5">
        <h1 className=" text-center text-4xl font-black ">export</h1>
      </header>

      <main className=" max-w-7xl mx-auto py-20 grid md:grid-cols-2">
        <div>
          <h2 className="font-black text-4xl">Menu</h2>

          <div className="space-y-3 mt-10">
            {menuItems.map((item) => (
              <MenuItem item={item} addItem={addItem} key={item.id} />
            ))}
          </div>
        </div>

        <div className="border border-dashed border-slate-300 p-5 rounded-lg space-y-10">
          <h2 className="font-black text-2xl"> Orden</h2>
          {order.length ? (
            <>
              <OrderContents order={order} removeItem={removeItem} />
              <TipPercentageForm/>
              <OrdenTotal order={order}/>
            </>
          ) : (
            <p className="text-center">La orden esta vacia</p>
          )}
        </div>
      </main>
    </>
  );
}

export default App;
