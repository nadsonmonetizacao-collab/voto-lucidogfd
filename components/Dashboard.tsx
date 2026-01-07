
import React, { useState, useEffect } from 'react';
import { User, AnalysisTool, WeeklyPdf } from '../types';
import { Icons } from '../constants';
import { analyzeText } from '../services/geminiService';

interface Props {
  user: User;
  onLogout: () => void;
}

const Dashboard: React.FC<Props> = ({ user, onLogout }) => {
  const [activeTool, setActiveTool] = useState<AnalysisTool | null>(null);
  const [inputText, setInputText] = useState('');
  const [result, setResult] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [pdfs, setPdfs] = useState<WeeklyPdf[]>([]);

  // Simulation of automated PDF fetching from an external source (e.g. Firebase or JSON)
  useEffect(() => {
    // In a real scenario, fetch this from a Cloud Storage list API or a dedicated manifest JSON
    const mockPdfs: WeeklyPdf[] = [
      { id: '1', title: 'Relatório Geopolítico - Semana 14', date: '01/04/2024', url: '#' },
      { id: '2', title: 'Análise de Mercado de IA - Semana 13', date: '25/03/2024', url: '#' },
      { id: '3', title: 'Tendências em Cibersegurança - Março', date: '20/03/2024', url: '#' },
    ];
    setPdfs(mockPdfs);
  }, []);

  const handleAction = async () => {
    if (!inputText || !activeTool) return;
    setLoading(true);
    setResult(null);
    const output = await analyzeText(inputText, activeTool);
    setResult(output || "Ocorreu um erro.");
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-slate-950 flex flex-col lg:flex-row">
      {/* Sidebar */}
      <aside className="w-full lg:w-80 bg-slate-900 border-r border-slate-800 p-8 flex flex-col">
        <div className="text-xl font-bold text-blue-500 mb-10">VERITAS DASHBOARD</div>
        
        <div className="flex-grow">
          <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">Ferramentas de IA</div>
          <div className="space-y-2 mb-10">
            {[
              { id: 'verifier', name: 'Verificar Notícia', icon: <Icons.Verify /> },
              { id: 'translator', name: 'Traduzir Discurso', icon: <Icons.Translate /> },
              { id: 'proposals', name: 'Analisar Proposta', icon: <Icons.Proposal /> }
            ].map((tool) => (
              <button
                key={tool.id}
                onClick={() => { setActiveTool(tool.id as AnalysisTool); setResult(null); }}
                className={`w-full flex items-center gap-3 p-4 rounded-xl text-left transition ${activeTool === tool.id ? 'bg-blue-600 text-white' : 'hover:bg-slate-800 text-slate-400'}`}
              >
                {tool.icon}
                <span className="font-medium">{tool.name}</span>
              </button>
            ))}
          </div>

          <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">PDFs Semanais</div>
          <div className="space-y-3">
            {pdfs.map(pdf => (
              <a 
                key={pdf.id} 
                href={pdf.url} 
                className="flex items-center gap-3 p-3 bg-slate-800/50 hover:bg-slate-800 rounded-xl border border-slate-700/50 transition group"
              >
                <div className="p-2 bg-slate-700 rounded-lg group-hover:bg-blue-600 transition">
                  <Icons.Pdf />
                </div>
                <div>
                  <div className="text-sm font-medium text-slate-200 truncate max-w-[150px]">{pdf.title}</div>
                  <div className="text-[10px] text-slate-500">{pdf.date}</div>
                </div>
              </a>
            ))}
            <div className="mt-4 p-4 bg-blue-900/20 border border-blue-500/30 rounded-xl">
              <p className="text-[10px] text-blue-400 leading-tight">
                * Novos PDFs são adicionados automaticamente toda segunda-feira.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-slate-800">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center font-bold">
              {user.email[0].toUpperCase()}
            </div>
            <div className="overflow-hidden">
              <div className="text-sm font-bold truncate">{user.email}</div>
              <div className="text-[10px] uppercase text-blue-500 font-bold tracking-widest">{user.plan}</div>
            </div>
          </div>
          <button onClick={onLogout} className="text-xs text-slate-500 hover:text-red-400 transition">Sair da conta</button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-grow p-6 lg:p-12 overflow-y-auto max-h-screen">
        {!activeTool ? (
          <div className="h-full flex flex-col items-center justify-center text-center max-w-2xl mx-auto">
            <div className="w-20 h-20 bg-blue-600/20 rounded-full flex items-center justify-center mb-8 animate-pulse">
               <div className="w-10 h-10 bg-blue-500 rounded-full shadow-lg shadow-blue-500/50" />
            </div>
            <h2 className="text-3xl font-bold mb-4">Pronto para começar?</h2>
            <p className="text-slate-400 mb-8">Escolha uma ferramenta ao lado para iniciar sua análise inteligente de informações.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
               <div className="p-6 bg-slate-900 rounded-2xl border border-slate-800 text-left">
                  <h4 className="font-bold mb-2">Dica Veritas</h4>
                  <p className="text-sm text-slate-500">Cole trechos de notícias suspeitas para verificar vieses e inconsistências históricas.</p>
               </div>
               <div className="p-6 bg-slate-900 rounded-2xl border border-slate-800 text-left">
                  <h4 className="font-bold mb-2">Relatórios</h4>
                  <p className="text-sm text-slate-500">Acesse a aba de PDFs para ver análises aprofundadas dos temas mais quentes da semana.</p>
               </div>
            </div>
          </div>
        ) : (
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="flex items-center justify-between">
               <h2 className="text-3xl font-bold capitalize">
                  {activeTool === 'verifier' && 'Verificar Notícia'}
                  {activeTool === 'translator' && 'Traduzir Discurso'}
                  {activeTool === 'proposals' && 'Analisar Proposta'}
               </h2>
               <button onClick={() => setActiveTool(null)} className="text-slate-500 hover:text-white transition">Fechar</button>
            </div>

            <div className="space-y-4">
               <textarea
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  placeholder="Cole o texto aqui..."
                  className="w-full h-48 p-6 bg-slate-900 border border-slate-800 rounded-3xl text-white placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
               />
               <button 
                  onClick={handleAction}
                  disabled={loading || !inputText}
                  className="px-8 py-4 bg-blue-600 hover:bg-blue-500 disabled:bg-slate-800 disabled:text-slate-500 rounded-2xl font-bold transition flex items-center gap-3"
               >
                  {loading ? 'Processando...' : 'Iniciar Análise'}
                  {!loading && <Icons.Verify />}
               </button>
            </div>

            {loading && (
              <div className="space-y-4">
                <div className="h-4 bg-slate-800 rounded w-3/4 animate-pulse"></div>
                <div className="h-4 bg-slate-800 rounded w-full animate-pulse"></div>
                <div className="h-4 bg-slate-800 rounded w-1/2 animate-pulse"></div>
              </div>
            )}

            {result && (
              <div className="p-8 bg-slate-900/50 border border-slate-800 rounded-3xl animate-in fade-in slide-in-from-bottom-4 duration-500">
                <h3 className="text-sm font-bold text-blue-500 uppercase tracking-widest mb-6">Resultado da Análise IA</h3>
                <div className="prose prose-invert max-w-none text-slate-300 whitespace-pre-wrap leading-relaxed">
                  {result}
                </div>
                <div className="mt-8 flex gap-3">
                  <button className="text-xs px-4 py-2 border border-slate-700 rounded-lg hover:bg-slate-800 transition">Copiar Resultado</button>
                  <button className="text-xs px-4 py-2 border border-slate-700 rounded-lg hover:bg-slate-800 transition">Salvar em Meus Favoritos</button>
                </div>
              </div>
            )}
          </div>
        )}
      </main>
    </div>
  );
};

export default Dashboard;
