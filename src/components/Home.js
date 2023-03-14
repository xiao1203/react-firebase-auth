// import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';
import { getAuth, signOut } from 'firebase/auth';
import { firebaseApp } from '../firebase';
import { useAuthContext } from '../context/AuthContext';
import { useEffect } from 'react';
const auth = getAuth(firebaseApp);

const Home = () => {
  const navigate = useNavigate();
  const { user } = useAuthContext();
  const handleLogout = () => {
    signOut(auth);
    navigate('/login');
  };

  useEffect(() => {
    if (!user) {
      console.log('userの存在確認OK');
      navigate('/login');
      console.log('リダイレクトできてない？');
    }
  }, []);
  console.log('userの存在確認NG');
  return (
    <div>
      <h1>ホームページ</h1>
      <button onClick={handleLogout}>ログアウト</button>
    </div>
  );
};

export default Home;
