import { Award, Users, TrendingUp, CheckCircle } from 'lucide-react';

const stats = [
  { icon: Users, value: '2.347+', label: 'Alunos Formados' },
  { icon: Award, value: '10+', label: 'Anos de Experiência' },
  { icon: TrendingUp, value: '98%', label: 'Taxa de Sucesso' },
];

export default function About() {
  return (
    <section className="bg-neutral-900 py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white">
            Sobre a <span className="text-red-600">DEA Detalhe Estética Automotiva</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden border-4 border-red-600 shadow-2xl shadow-red-600/20">
              <img
                src="https://images.pexels.com/photos/4489702/pexels-photo-4489702.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Profissional DEA"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-red-600 text-white p-6 rounded-xl shadow-2xl">
              <p className="text-3xl font-bold">+2.347</p>
              <p className="text-sm">Alunos Transformados</p>
            </div>
          </div>

          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              A DEA Detalhe Estética Automotiva nasceu da paixão por transformar veículos e capacitar profissionais. Com mais de uma década de experiência no mercado, nos tornamos referência em formação de especialistas em estética automotiva.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed">
              Nosso método exclusivo combina técnicas comprovadas com as mais modernas tendências do mercado, garantindo que você esteja sempre à frente da concorrência.
            </p>

            <div className="space-y-4 pt-4">
              {[
                'Metodologia exclusiva e comprovada',
                'Certificado reconhecido no mercado',
                'Suporte durante e após o curso',
                'Comunidade ativa de profissionais'
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-red-600 flex-shrink-0" />
                  <span className="text-gray-300">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-6 mt-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center space-y-3">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-red-600/10 rounded-full">
                <stat.icon className="w-8 h-8 text-red-600" />
              </div>
              <p className="text-3xl md:text-4xl font-bold text-white">{stat.value}</p>
              <p className="text-gray-400 text-sm md:text-base">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
