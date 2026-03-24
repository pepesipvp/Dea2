import { Play, ArrowRight } from 'lucide-react';

export default function VSL() {
  return (
    <section id="vsl" className="bg-neutral-900 py-20 px-4">
      <div className="container mx-auto max-w-5xl">
        <div className="space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold text-white">
              Assista ao Vídeo e Descubra Como
            </h2>
            <p className="text-xl text-gray-400">
              Veja como o curso DEA pode transformar sua carreira
            </p>
          </div>

          <div className="relative aspect-video bg-black rounded-xl overflow-hidden shadow-2xl group cursor-pointer">
            <img
              src="https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg?auto=compress&cs=tinysrgb&w=1920"
              alt="Video thumbnail"
              className="w-full h-full object-cover opacity-60 group-hover:opacity-50 transition-opacity"
            />

            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 md:w-28 md:h-28 bg-red-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-2xl">
                <Play className="w-10 h-10 md:w-14 md:h-14 text-white ml-2" fill="white" />
              </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
              <p className="text-white text-lg font-semibold">▶ Clique para assistir</p>
            </div>
          </div>

          <div className="text-center">
            <button className="group inline-flex items-center gap-3 bg-red-600 hover:bg-red-700 text-white font-bold text-lg md:text-xl px-10 md:px-14 py-5 md:py-6 rounded-lg transition-all duration-300 transform hover:scale-105 animate-pulse hover:animate-none shadow-2xl shadow-red-600/50">
              Quero Garantir Minha Vaga
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
