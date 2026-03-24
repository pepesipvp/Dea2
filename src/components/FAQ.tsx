import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'Preciso ter experiência prévia para fazer o curso?',
    answer: 'Não! O curso DEA foi desenvolvido para atender desde iniciantes até profissionais que desejam aprimorar suas técnicas. Começamos do básico e avançamos gradualmente.'
  },
  {
    question: 'Quanto tempo tenho acesso ao curso?',
    answer: 'O acesso ao conteúdo do curso é vitalício! Você poderá revisar as aulas quantas vezes quiser, no seu próprio ritmo, além de ter acesso a todas as atualizações futuras.'
  },
  {
    question: 'O curso oferece certificado?',
    answer: 'Sim! Ao concluir o curso, você receberá um certificado de conclusão reconhecido no mercado, que comprova suas habilidades em estética automotiva.'
  },
  {
    question: 'Como funciona a garantia de 7 dias?',
    answer: 'Se por qualquer motivo você não ficar satisfeito com o curso nos primeiros 7 dias, basta solicitar o reembolso e devolvemos 100% do seu investimento, sem perguntas.'
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-black py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white">
            Perguntas <span className="text-red-600">Frequentes</span>
          </h2>
          <p className="text-xl text-gray-400">
            Tire suas dúvidas sobre o curso
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-neutral-900 border border-red-600/20 rounded-xl overflow-hidden transition-all duration-300 hover:border-red-600/50"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 md:px-8 py-6 flex items-center justify-between text-left gap-4"
              >
                <h3 className="text-lg md:text-xl font-semibold text-white pr-4">
                  {faq.question}
                </h3>
                <ChevronDown
                  className={`w-6 h-6 text-red-600 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-6 md:px-8 pb-6">
                  <p className="text-gray-400 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-400 mb-2">Ainda tem dúvidas?</p>
          <a
            href="#"
            className="text-red-600 hover:text-red-500 font-semibold transition-colors"
          >
            Entre em contato com nosso suporte
          </a>
        </div>
      </div>
    </section>
  );
}
