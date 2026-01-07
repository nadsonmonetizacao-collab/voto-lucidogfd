
import React, { useState } from 'react';

interface Props {
  onLogin: (email: string) => void;
  onBack: () => void;
}

const Login: React.FC<Props> = ({ onLogin, onBack }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) onLogin(email);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-slate-950">
      <div className="max-w-md w-full p-10 bg-slate-900 rounded-3xl border border-slate-800 shadow-2xl">
        <button onClick={onBack} className="text-slate-500 hover:text-white mb-8 text-sm flex items-center gap-2">
          &larr; Voltar
        </button>
        <h2 className="text-3xl font-bold mb-2">Bem-vindo</h2>
        <p className="text-slate-500 mb-8">Faça login para acessar o painel Veritas.</p>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-slate-400 mb-2">E-mail</label>
            <input 
              type="email" 
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
              placeholder="seu@email.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-400 mb-2">Senha</label>
            <input 
              type="password" 
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
              placeholder="••••••••"
            />
          </div>
          <button type="submit" className="w-full py-4 bg-blue-600 hover:bg-blue-500 rounded-xl font-bold transition">
            Entrar
          </button>
        </form>
        
        <p className="text-center text-slate-500 mt-8 text-sm">
          Ainda não tem conta? <span className="text-blue-400 cursor-pointer hover:underline">Compre agora na Kiwify</span>
        </p>
      </div>
    </div>
  );
};

export default Login;
