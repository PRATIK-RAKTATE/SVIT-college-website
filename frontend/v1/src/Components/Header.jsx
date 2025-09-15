// Header.jsx
import HomeNav from "./HomeNav";

export default function Header() {
  return (
    <>
      <header className="w-full bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 px-4 py-4 md:px-12 lg:px-20">
        <div className="flex items-center justify-between gap-4">

          {/* Left logo – mouse-aware lift */}
          <a href="/" aria-label="Home" className="group">
            <div className="w-32 aspect-[2/1] relative">
              <img
                src="../../svitlogo.webp"
                alt="SVIT Logo"
                width="128"
                height="64"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </div>

          </a>

          {/* Centre text – truncate on tiny screens */}
          <div className="min-w-0 flex-1 text-white text-center">
            <p className="text-[11px] sm:text-sm md:text-base leading-tight">
              Loknete Dr. Balasaheb Vikhe Patil (Padma Bhushan Awardee)
            </p>
            <h1 className="text-base  md:text-2xl font-bold leading-tight">
              Sir Visvesvaraya Institute Of Technology, Nashik
            </h1>
          </div>

          {/* Right logo – same lift */}
          <a href="/" aria-label="Home" className="group">
            <img src="/SAHEB1.webp" alt="Saheb Logo" width={100} loading="lazy" />
          </a>
        </div>
      </header>

      <HomeNav />
    </>
  );
}