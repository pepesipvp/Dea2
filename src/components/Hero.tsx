import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const scrollToCheckout = () => {
    window.scrollTo({ top: document.getElementById('vsl')?.offsetTop || 0, behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-black via-neutral-900 to-black pt-24 pb-16 px-4">
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3806249/pexels-photo-3806249.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-10"></div>

      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="text-center space-y-8">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
            Torne-se um <span className="text-red-600">Especialista</span> em Estética Automotiva
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Aprenda as técnicas mais avançadas e transforme sua paixão em um negócio lucrativo
          </p>

          <button
            onClick={scrollToCheckout}
            className="group relative inline-flex items-center gap-3 bg-red-600 hover:bg-red-700 text-white font-bold text-lg md:text-xl px-8 md:px-12 py-4 md:py-6 rounded-lg transition-all duration-300 transform hover:scale-105 animate-pulse hover:animate-none shadow-2xl shadow-red-600/50"
          >
            Quero Garantir Minha Vaga
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </button>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 pt-8 text-gray-400">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm md:text-base font-medium">Vagas Limitadas</span>
            </div>
            <div className="h-6 w-px bg-gray-600 hidden md:block"></div>
            <div className="flex items-center gap-3">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-lg">★</span>
                ))}
              </div>
              <div className="text-sm md:text-base">
                <span className="font-semibold text-white">4.9/5</span>
                <span className="text-gray-500"> (2.347 alunos)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
