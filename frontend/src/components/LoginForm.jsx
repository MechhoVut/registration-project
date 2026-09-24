import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import axios from 'axios';
import { Link } from 'react-router-dom';
import AuthLayout from './AuthLayout';
import {
  formVariants,
  errorVariants,
  messageVariants,
  buttonMotionProps
} from '../animations/formAnimations';

function LoginForm() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({});
  const [successMsg, setSuccessMsg] = useState('');
  const [serverError, setServerError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.email.trim()) newErrors.email = 'Email cannot be empty.';
    if (!formData.password) newErrors.password = 'Password cannot be empty.';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccessMsg('');
    setServerError('');
    if (!validate()) return;

    setLoading(true);
    try {
      const res = await axios.post('http://localhost:5000/api/auth/login', formData);
      localStorage.setItem('token', res.data.token);
      setSuccessMsg(res.data.message || 'Logged in successfully!');
      setFormData({ email: '', password: '' });
      setErrors({});
    } catch (err) {
      setServerError(err.response?.data?.message || 'Something went wrong. Try again.');
    } finally {
      setLoading(false);
    }
  };

  const inputClass = (field) =>
    `w-full px-4 py-3 bg-slate-50 border rounded-xl text-slate-900 placeholder-slate-400
     focus:outline-none focus:ring-2 focus:bg-white transition
     ${errors[field] ? 'border-red-400 focus:ring-red-300' : 'border-slate-200 focus:ring-emerald-400 focus:border-emerald-400'}`;

  return (
    <AuthLayout
      title="Welcome back"
      subtitle="Log in to pick up right where you left off."
    >
      <motion.form
        onSubmit={handleSubmit}
        variants={formVariants}
        initial="hidden"
        animate="visible"
      >
        <h1 className="text-2xl font-bold text-slate-900 mb-1">Log in</h1>
        <p className="text-slate-500 text-sm mb-6">Enter your details to continue</p>

        <div className="mb-4">
          <label className="block text-sm font-medium text-slate-700 mb-1.5">Email</label>
          <input
            type="email"
            name="email"
            placeholder="you@example.com"
            value={formData.email}
            onChange={handleChange}
            className={inputClass('email')}
          />
          <AnimatePresence>
            {errors.email && (
              <motion.p variants={errorVariants} initial="hidden" animate="visible" exit="exit" className="text-red-500 text-xs mt-1.5">
                {errors.email}
              </motion.p>
            )}
          </AnimatePresence>
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-slate-700 mb-1.5">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Your password"
            value={formData.password}
            onChange={handleChange}
            className={inputClass('password')}
          />
          <AnimatePresence>
            {errors.password && (
              <motion.p variants={errorVariants} initial="hidden" animate="visible" exit="exit" className="text-red-500 text-xs mt-1.5">
                {errors.password}
              </motion.p>
            )}
          </AnimatePresence>
        </div>

        <motion.button
          type="submit"
          disabled={loading}
          {...buttonMotionProps}
          className="w-full bg-slate-900 text-white font-semibold py-3 rounded-xl hover:bg-emerald-600 transition disabled:opacity-60"
        >
          {loading ? 'Logging in...' : 'Log in'}
        </motion.button>

        <AnimatePresence>
          {successMsg && (
            <motion.p variants={messageVariants} initial="hidden" animate="visible" exit="exit" className="text-green-600 text-sm text-center mt-4">
              {successMsg} ✅
            </motion.p>
          )}
          {serverError && (
            <motion.p variants={messageVariants} initial="hidden" animate="visible" exit="exit" className="text-red-600 text-sm text-center mt-4">
              {serverError}
            </motion.p>
          )}
        </AnimatePresence>

        <p className="text-center text-sm text-slate-500 mt-6">
          Don't have an account?{' '}
          <Link to="/register" className="text-amber-600 font-semibold hover:underline">
            Sign up
          </Link>
        </p>
      </motion.form>
    </AuthLayout>
  );
}

export default LoginForm;