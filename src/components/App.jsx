import css from './profile/Profile.css';
import './App.css';
import { Profile } from './profile/Profile';
import user from '../user.json'

export const App = () => {
  return (
      <Profile
        avatar= {user.avatar}
        username= {user.username}
        tag= {user.tag}
        location= {user.location}
        stats= {user.stats}
      />
  );
}