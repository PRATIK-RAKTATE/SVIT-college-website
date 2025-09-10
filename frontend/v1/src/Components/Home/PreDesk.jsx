import principle from '../../../src/assets/svit-principle.webp';

export default function PreDesk() {
  return (
    <section className="flex flex-col items-center mt-6 hover:shadow-lg rounded-2xl p-3 bg-white">
      {/* Profile */}
      <figure className="w-full max-w-2xl h">
        <div className="overflow-hidden rounded-xl shadow">
          <img
            src={principle}
            alt="Head of Department"
            className="w-full h-auto"
            loading="lazy"
          />
        </div>

        {/* Caption */}
        <figcaption className="mt-6 text-center">
          <p className="text-xl font-semibold text-slate-900">
            Prof. Sharad M. Rokade
          </p>
          <p className="text-base text-slate-700">Associate Professor & HOD</p>
          <p className="text-sm text-slate-500 mt-1">
            M.E. (CE), PhD (Pursuing)
          </p>
        </figcaption>
      </figure>
    </section>
  );
}
