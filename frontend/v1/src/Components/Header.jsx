import HomeNav from "./HomeNav";

export default function Header() {
  return (
    <>
      <header className="w-full bg-white-900 px-4 py-4 md:px-12 lg:px-20">
        <div className="flex flex items-center gap-3 md:flex-row md:gap-2">

          {/* Left logo */}
          <a href="/" aria-label="Home" className="group">
            <div className="w-12 md:w-22 aspect-[2/1] relative">
              <img
                src="/svitlogo.webp"
                alt="SVIT Logo"
                decoding="async"
                className="object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          </a>

          {/* Centre text */}
          <div className="min-w-0 flex-1 text-black text-center">
            <p className="text-[10px] sm:text-sm md:text-base leading-tight">
              Loknete Dr. Balasaheb Vikhe Patil (Padma Bhushan Awardee)
            </p>
            <h1 className="text-sm sm:text-base md:text-2xl font-bold leading-tight">
              Sir Visvesvaraya Institute Of Technology, Nashik
            </h1>
          </div>

          {/* Right logo */}
          <a href="/" aria-label="Home" className="group">
            <img
              src="/SAHEB1.webp"
              alt="Saheb Logo"
              className="w-16 sm:w-20 md:w-[120px] transition-transform duration-300 group-hover:scale-105"
            />
          </a>
        </div>
      </header>

      <HomeNav />
    </>
  );
}
