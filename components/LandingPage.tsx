
import React from 'react';

interface Props {
  onStart: () => void;
  onAdmin: () => void;
}

const LandingPage: React.FC<Props> = ({ onStart, onAdmin }) => {
  return (
    <div className="flex flex-col">
      {/* Navbar */}
      <nav className="p-6 flex justify-between items-center max-w-7xl mx-auto w-full">
        <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">
          VERITAS AI
        </div>
        <div className="flex gap-4">
          <button onClick={onAdmin} className="text-slate-400 hover:text-white transition">Como Funciona</button>
          <button onClick={onStart} className="px-6 py-2 bg-blue-600 hover:bg-blue-500 rounded-full font-semibold transition">Acessar App</button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="px-6 py-20 text-center max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">
          Decifre a Verdade com <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">IA de Elite</span>
        </h1>
        <p className="text-xl text-slate-400 mb-10 leading-relaxed">
          Em um mundo inundado por desinformação, a clareza é seu maior ativo. Veritas AI utiliza os modelos Gemini 3 para analisar notícias, discursos e propostas em tempo real.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <button onClick={onStart} className="px-8 py-4 bg-blue-600 hover:bg-blue-500 rounded-xl font-bold text-lg shadow-lg shadow-blue-500/20 transition transform hover:scale-105">
            Começar Agora
          </button>
        </div>
      </section>

      {/* Problem & Solution */}
      <section className="bg-slate-900/50 py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-blue-500 font-bold tracking-widest uppercase text-sm">O Problema</span>
            <h2 className="text-3xl font-bold mt-4 mb-6">A Era da Infoxicação</h2>
            <p className="text-slate-400 mb-4">
              90% das informações consumidas hoje possuem viés oculto ou são deliberadamente distorcidas. Tomar decisões baseadas em notícias falsas pode custar caro para sua carreira e seus investimentos.
            </p>
            <ul className="space-y-3 text-slate-300">
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-red-500 rounded-full" /> Fake News impossíveis de detectar a olho nu
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-red-500 rounded-full" /> Discursos políticos carregados de manipulação
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-red-500 rounded-full" /> Propostas complexas com "letras miúdas" perigosas
              </li>
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-6 bg-slate-800 rounded-2xl border border-slate-700">
              <h3 className="font-bold text-blue-400 mb-2">Neutralidade</h3>
              <p className="text-sm text-slate-500">IA treinada para remover vieses cognitivos humanos.</p>
            </div>
            <div className="p-6 bg-slate-800 rounded-2xl border border-slate-700">
              <h3 className="font-bold text-emerald-400 mb-2">Velocidade</h3>
              <p className="text-sm text-slate-500">Análise de mil páginas em milissegundos.</p>
            </div>
            <div className="p-6 bg-slate-800 rounded-2xl border border-slate-700">
              <h3 className="font-bold text-purple-400 mb-2">Precisão</h3>
              <p className="text-sm text-slate-500">Conectado às maiores bases de fact-checking global.</p>
            </div>
            <div className="p-6 bg-slate-800 rounded-2xl border border-slate-700">
              <h3 className="font-bold text-amber-400 mb-2">Clareza</h3>
              <p className="text-sm text-slate-500">Relatórios semanais mastigados em PDF.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 px-6 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-16">Por que confiar na Veritas?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: 'Análise Profunda', desc: 'Não apenas diz se é verdade, mas explica o PORQUÊ.' },
            { title: 'Tradução Contextual', desc: 'Traduza discursos de líderes mundiais sem perder o tom.' },
            { title: 'PDFs Semanais', desc: 'Receba curadorias exclusivas das tendências globais.' }
          ].map((item, i) => (
            <div key={i} className="p-8 bg-slate-900 border border-slate-800 rounded-3xl hover:border-blue-500/50 transition cursor-default">
              <h3 className="text-xl font-bold mb-4">{item.title}</h3>
              <p className="text-slate-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Proof */}
      <section className="bg-blue-600/10 py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="italic text-xl text-slate-300 mb-6">
            "A Veritas AI se tornou minha ferramenta essencial de trabalho. Como jornalista, economizo horas de verificação manual todos os dias."
          </p>
          <div className="flex items-center justify-center gap-3">
            <img src="https://picsum.photos/50/50?random=1" className="rounded-full" alt="User" />
            <div className="text-left">
              <div className="font-bold">Ricardo Silveira</div>
              <div className="text-sm text-slate-500">Editor-Chefe de Tecnologia</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 text-center">
        <h2 className="text-4xl font-bold mb-6">Pronto para ver o que ninguém vê?</h2>
        <p className="text-slate-400 mb-10 text-lg">Junte-se a mais de 5.000 analistas que já usam a Veritas.</p>
        <button onClick={onStart} className="px-10 py-5 bg-blue-600 hover:bg-blue-500 rounded-2xl font-bold text-xl transition shadow-xl shadow-blue-500/20">
          Obter Acesso Vitalício
        </button>
      </section>

      <footer className="p-10 border-t border-slate-900 text-center text-slate-600 text-sm">
        &copy; 2024 Veritas AI - Todos os direitos reservados.
      </footer>
    </div>
  );
};

export default LandingPage;
