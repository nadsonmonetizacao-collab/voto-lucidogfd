
import React from 'react';
import { User } from '../types';

interface Props {
  onSelect: (plan: User['plan']) => void;
}

const Plans: React.FC<Props> = ({ onSelect }) => {
  const plans = [
    { id: 'free', name: 'Standard', price: 'R$ 0', features: ['3 análises/dia', 'PDFs do mês atual', 'Suporte comum'] },
    { id: 'pro', name: 'Professional', price: 'R$ 97', features: ['Análises ilimitadas', 'Todos os PDFs históricos', 'Prioridade na IA', 'Suporte prioritário'], highlight: true },
    { id: 'enterprise', name: 'Enterprise', price: 'R$ 297', features: ['Multi-usuários', 'Relatórios customizados', 'API Access', 'Account Manager'] }
  ];

  return (
    <div className="min-h-screen py-20 px-6 bg-slate-950">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">Escolha seu Nível de Acesso</h2>
        <p className="text-slate-400">Desbloqueie o poder total da inteligência analítica.</p>
      </div>
      
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        {plans.map((plan) => (
          <div 
            key={plan.id}
            className={`p-10 rounded-3xl border ${plan.highlight ? 'border-blue-500 bg-slate-900 shadow-2xl shadow-blue-500/10' : 'border-slate-800 bg-slate-900/50'} flex flex-col`}
          >
            <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
            <div className="text-3xl font-bold mb-6">{plan.price}<span className="text-sm font-normal text-slate-500">/mês</span></div>
            <ul className="space-y-4 mb-10 flex-grow">
              {plan.features.map((f, i) => (
                <li key={i} className="flex items-center gap-2 text-slate-400 text-sm">
                  <span className="text-emerald-500">✓</span> {f}
                </li>
              ))}
            </ul>
            <button 
              onClick={() => onSelect(plan.id as User['plan'])}
              className={`w-full py-4 rounded-xl font-bold transition ${plan.highlight ? 'bg-blue-600 hover:bg-blue-500' : 'bg-slate-800 hover:bg-slate-700'}`}
            >
              Escolher Plano
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Plans;
