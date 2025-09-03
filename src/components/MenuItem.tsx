
import type { MenuItem} from "../types"

type MenuItemProp ={

    item: MenuItem,
    addItem: (item:MenuItem) => void
  
}

export default function MenuItem({item,addItem}: MenuItemProp) {
  return (

<button onClick={()=>addItem(item)} className="border-2 border-teal-400 w-full p-3 text-lg flex justify-between hover:bg-teal-300">
  <p>{item.name}</p>
  <p className="font-black">${item.price}</p>
</button>

  )
}
