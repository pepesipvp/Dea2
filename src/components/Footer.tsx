export default function Footer() {
  return (
    <footer className="bg-black border-t border-red-600/20 py-8 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img
              src="/image.png"
              alt="DEA Detalhe Estética Automotiva"
              className="h-12 w-auto"
            />
          </div>

          <div className="text-center md:text-right">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} DEA Detalhe Estética Automotiva. Todos os direitos reservados.
            </p>
            <div className="flex items-center justify-center md:justify-end gap-4 mt-2">
              <a
                href="#"
                className="text-gray-500 hover:text-red-600 text-sm transition-colors"
              >
                Termos de Uso
              </a>
              <span className="text-gray-700">•</span>
              <a
                href="#"
                className="text-gray-500 hover:text-red-600 text-sm transition-colors"
              >
                Política de Privacidade
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
