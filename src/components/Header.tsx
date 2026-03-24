export default function Header() {
  return (
    <header className="bg-black/95 backdrop-blur-sm fixed w-full top-0 z-50 border-b border-red-600/20">
      <div className="container mx-auto px-4 py-4 flex justify-center items-center">
        <img
          src="/image.png"
          alt="DEA Detalhe Estética Automotiva"
          className="h-16 md:h-20 w-auto"
        />
      </div>
    </header>
  );
}
