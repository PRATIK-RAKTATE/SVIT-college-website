import HomeNav from "./HomeNav";

export default function Header() {
  return (
    <>
      <div className="flex  w-full h-auto relative  md:flex-row z-0  justify-between bg-white p-4 md:pl-20 md:pr-20">
      
    {/* left logo */}
      <div className="flex-shrink-0">
        <img
          className="h-16 md:h-20 w-auto"
          src="https://pravaraengg.org.in/assets/img/PRES.png"
          alt=""
        />
      </div>

    {/* Mid text */}
      <div className="text-center md:text-center flex-1">
        <p className="text-sm md:text-base pb-1 md:pb-2">
          Loknete Dr. Balasaheb Vikhe Patil (Padma Bhushan Awardee) Pravara Rural Education Society
        </p>
        <p className="text-lg md:text-2xl font-bold">
          Sir Visvesvaraya Institute Of Technology, Nashik
        </p>
      </div>

      {/* Right Logo */}
      <div className="flex-shrink-0">
        <img
          className="h-12 md:h-16 w-auto"
          src="https://pravaraengg.org.in/assets/img/SAHEB1.webp"
          alt="Saheb Logo"
        />
      </div>
      
    </div>
    <HomeNav/>
    </>
  );
}
