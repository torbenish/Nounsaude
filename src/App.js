import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] =useState(true)

  useEffect(() => {
    axios
      .get("https://beyou-api.herokuapp.com/list_posts")
      .then((response) => {
        setPosts(response.data.posts);
        setLoading(false)
      })
      .catch(() => {
        console.log("Erro");
      });
  }, []);

  if(loading) {
    return (
      <h1>Loading</h1>
    )
  }
  return (
    <div className="app">
      <div className="cards">
        {posts.map((post, key) => {
          return (
            <div className="card">
              <div className="card-body" key={key}>
                <h1>{post.title}</h1>
                <div className="line"></div>
                <h2>{post.content}</h2>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
