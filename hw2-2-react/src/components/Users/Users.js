import {useEffect, useState} from "react";
// import {servAxios} from "../../service/servAxios/servAxios";
// import axios from "axios";
import {Fetch} from "../../service/Fetch/Fench";
import User from "../User/User";


const Users = () => {
  const [users,setUsers]= useState([])
    useEffect(() => {
Fetch.then(value => setUsers(value) )
    }, [])

    return (
  <div>
      {users.filter(value => value.launch_year!==2020).map(user =><User key={user.flight_numbe} user={user}/> )}
  </div>
);
};

export {Users};