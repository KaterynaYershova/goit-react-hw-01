import { useState } from "react";
import Profile from "./components/Profile/Profile";
import userData from "./userData.json";
import FriendList from "./components/FriendList/FriendList";
import friends from "./friends.json";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";
import transactions from "./transactions.json";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <FriendList friends={friends} />
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <TransactionHistory items={transactions} />
    </div>
  );
}

export default App;
