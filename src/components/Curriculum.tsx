import { Droplets, ShieldCheck, Sparkles, Wind } from 'lucide-react';

const modules = [
  {
    icon: Droplets,
    title: 'Módulo 1: Lavagem Técnica',
    description: 'Aprenda os fundamentos da lavagem técnica profissional, técnicas de pré-lavagem e uso correto de produtos.'
  },
  {
    icon: ShieldCheck,
    title: 'Módulo 2: Descontaminação',
    description: 'Domine processos de descontaminação química e mecânica para remover contaminantes da pintura.'
  },
  {
    icon: Sparkles,
    title: 'Módulo 3: Polimento',
    description: 'Técnicas avançadas de correção de pintura, uso de politrizes e sistemas de polimento.'
  },
  {
    icon: Wind,
    title: 'Módulo 4: Higienização Interna',
    description: 'Métodos profissionais de limpeza interna, tratamento de estofados e desinfecção completa.'
  }
];

export default function Curriculum() {
  return (
    <section className="bg-black py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white">
            O que você vai <span className="text-red-600">aprender</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Conteúdo completo e estruturado para você dominar a estética automotiva
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {modules.map((module, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-neutral-900 to-neutral-800 p-8 rounded-xl border border-red-600/20 hover:border-red-600/50 transition-all duration-300 hover:transform hover:scale-105 group"
            >
              <div className="flex items-start gap-6">
                <div className="bg-red-600/10 p-4 rounded-lg group-hover:bg-red-600/20 transition-colors">
                  <module.icon className="w-8 h-8 text-red-600" />
                </div>

                <div className="flex-1 space-y-3">
                  <h3 className="text-xl md:text-2xl font-bold text-white">
                    {module.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {module.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gradient-to-r from-red-600/10 to-red-900/10 border border-red-600/30 rounded-xl p-6 md:p-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-center md:text-left">
              <p className="text-2xl font-bold text-white">+ Bônus Exclusivos</p>
              <p className="text-gray-400 mt-2">Materiais complementares, templates e suporte vitalício</p>
            </div>
            <div className="bg-red-600 text-white px-6 py-3 rounded-lg font-bold text-lg whitespace-nowrap">
              4 Módulos + Bônus
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
