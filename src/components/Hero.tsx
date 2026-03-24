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

        </div>
      </div>
    </section>
  );
}
