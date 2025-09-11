export default function PreDesk() {
  return (
    <section className="flex flex-col items-center mt-6 hover:shadow-lg rounded-2xl p-3 bg-white">
      {/* Profile */}
      <figure className="w-full max-w-2xl h">
        <div className="overflow-hidden rounded-xl shadow">
          <img
            src="https://res.cloudinary.com/difqniecb/image/upload/v1757604275/svit-principle_wgmuuc.webp"
            alt="Head of Department"
            className="w-full h-auto"
            loading="lazy"
          />
        </div>

        {/* Caption */}
        <figcaption className="mt-6 text-center">
          <p className="text-xl font-semibold text-slate-900">
            Dr. Ganesh B. Shinde
          </p>
          <p className="text-base text-[#4F39F6]">Principal & Associate Professor</p>
          <p className="text-sm text-slate-500 mt-1">
            M.E. (Chemical), Ph.D. (Chemical Tech.)
          </p>
        </figcaption>
      </figure>
    </section>
  );
}
