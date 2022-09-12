import { useState } from "react";
import './App.css';

function Alcometer() {
  const [weight, setWeight ] = useState("")
  const [bottles, setBottles] = useState("")
  const [gender, setGender] = useState("male")
  const [result, setResult] = useState(0)
  const [time, setTime] = useState("")

  function Calculate(e) {
    e.preventDefault()
    const grams = ((bottles * 0.33) * 8 * 4.5) - ((weight / 10) * time)
    let result= 0

    if (gender === "male") {
      result = grams / (weight * 0.7)
    }
    else {
      result = grams / (weight * 0.6)
    }
    if (result < 0) {
      result = 0
    }
    setResult(result)
  }

  return (
    <>
      <h3>Calculating alcohol blood level</h3>
      <form onSubmit={Calculate}>
        <div>
          <label>Weight </label>
          <input name="weight" type="number" step="1" value={weight} onChange={e => setWeight(e.target.value)}></input>
        </div>
        <div>
          <label>Bottles </label>
          <input name="bottles" type="number" step="1"value={bottles} onChange={e => setBottles(e.target.value)}></input>
        </div>
        <div>
          <label>Time </label>
          <input name="time" type="number" step="1"value={time} onChange={e => setTime(e.target.value)}></input>
        </div>
        <div>
          <label>Gender </label>
          <input type="radio" name="gender" value="male" defaultChecked onChange={e => setGender(e.target.value)} /><label>Male</label>
          <input type="radio" name="gender" value="female" onChange={e => setGender(e.target.value)} /><label>Female</label>
        </div>
        <br></br>
        <div>
          <output>{result.toFixed(1)}</output>
        </div>
        <br></br>
        <button>Calculate</button>
      </form>
    </>
  );
}

export default Alcometer;



