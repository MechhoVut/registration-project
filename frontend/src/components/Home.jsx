import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

function Home() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-2xl shadow-xl p-10 text-center max-w-md w-full"
      >
        <h1 className="text-3xl font-bold text-slate-900 mb-3">Welcome 🎉</h1>
        <p className="text-slate-500 mb-8">You're logged in successfully.</p>

        <button
          onClick={handleLogout}
          className="bg-slate-900 text-white font-semibold py-2.5 px-6 rounded-xl hover:bg-red-600 transition"
        >
          Logout
        </button>
      </motion.div>
    </div>
  );
}

export default Home;