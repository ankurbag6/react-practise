import { useEffect, useState } from "react";

/*
**Build: User Directory (30 min, comment block first)**

Data URL:
```
https://jsonplaceholder.typicode.com/users
```
It returns an array of users like `{ id, name, email, company: { name } }`.

> 1. When the page loads, fetch the users from the URL.
> 2. While loading, show "Loading…".
> 3. Show each user's **name**, **email** and **company name** in a list or table.
> 4. If the request fails, show an error message and a **Retry** button that fetches again.
> 5. If the response is an empty array, show "No users found."
> 6. Add a search box that filters the list by name as you type. It's not case-sensitive.
>
> Stretch: if the component unmounts mid-request, don't set state. Use `AbortController` or an ignore flag.

To test the error state, change the URL to `.../userz` temporarily. For the empty state, filter with a search that matches nothing. Seeing "No users found." there is fine too.

Before you code, think about:
- How many pieces of state do you need? Write them down, and keep it minimal.
- Is the filtered list state, or is it derived?

The timer starts when you say so. Stop at minute 25 to reread the spec.

Implementation Plan:
1. Users Component
- on load : make a fetch call to https://jsonplaceholder.typicode.com/users -> 10
- store in the users array -> STATE 
- Add Loading component : while fetching show the loading component
- Add user component : **name**, **email** and **company name** list
- Add search component : Input text, onChangeEvent -> filter the list of users
- Add error component

STATE : users arrray, isLoading, error, searchText
EVENTS: handleSearch() -> filter the list , onLoad() -> api call -> setUsers

*/

/*
STATE:   users (raw data, never filtered), isLoading, error, searchText
DERIVED: filteredUsers = users filtered by searchText
EVENTS:  mount → fetchUsers
         retry click → fetchUsers
         type in search → setSearchText (list updates by itself)
*/

const API = "https://jsonplaceholder.typicode.com/users";

export default function Users() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [searchText, setSearchText] = useState("");

  const fetchUsers = async (signal) => {
    setIsLoading(true); // show Loading on first load AND on retry
    setError("");       // clear any old error
    try {
      const res = await fetch(API, { signal });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = await res.json();
      setUsers(data);
    } catch (err) {
      if (err.name === "AbortError") return; // component unmounted, do nothing
      setError(err.message);
    } finally {
      if (!signal?.aborted) setIsLoading(false);
    }
  };

  useEffect(() => {
    const controller = new AbortController();
    fetchUsers(controller.signal);
    return () => controller.abort(); // cancel the request if we unmount
  }, []);

  // DERIVED: never stored, never overwrites users
  const query = searchText.trim().toLowerCase();
  const filteredUsers = users.filter((u) =>
    u.name.toLowerCase().includes(query)
  );

  // one branch at a time: loading → error → empty → list
  let content;
  if (isLoading) {
    content = <p>Loading…</p>;
  } else if (error) {
    content = (
      <div role="alert">
        Error: {error} <button onClick={() => fetchUsers()}>Retry</button>
      </div>
    );
  } else if (filteredUsers.length === 0) {
    content = <p>No users found.</p>;
  } else {
    content = (
      <ul>
        {filteredUsers.map((user) => (
          <li key={user.id}>
            <strong>{user.name}</strong> · {user.email} · {user.company.name}
          </li>
        ))}
      </ul>
    );
  }

  return (
    <>
      <h1>User Directory</h1>
      <label>
        Filter by name:{" "}
        <input
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
      </label>
      {content}
    </>
  );
}
