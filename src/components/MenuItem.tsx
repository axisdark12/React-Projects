
import type { MenuItem} from "../types"

type MenuItemProp ={

    item: MenuItem
}

export default function MenuItem({item}: MenuItemProp) {
  return (

<button className="border-2 border-teal-400 w-full p-3 flex justify-between">

   
  <p>{item.name}</p>
  <p className="font-black">${item.price}</p>

</button>

  )
}
