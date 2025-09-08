import React, { useState } from 'react'

function Todo() {
  const [friends, setFriends] = useState(["Enzo", "Henrique"]);
  const addFriend = () => setFriends([...friends, "Guilherme"]);
  const removeFriend = () => setFriends(friends.filter((f) => f != "Henrique"));
  const updateFriend = () => setFriends(friends.map((f) => f == "Enzo" ? "Enzo Ribas" : f))
  return (
    <div>
      {friends.map((f) => <p>{f}</p>)}
      <button onClick={addFriend}>add friend</button>
      <button onClick={removeFriend}>remove friend</button>
      <button onClick={updateFriend}>update friend</button>
    </div>
  )
}

export default Todo