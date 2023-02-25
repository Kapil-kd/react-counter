import react,{useState} from "react"

export const Counter =()=>{
 const [count,setCount] = useState(0);

 return(
    <div className="main">
    <h1>Counter</h1>
    <p className={count>0 ? "positive" : count<0 ? "negative" : "null"}>{count}</p>
    <button type="button" onClick={()=>setCount(count+1)}>Increase</button>
    <button type="button" onClick={()=>setCount(0)}>Reset</button>
    <button type="button" onClick={()=>setCount(count-1)}>Decrease</button>

    </div>
 )


}