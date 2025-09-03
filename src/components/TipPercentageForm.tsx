


const tipOptions = [
    {
      id: 'tip-10',
      value: .10,
      label: '10%'
    },
    {
      id: 'tip-20',
      value: .20,
      label: '20%'
    },
    {
      id: 'tip-50',
      value: .50,
      label: '50%'
    },
]


export default function TipPercentageForm() {
  return (
    <>
      <div className="font-black text-2xl">
        <h3>Propinas</h3>
        Percentage Form
        <form >
            {tipOptions.map(tipOptions=>(
                <div key={tipOptions.id} className="flex gap-2">


                </div>

//l144469


            ))}


        </form>
      </div>
    </>
  )
}
