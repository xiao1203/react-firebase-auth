// import { auth } from '../firebase';
import { useNavigate, Redirect } from 'react-router-dom';
import { getAuth, signOut } from 'firebase/auth';
import { firebaseApp } from '../firebase';
import { useAuthContext } from '../context/AuthContext';
const auth = getAuth(firebaseApp);

const Home = () => {
  const navigate = useNavigate();
  const { user } = useAuthContext();
  const handleLogout = () => {
    signOut(auth);
    navigate('/login');
  };

  if (!user) {
    console.log('userの存在確認OK');
    navigate('/login');
  } else {
    console.log('userの存在確認NG');
    return (
      <div>
        <h1>ホームページ</h1>
        <button onClick={handleLogout}>ログアウト</button>
      </div>
    );
  }
};

export default Home;
