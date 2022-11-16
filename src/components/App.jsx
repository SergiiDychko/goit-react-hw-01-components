import './App.css';
import { Profile } from './profile/Profile';
import { Statistics } from './statistics/Statistics';
import { FriendList } from './friendList/FriendList';
import user from '../data/user.json'
import data from '../data/data.json'
import friends from '../data/friends.json'
export const App = () => {
  return (
    <div className="container">
      <Profile
        avatar={user.avatar}
        username={user.username}
        tag={user.tag}
        location={user.location}
        stats={user.stats}
      />
      <Statistics stats={data} title="Upload stats" />
      <FriendList friends={friends} />
    </div>
  );
}