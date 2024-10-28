import {useState} from "react";

const Productdetails=()=> {

    const Data=[
        {"id":1,"title":"angels and demons","author":"dan brown","date":"2000"},
        {"id":2,"title":"HP","author":"jk rowling","date":"1990"}
    ]


  const [query, setQuery] = useState("");
  return (
    <div>
      <input placeholder="Enter Post Title" onChange={event => setQuery(event.target.value)} />
      {
  Data.filter(post => {
    if (query === '') {
      return post;
    } else if (post.title.toLowerCase().includes(query.toLowerCase())) {
      return post;
    }
  }).map((post, index) => (
    <div className="box" key={index}>
      <p>{post.title}</p>
    </div>
  ))
}
    </div>)
 
}

export default Productdetails