import { useEffect, useState } from "react";
import New from "./new";

function ExternalUser()
{

      const [users , setUsers] = useState([]);


      useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=>res.json())
        .then(data=>setUsers(data))

      },[])
       

    return(
        <div>
            <h1>External User:{users.length}</h1>
            {
                // users.map((user)=> <li>{user.name}</li>)
                users.map((user)=><New  name1={user.name} email={user.email}/>)
            }
        </div>
    )
}

export default ExternalUser;