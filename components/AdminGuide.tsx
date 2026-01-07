
import React from 'react';

interface Props {
  onBack: () => void;
}

const AdminGuide: React.FC<Props> = ({ onBack }) => {
  return (
    <div className="min-h-screen p-6 lg:p-20 bg-slate-950">
      <div className="max-w-4xl mx-auto">
        <button onClick={onBack} className="text-slate-500 hover:text-white mb-10">&larr; Voltar para Home</button>
        
        <h1 className="text-4xl font-bold mb-8">Guia de Implementação e Vendas</h1>
        
        <div className="space-y-12">
          {/* Kiwify Section */}
          <section className="p-8 bg-slate-900 border border-slate-800 rounded-3xl">
            <h2 className="text-2xl font-bold mb-6 text-blue-400">1. Como Vender via Kiwify</h2>
            <div className="space-y-6 text-slate-400">
              <div>
                <h3 className="font-bold text-white mb-2">Estrutura do Produto:</h3>
                <p>Crie um produto do tipo "Assinatura" ou "Pagamento Único". Configure as ofertas conforme os planos (Standard, Pro, Enterprise).</p>
              </div>
              <div>
                <h3 className="font-bold text-white mb-2">Entrega do Acesso:</h3>
                <p>No checkout, use a opção "Página de Obrigado Customizada" para redirecionar o cliente diretamente para a tela de Login/Cadastro do seu Web App com o e-mail pré-preenchido via parâmetro URL.</p>
              </div>
              <div>
                <h3 className="font-bold text-white mb-2">Integração Webhook:</h3>
                <p>Configure um Webhook na Kiwify para disparar quando o pagamento for aprovado. O seu backend (ou Firebase Function) recebe esse sinal e libera o acesso do e-mail do cliente no banco de dados.</p>
              </div>
            </div>
          </section>

          {/* PDF Automation Section */}
          <section className="p-8 bg-slate-900 border border-slate-800 rounded-3xl">
            <h2 className="text-2xl font-bold mb-6 text-emerald-400">2. Automação de PDFs Semanalmente</h2>
            <p className="text-slate-400 mb-6">Para exibir novos PDFs sem mexer no código, siga um destes métodos simples:</p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-slate-800/50 rounded-2xl border border-slate-700">
                <h3 className="font-bold text-white mb-3">Google Drive (Simplificado)</h3>
                <ol className="list-decimal list-inside space-y-2 text-sm text-slate-400">
                  <li>Crie uma pasta pública no Drive.</li>
                  <li>Use a Google Drive API para listar arquivos.</li>
                  <li>O App faz um <code>fetch</code> toda vez que carrega para listar os IDs dos arquivos.</li>
                  <li>Arraste o novo PDF para a pasta e ele aparece instantaneamente.</li>
                </ol>
              </div>
              <div className="p-6 bg-slate-800/50 rounded-2xl border border-slate-700">
                <h3 className="font-bold text-white mb-3">Firebase Storage (Recomendado)</h3>
                <ol className="list-decimal list-inside space-y-2 text-sm text-slate-400">
                  <li>Crie um bucket no Firebase.</li>
                  <li>Utilize a função <code>listAll()</code> do SDK do Firebase Storage.</li>
                  <li>Filtre por data para mostrar os mais recentes.</li>
                  <li>Suba o arquivo pelo console do Firebase ou via Script Python agendado.</li>
                </ol>
              </div>
            </div>
            
            <div className="mt-8 p-4 bg-amber-900/20 border border-amber-500/30 rounded-xl">
              <p className="text-sm text-amber-500">
                <strong>Dica de Ouro:</strong> Use um arquivo <code>manifest.json</code> hospedado no Storage. O app lê esse JSON para saber os títulos e links. Assim você controla a ordem e os nomes sem precisar renomear arquivos físicos.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AdminGuide;
