import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import axios from 'axios';
import { Link } from 'react-router-dom';
import RegisterLayout from './RegisterLayout';
import {
  formVariants,
  errorVariants,
  messageVariants,
  buttonMotionProps
} from '../animations/formAnimations';

function RegistrationForm() {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [errors, setErrors] = useState({});
  const [successMsg, setSuccessMsg] = useState('');
  const [serverError, setServerError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name cannot be empty.';
    if (!formData.email.trim()) newErrors.email = 'Email cannot be empty.';
    if (formData.password.length < 8) newErrors.password = 'Password must be at least 8 characters.';
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
      const res = await axios.post('http://localhost:5000/api/auth/register', formData);
      setSuccessMsg(res.data.message || 'Registered successfully!');
      setFormData({ name: '', email: '', password: '' });
      setErrors({});
    } catch (err) {
      setServerError(err.response?.data?.message || 'Something went wrong. Try again.');
    } finally {
      setLoading(false);
    }
  };

  const inputClass = (field) =>
    `w-full px-4 py-3 bg-white/90 border rounded-xl text-slate-900 placeholder-slate-400
     focus:outline-none focus:ring-2 focus:bg-white transition
     ${errors[field] ? 'border-red-400 focus:ring-red-300' : 'border-white/40 focus:ring-white/60'}`;

  return (
    <RegisterLayout
      title="Create your account"
      subtitle="Sign up in seconds and get started right away."
    >
      <motion.form
        onSubmit={handleSubmit}
        variants={formVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="mb-4">
          <label className="block text-sm font-medium text-white/90 mb-1.5">Name</label>
          <input
            type="text"
            name="name"
            placeholder="Jane Doe"
            value={formData.name}
            onChange={handleChange}
            className={inputClass('name')}
          />
          <AnimatePresence>
            {errors.name && (
              <motion.p variants={errorVariants} initial="hidden" animate="visible" exit="exit" className="text-red-200 text-xs mt-1.5">
                {errors.name}
              </motion.p>
            )}
          </AnimatePresence>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-white/90 mb-1.5">Email</label>
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
              <motion.p variants={errorVariants} initial="hidden" animate="visible" exit="exit" className="text-red-200 text-xs mt-1.5">
                {errors.email}
              </motion.p>
            )}
          </AnimatePresence>
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-white/90 mb-1.5">Password</label>
          <input
            type="password"
            name="password"
            placeholder="At least 8 characters"
            value={formData.password}
            onChange={handleChange}
            className={inputClass('password')}
          />
          <AnimatePresence>
            {errors.password && (
              <motion.p variants={errorVariants} initial="hidden" animate="visible" exit="exit" className="text-red-200 text-xs mt-1.5">
                {errors.password}
              </motion.p>
            )}
          </AnimatePresence>
        </div>

        <motion.button
          type="submit"
          disabled={loading}
          {...buttonMotionProps}
          className="w-full bg-white text-slate-900 font-semibold py-3 rounded-xl hover:bg-white/90 transition disabled:opacity-60"
        >
          {loading ? 'Creating account...' : 'Create account'}
        </motion.button>

        <AnimatePresence>
          {successMsg && (
            <motion.p variants={messageVariants} initial="hidden" animate="visible" exit="exit" className="text-green-200 text-sm text-center mt-4">
              {successMsg} ✅
            </motion.p>
          )}
          {serverError && (
            <motion.p variants={messageVariants} initial="hidden" animate="visible" exit="exit" className="text-red-200 text-sm text-center mt-4">
              {serverError}
            </motion.p>
          )}
        </AnimatePresence>

        <p className="text-center text-sm text-white/80 mt-6">
          Already have an account?{' '}
          <Link to="/login" className="text-white font-semibold underline hover:text-white/80">
            Log in
          </Link>
        </p>
      </motion.form>
    </RegisterLayout>
  );
}

export default RegistrationForm;