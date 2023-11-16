import { useState } from "react";

function Count(){

        const [count ,setCount] = useState(34);
        // count is the value
        // setcount is a funcation
       // console.log(count)
       const Countincreate= ()=>{
        let newCount = count+1 ;
        setCount(newCount);
       }

       const discrese =() =>{
        setCount(count-1);
       }

       
   
    return(
        <div>
                   <h1>count :{count}</h1>
                   <button onClick={Countincreate}>Increase</button>

                   {/* crete a discrese button */}

                   <button  onClick={discrese}> Discrease</button>
        </div>
    )
}

export default Count;