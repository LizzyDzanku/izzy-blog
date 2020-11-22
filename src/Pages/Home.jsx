 import React, {useEffect, useState} from 'react';
 import axios from 'axios';
 
 // string => "jakjdskf", int => 35
 
 
 /**
  * TODO: 1. useEffect, axios, http verbs, http requests
  * Http Verbs / Http methods: get, post, put, delete, CRUD 
  * TODO: ()=> {
  *     Tjaksdfajdskf
  * }
  * person = {
  *  name: "Desmond",
  *  age: 52,
  *  email: "db@email.com"
  * }
  * person.name
  * ["desmond", "name", "string"]
  * @returns {JSX.Element}
  * @constructor
  */
 
 function Home () {
     const [posts, setPosts] = useState([]);
 
     useEffect(()=> {
         axios.get("https://jsonplaceholder.typicode.com/posts")
         .then((response)=> {
             setPosts(response.data);
             console.log(response.data)
         })
     }, [])
 
     return (
         <div>
             <h1>Hey my homepage</h1>
 
             {
                 posts.map((post)=> {
                 return (<div className="post">
                     <h3>{post.title}</h3>
                     <p>{post.body}</p>
                     </div>)
                 })
             }
         </div>
     )
 }
 
 
 export default Home;