// import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';
import { getAuth, signOut } from 'firebase/auth';
import { firebaseApp } from '../firebase';
const auth = getAuth(firebaseApp);

const Home = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    signOut(auth);
    navigate('/login');
  };
  return (
    <div>
      <h1>ホームページ</h1>
      <button onClick={handleLogout}>ログアウト</button>
    </div>
  );
};

export default Home;
