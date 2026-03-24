import { Shield, ArrowRight } from 'lucide-react';

export default function Guarantee() {
  return (
    <section className="bg-neutral-900 py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="bg-gradient-to-br from-red-600/20 to-red-900/20 border-2 border-red-600 rounded-2xl p-8 md:p-12 text-center space-y-6">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-red-600 rounded-full mb-4">
            <Shield className="w-12 h-12 text-white" />
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-white">
            Garantia Incondicional de <span className="text-red-600">7 Dias</span>
          </h2>

          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Estamos tão confiantes na qualidade do curso DEA que oferecemos uma garantia total. Se nos primeiros 7 dias você sentir que o curso não é para você, devolvemos 100% do seu investimento. Sem perguntas, sem complicações.
          </p>

          <div className="bg-black/40 rounded-xl p-6 max-w-lg mx-auto">
            <p className="text-white font-semibold mb-2">O risco é todo nosso!</p>
            <p className="text-gray-400 text-sm">
              Você tem uma semana completa para explorar todo o conteúdo e decidir se o curso atende suas expectativas.
            </p>
          </div>

          <button className="group inline-flex items-center gap-3 bg-red-600 hover:bg-red-700 text-white font-bold text-lg px-10 py-5 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-red-600/50 mt-6">
            Começar Agora Sem Riscos
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}
