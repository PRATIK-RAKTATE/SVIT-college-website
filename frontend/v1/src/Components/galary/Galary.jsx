// SuperAnimatedCollegeGallery.jsx
import React, { useState } from "react";

const photos = [
  { id: 1, src: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b", title: "Campus Life", desc: "Spring vibes" },
  { id: 2, src: "https://media.istockphoto.com/id/814423752/photo/eye-of-model-with-colorful-art-make-up-close-up.jpg?s=612x612&w=0&k=20&c=l15OdMWjgCKycMMShP8UK94ELVlEGvt7GmB_esHWPYE=", title: "Graduation", desc: "Caps in the air!" },
  { id: 3, src: "https://images.unsplash.com/photo-1507842217343-583bb7270b66", title: "Night Study", desc: "Late grind" },
  { id: 4, src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e", title: "Squad", desc: "Forever friends" },
  { id: 5, src: "https://images.unsplash.com/photo-1508609349937-5ec4ae374ebf", title: "Match Day", desc: "We won!" },
  { id: 6, src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9YYh5Fk1u9VsWWr1MhkyQeOzeNbtnnMO96g&s", title: "Cultural Fest", desc: "Lights" },
  { id: 7, src: "https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg", title: "Tech Fest", desc: "Innovations everywhere" },
  { id: 8, src: "https://images.unsplash.com/photo-1511376777868-611b54f68947", title: "Concert Night", desc: "Feel the vibe" },
  { id: 9, src: "https://images.unsplash.com/photo-1508780709619-79562169bc64", title: "Green Campus", desc: "Peaceful walks" },
  { id: 10, src: "https://images.unsplash.com/photo-1498654896293-37aacf113fd9", title: "Canteen Time", desc: "Best bites" },
  { id: 1, src: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b", title: "Campus Life", desc: "Spring vibes" },
  { id: 2, src: "https://media.istockphoto.com/id/814423752/photo/eye-of-model-with-colorful-art-make-up-close-up.jpg?s=612x612&w=0&k=20&c=l15OdMWjgCKycMMShP8UK94ELVlEGvt7GmB_esHWPYE=", title: "Graduation", desc: "Caps in the air!" },
  { id: 3, src: "https://images.unsplash.com/photo-1507842217343-583bb7270b66", title: "Night Study", desc: "Late grind" },
  { id: 4, src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e", title: "Squad", desc: "Forever friends" },
  { id: 5, src: "https://images.unsplash.com/photo-1508609349937-5ec4ae374ebf", title: "Match Day", desc: "We won!" },
  { id: 6, src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9YYh5Fk1u9VsWWr1MhkyQeOzeNbtnnMO96g&s", title: "Cultural Fest", desc: "Lights" },
  { id: 7, src: "https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg", title: "Tech Fest", desc: "Innovations everywhere" },
  { id: 8, src: "https://images.unsplash.com/photo-1511376777868-611b54f68947", title: "Concert Night", desc: "Feel the vibe" },
  { id: 9, src: "https://images.unsplash.com/photo-1508780709619-79562169bc64", title: "Green Campus", desc: "Peaceful walks" },
  { id: 10, src: "https://images.unsplash.com/photo-1498654896293-37aacf113fd9", title: "Canteen Time", desc: "Best bites" },
];

/* ---------- inline SVG icons ---------- */
const Close = () => <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>;
const Prev  = () => <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>;
const Next  = () => <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>;

export default function CollegeGallery() {
  const [idx, setIdx] = useState(null);

  const next = () => setIdx((idx + 1) % photos.length);
  const prev = () => setIdx((idx - 1 + photos.length) % photos.length);

  return (
    <>
      {/* ==================  ALL ANIMATIONS  ================== */}
      <style>{`
        @keyframes popIn {
          0%   { transform:scale(.7) translateY(40px); opacity:0; }
          100% { transform:scale(1)   translateY(0);   opacity:1; }
        }
        @keyframes fadeIn {
          0%   { opacity:0; }
          100% { opacity:1; }
        }
        @keyframes slideUp {
          0%   { transform:translateY(50px); opacity:0; }
          100% { transform:translateY(0);    opacity:1; }
        }
        @keyframes zoomIn {
          0%   { transform:scale(.85); opacity:0; }
          100% { transform:scale(1);   opacity:1; }
        }
        @keyframes spin {
          0%   { transform:rotate(0deg); }
          100% { transform:rotate(360deg); }
        }

        .card        { animation:popIn .6s ease-out backwards; }
        .card:nth-child(1)  { animation-delay:.05s; }
        .card:nth-child(2)  { animation-delay:.10s; }
        .card:nth-child(3)  { animation-delay:.15s; }
        .card:nth-child(4)  { animation-delay:.20s; }
        .card:nth-child(5)  { animation-delay:.25s; }
        .card:nth-child(6)  { animation-delay:.30s; }
        .card:nth-child(7)  { animation-delay:.35s; }
        .card:nth-child(8)  { animation-delay:.40s; }
        .card:nth-child(9)  { animation-delay:.45s; }
        .card:nth-child(10) { animation-delay:.50s; }

        .group:hover .group-hover-scale { transform:scale(1.12) rotate(1deg); }
        .group:hover .group-hover-fade  { opacity:1; }
        .group:hover .group-hover-ring  { box-shadow:0 0 0 3px #fff, 0 0 0 6px #38bdf8; }

        .modal-img { animation:zoomIn .4s ease-out; }
        .modal-cap { animation:slideUp .5s ease-out .1s backwards; }
        .loader    { animation:spin 1s linear infinite; }
      `}</style>

      {/* ==================  GRID  ================== */}
      <section className="columns-2 md:columns-3 lg:columns-4 gap-5 p-6">
        {photos.map((p, i) => (
          <figure
            key={p.id}
            className="card group break-inside-avoid mb-5 rounded-2xl shadow-xl overflow-hidden cursor-pointer relative transform transition-transform duration-500"
            onClick={() => setIdx(i)}
          >
            <img src={p.src} alt={p.title} className="w-full h-auto object-cover" />
            {/* colour-ring appears on hover */}
            <div className="absolute inset-0 rounded-2xl group-hover-ring transition-shadow duration-300 pointer-events-none" />
            {/* caption overlay */}
            <figcaption className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover-fade transition-opacity duration-400 flex items-end p-4">
              <div className="text-white">
                <h3 className="font-bold text-lg mb-1">{p.title}</h3>
                <p className="text-sm opacity-90">{p.desc}</p>
              </div>
            </figcaption>
          </figure>
        ))}
      </section>

      {/* ==================  LIGHTBOX  ================== */}
      {idx !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-lg animate-fadeIn"
          onClick={() => setIdx(null)}
        >
          {/* prev */}
          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="absolute left-5 top-1/2 -translate-y-1/2 text-white p-3 rounded-full bg-white/10 hover:bg-white/20 transition transform hover:scale-110"
          >
            <Prev />
          </button>

          {/* image + caption */}
          <div onClick={(e) => e.stopPropagation()} className="max-w-5xl max-h-[90vh]">
            <img
              src={photos[idx].src}
              alt={photos[idx].title}
              className="w-full h-auto max-h-[75vh] rounded-2xl shadow-2xl modal-img"
            />
            <div className="text-white text-center mt-5 modal-cap">
              <h2 className="text-3xl font-extrabold">{photos[idx].title}</h2>
              <p className="text-gray-300 mt-2">{photos[idx].desc}</p>
            </div>
          </div>

          {/* next */}
          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="absolute right-5 top-1/2 -translate-y-1/2 text-white p-3 rounded-full bg-white/10 hover:bg-white/20 transition transform hover:scale-110"
          >
            <Next />
          </button>

          {/* close */}
          <button
            onClick={() => setIdx(null)}
            className="absolute top-5 right-5 text-white p-2 rounded-full bg-white/10 hover:bg-white/20 transition transform hover:scale-110"
          >
            <Close />
          </button>
        </div>
      )}
    </>
  );
}