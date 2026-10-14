import React, { useState } from 'react';
import { X, Lock, Mail, ArrowRight, CheckCircle2, AlertCircle, Loader2, User } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { Language } from '../utils/translations';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: Language;
  onSuccess?: () => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose, language, onSuccess }) => {
  const { login, register, resetPassword } = useAuth();
  
  const [tab, setTab] = useState<'login' | 'register' | 'forgot'>('login');
  
  // Form fields
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  
  // UI states
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  if (!isOpen) return null;

  const isRu = language === 'ru';

  const resetForm = () => {
    setError(null);
    setSuccessMessage(null);
  };

  const handleSwitchTab = (newTab: 'login' | 'register' | 'forgot') => {
    resetForm();
    setTab(newTab);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccessMessage(null);
    setLoading(true);

    try {
      if (tab === 'login') {
        if (!email.trim() || !password) {
          throw new Error(isRu ? 'Пожалуйста, введите Email и пароль' : 'Please enter Email and password');
        }
        await login(email, password);
        if (onSuccess) onSuccess();
        onClose();
      } else if (tab === 'register') {
        const trimmedName = fullName.trim();
        if (!trimmedName) {
          throw new Error(isRu ? 'Пожалуйста, укажите ваше имя (обязательное поле)' : 'Please enter your name (required)');
        }
        if (trimmedName.length < 2) {
          throw new Error(isRu ? 'Имя должно содержать не менее 2 букв' : 'Name must be at least 2 characters');
        }
        if (!email.trim() || !password) {
          throw new Error(isRu ? 'Заполните обязательные поля: Email и пароль' : 'Email and password are required');
        }
        if (password.length < 6) {
          throw new Error(isRu ? 'Пароль должен содержать не менее 6 символов' : 'Password must be at least 6 characters');
        }
        if (password !== confirmPassword) {
          throw new Error(isRu ? 'Пароли не совпадают' : 'Passwords do not match');
        }

        await register(email, password, fullName.trim());
        if (onSuccess) onSuccess();
        onClose();
      } else if (tab === 'forgot') {
        if (!email.trim()) {
          throw new Error(isRu ? 'Введите ваш Email для восстановления' : 'Please enter your email');
        }
        await resetPassword(email);
        setSuccessMessage(
          isRu 
            ? 'Письмо со ссылкой для сброса пароля отправлено на ваш Email!' 
            : 'Password reset link has been sent to your email!'
        );
      }
    } catch (err: any) {
      console.error('Auth error:', err);
      let msg = err.message || (isRu ? 'Произошла ошибка при входе' : 'Authentication failed');
      
      if (err.code === 'auth/invalid-credential' || err.code === 'auth/wrong-password' || err.code === 'auth/user-not-found') {
        msg = isRu ? 'Неверный email или пароль' : 'Invalid email or password';
      } else if (err.code === 'auth/email-already-in-use') {
        msg = isRu ? 'Пользователь с таким email уже зарегистрирован' : 'Email is already registered';
      } else if (err.code === 'auth/weak-password') {
        msg = isRu ? 'Слишком простой пароль (минимум 6 символов)' : 'Password is too weak (min 6 characters)';
      } else if (err.code === 'auth/invalid-email') {
        msg = isRu ? 'Некорректный формат email' : 'Invalid email format';
      }
      
      setError(msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-brand-dark/70 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <div 
        className="bg-white w-full max-w-lg rounded-[32px] md:rounded-[40px] shadow-2xl p-6 sm:p-10 relative overflow-hidden max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Background glow decoration */}
        <div className="absolute -top-16 -right-16 w-40 h-40 bg-brand-blue/15 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute -bottom-16 -left-16 w-40 h-40 bg-amber-400/15 rounded-full blur-3xl pointer-events-none"></div>

        {/* Close button */}
        <button 
          onClick={onClose}
          aria-label="Close"
          className="absolute top-5 right-5 w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center text-gray-500 hover:text-brand-dark transition-all z-10"
        >
          <X size={20} />
        </button>

        {/* Header Tabs */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-2xl font-black text-brand-dark tracking-tight">HappyBox</span>
            <span className="text-xs font-bold uppercase tracking-wider bg-brand-blue/10 text-brand-blue px-2.5 py-1 rounded-full">
              {isRu ? 'Личный кабинет' : 'Client Portal'}
            </span>
          </div>

          {tab !== 'forgot' ? (
            <div className="grid grid-cols-2 bg-gray-100 p-1.5 rounded-2xl mt-4">
              <button
                type="button"
                onClick={() => handleSwitchTab('login')}
                className={`py-2.5 text-sm font-bold rounded-xl transition-all ${
                  tab === 'login' 
                    ? 'bg-white text-brand-dark shadow-sm' 
                    : 'text-gray-500 hover:text-brand-dark'
                }`}
              >
                {isRu ? 'Вход в аккаунт' : 'Sign In'}
              </button>
              <button
                type="button"
                onClick={() => handleSwitchTab('register')}
                className={`py-2.5 text-sm font-bold rounded-xl transition-all ${
                  tab === 'register' 
                    ? 'bg-white text-brand-dark shadow-sm' 
                    : 'text-gray-500 hover:text-brand-dark'
                }`}
              >
                {isRu ? 'Регистрация' : 'Create Account'}
              </button>
            </div>
          ) : (
            <div className="mt-4 flex items-center justify-between">
              <h3 className="text-lg font-bold text-brand-dark">
                {isRu ? 'Восстановление доступа' : 'Password Reset'}
              </h3>
              <button
                type="button"
                onClick={() => handleSwitchTab('login')}
                className="text-xs font-bold text-brand-blue hover:underline"
              >
                {isRu ? '← Назад ко входу' : '← Back to sign in'}
              </button>
            </div>
          )}
        </div>

        {/* Error / Success alerts */}
        {error && (
          <div className="mb-4 p-3.5 bg-red-50 border border-red-200 rounded-2xl flex items-start gap-3 text-red-600 text-xs font-semibold animate-shake">
            <AlertCircle size={18} className="shrink-0 mt-0.5" />
            <span>{error}</span>
          </div>
        )}

        {successMessage && (
          <div className="mb-4 p-3.5 bg-emerald-50 border border-emerald-200 rounded-2xl flex items-start gap-3 text-emerald-700 text-xs font-semibold">
            <CheckCircle2 size={18} className="shrink-0 mt-0.5" />
            <span>{successMessage}</span>
          </div>
        )}

        {/* Scrollable Form Body */}
        <form onSubmit={handleSubmit} className="overflow-y-auto pr-1 space-y-4">
          {/* Full Name field (for register) */}
          {tab === 'register' && (
            <div>
              <label className="block text-xs font-extrabold uppercase tracking-wider text-gray-500 mb-1.5">
                {isRu ? 'Имя и Фамилия' : 'Full Name'} <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <User size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder={isRu ? 'Имя Фамилия' : 'Full Name'}
                  className="w-full bg-gray-50 border border-gray-200 rounded-2xl pl-11 pr-4 py-3 text-sm font-semibold text-brand-dark placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue transition-all"
                />
              </div>
              <p className="mt-1.5 text-[11px] text-brand-blue font-bold">
                {isRu 
                  ? '💡 Обязательное поле: на основе ваших инициалов формируется персональный код с дефисом (например: II-8140 или DK-8140)'
                  : '💡 Required field: your personal ID with a hyphen (e.g. II-8140 or DK-8140) is generated from your initials'}
              </p>
            </div>
          )}

          {/* Email field */}
          <div>
            <label className="block text-xs font-extrabold uppercase tracking-wider text-gray-500 mb-1.5">
              Email <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="example@example.com"
                className="w-full bg-gray-50 border border-gray-200 rounded-2xl pl-11 pr-4 py-3 text-sm font-semibold text-brand-dark placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue transition-all"
              />
            </div>
          </div>

          {/* Password field (for login and register) */}
          {tab !== 'forgot' && (
            <div>
              <div className="flex justify-between items-center mb-1.5">
                <label className="text-xs font-extrabold uppercase tracking-wider text-gray-500">
                  {isRu ? 'Пароль' : 'Password'}
                </label>
                {tab === 'login' && (
                  <button
                    type="button"
                    onClick={() => handleSwitchTab('forgot')}
                    className="text-xs font-bold text-brand-blue hover:underline"
                  >
                    {isRu ? 'Забыли пароль?' : 'Forgot password?'}
                  </button>
                )}
              </div>
              <div className="relative">
                <Lock size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full bg-gray-50 border border-gray-200 rounded-2xl pl-11 pr-4 py-3 text-sm font-semibold text-brand-dark placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue transition-all"
                />
              </div>
            </div>
          )}

          {/* Confirm password field for register */}
          {tab === 'register' && (
            <div>
              <label className="block text-xs font-extrabold uppercase tracking-wider text-gray-500 mb-1.5">
                {isRu ? 'Подтвердите пароль' : 'Confirm Password'}
              </label>
              <div className="relative">
                <Lock size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="password"
                  required
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full bg-gray-50 border border-gray-200 rounded-2xl pl-11 pr-4 py-3 text-sm font-semibold text-brand-dark placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue transition-all"
                />
              </div>
            </div>
          )}

          {/* Submit button */}
          <div className="pt-2">
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-brand-dark hover:bg-brand-blue text-white py-3.5 px-6 rounded-2xl font-black text-sm tracking-wide transition-all shadow-xl shadow-gray-200 active:scale-95 flex items-center justify-center gap-2 disabled:opacity-50 disabled:pointer-events-none"
            >
              {loading ? (
                <>
                  <Loader2 size={18} className="animate-spin" />
                  <span>{isRu ? 'Загрузка...' : 'Please wait...'}</span>
                </>
              ) : (
                <>
                  <span>
                    {tab === 'login' && (isRu ? 'Войти в личный кабинет' : 'Sign In')}
                    {tab === 'register' && (isRu ? 'Зарегистрироваться' : 'Create Account')}
                    {tab === 'forgot' && (isRu ? 'Отправить ссылку' : 'Send Reset Link')}
                  </span>
                  <ArrowRight size={16} />
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
