const tipOptions = [
  {
    id: "tip-10",
    value: 0.1,
    label: "10%",
  },
  {
    id: "tip-20",
    value: 0.2,
    label: "20%",
  },
  {
    id: "tip-50",
    value: 0.5,
    label: "50%",
  },
];


type TipPercentageFormProps ={
  setTip: React.Dispatch<React.SetStateAction<number>>,
  tip:number
}

export default function TipPercentageForm({setTip,tip} : TipPercentageFormProps) {

  return (
    <>
      <div  className="felx gap-2">
        <h3 className="font-black text-2xl">Propinas</h3>
     
        <form>
          {tipOptions.map((tipOptions) => (
            <div key={tipOptions.id} className="flex gap-2">
              <label htmlFor={tipOptions.id}>{tipOptions.label}</label>
              <input 
              name="tip" 
              type="radio" 
              id={tipOptions.id} 
              value={tipOptions.value} 
              onChange={ e => setTip(+e.target.value)}
              checked= {tipOptions.value===tip}
              />
            </div>
          ))}
        </form>
      </div>
    </>
  );
}
