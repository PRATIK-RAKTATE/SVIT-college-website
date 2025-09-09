export default function ImagText() {
  return (
    <section className="px-6 py-10 md:px-16 md:py-14">
      <div className="max-w-4xl mx-auto">
        <p
          className="text-center md:text-left text-black 
                      leading-relaxed md:leading-loose
                      text-base md:text-lg
                      bg-white
                      rounded-2xl px-6 py-6
                      shadow-lg hover:shadow-2xl
                      transition-all duration-500
                      backdrop-blur-sm border border-white/20"
        >
          Founded in 1998-99,{" "}
          <span className="font-semibold text-[#4F39F6]">
            Sir Visvesvaraya Institute of Technology
          </span>{" "}
          stands as a beacon of academic excellence planted by the{" "}
          <span className="font-semibold">Pravara Rural Education Society</span>
          —a legacy begun in 1964 at Loni by the visionary Padmashri Dr.
          Vitthalrao Vikhe Patil. From pre-primary to collegiate levels, the
          society continues to shape futures across Maharashtra.
        </p>
      </div>
    </section>
  );
}
