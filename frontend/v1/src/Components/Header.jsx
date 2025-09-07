import HomeNav from "./HomeNav";

export default function Header() {
  return (
    <>
<<<<<<< HEAD
      <div className="flex w-full h-auto relative md:flex-row z-0 justify-between bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 p-4 md:pl-20 md:pr-20">
      
=======
      <div className="flex  w-full h-auto relative  md:flex-row z-0  justify-between bg-white p-4 md:pl-20 md:pr-20">
>>>>>>> 463ea8d29b1846ee6d61d4f414e7560ee01a686a
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
<<<<<<< HEAD
          <p className="text-sm md:text-base pb-1 md:pb-2 text-white">
            Loknete Dr. Balasaheb Vikhe Patil (Padma Bhushan Awardee) Pravara Rural Education Society
          </p>
          <p className="text-lg md:text-2xl font-bold text-white">
=======
          <p className="text-sm md:text-base pb-1 md:pb-2">
            Loknete Dr. Balasaheb Vikhe Patil (Padma Bhushan Awardee) Pravara
            Rural Education Society
          </p>
          <p className="text-lg md:text-2xl font-bold">
>>>>>>> 463ea8d29b1846ee6d61d4f414e7560ee01a686a
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
<<<<<<< HEAD
        
=======
>>>>>>> 463ea8d29b1846ee6d61d4f414e7560ee01a686a
      </div>
      <HomeNav />
    </>
  );
}