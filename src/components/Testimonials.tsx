import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Carlos Eduardo Silva',
    role: 'Empreendedor',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
    text: 'O curso DEA transformou completamente minha carreira. Saí do zero e hoje tenho minha própria empresa de estética automotiva com 3 funcionários. O conhecimento é realmente profundo!'
  },
  {
    name: 'Mariana Costa',
    role: 'Detailer Profissional',
    image: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=400',
    text: 'Melhor investimento que já fiz! As técnicas de polimento são incríveis e aprendi a trabalhar com carros de luxo. Meu faturamento triplicou em 6 meses.'
  },
  {
    name: 'Rafael Mendes',
    role: 'Ex-mecânico',
    image: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=400',
    text: 'Estava cansado da mecânica e decidi migrar para estética automotiva. O curso DEA me deu toda a base necessária. Hoje trabalho com o que amo e ganho muito mais!'
  },
  {
    name: 'Lucas Ferreira',
    role: 'Estudante',
    image: 'https://images.pexels.com/photos/2474307/pexels-photo-2474307.jpeg?auto=compress&cs=tinysrgb&w=400',
    text: 'Com apenas 22 anos consegui construir uma carreira sólida graças ao curso. O suporte da equipe é excepcional e a comunidade de alunos é muito ativa!'
  }
];

export default function Testimonials() {
  return (
    <section className="bg-black py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white">
            O que nossos <span className="text-red-600">alunos dizem</span>
          </h2>
          <p className="text-xl text-gray-400">
            Histórias reais de transformação profissional
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-neutral-900 to-neutral-800 p-6 md:p-8 rounded-xl border border-red-600/20 hover:border-red-600/50 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-red-600"
                />
                <div>
                  <h4 className="text-white font-bold text-lg">{testimonial.name}</h4>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                </div>
              </div>

              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-red-600 fill-red-600" />
                ))}
              </div>

              <p className="text-gray-300 leading-relaxed">
                "{testimonial.text}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
