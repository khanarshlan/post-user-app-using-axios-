// Import React, useState, useEffect and axios modules
import react, { useState, useEffect } from "react";
import axios from "axios";

// Create a functional component called App
function App() {

  // Define two state variables, users and posts, and initialize them with an empty string
  const [users, setUsers] = useState("");
  const [posts, setPosts] = useState("");

  // Define an asynchronous function to GET users from the API
  const getUsers = async () => {
    try {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      // Set the users state variable with the fetched data
      setUsers(data);
    } catch (error) {
      console.log(error);
    }
  };

  // Define an asynchronous function to GET posts from the API
  const handlePosts = async () => {
    try {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      // Set the posts state variable with the fetched data
      setPosts(data);
    } catch (error) {
      console.log(error);
    }
  };

  // Call the getUsers function only once, when the component is mounted
  useEffect(() => {
    getUsers();
  }, []);

  // Render the following JSX
  return (
    <>
      <div className="container">
        <h1 className="text-center">Post Users App</h1>
        <button className="btn btn-success" onClick={handlePosts}>
          Load Posts
        </button>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              {posts && // If the posts state variable is truthy, map through each post and render a card with its content
                posts.map((post) => (
                  <div className="card p-3 mt-2" key={post.userId}>
                    <p>{post.id}</p>
                    <p>{post.title}</p>
                    <p>{post.body}</p>
                  </div>
                ))}
            </div>
            <div className="col-md-6">
              {users && // If the users state variable is truthy, map through each user and render a card with its content
                users.map((user) => (
                  <div className="card p-3 mt-2" key={user.id}>
                    <p>{user.name}</p>
                    <p>{user.email}</p>
                    <p>{user.phone}</p>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// Export the App component as the default export of this module
export default App;
