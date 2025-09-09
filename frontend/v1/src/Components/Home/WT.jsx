export default function WT() {
  return (
    <>
      {/* 1.  KEYFRAMES (scoped to this component) */}
      <style jsx>{`
        @keyframes shimmer {
          0% {
            background-position: -150% 0;
          }
          100% {
            background-position: 150% 0;
          }
        }
        @keyframes float {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-8px);
          }
          100% {
            transform: translateY(0px);
          }
        }
        @keyframes glow {
          0% {
            text-shadow:
              0 0 8px #0ea5e9,
              0 0 16px #0ea5e9;
          }
          50% {
            text-shadow:
              0 0 16px #0ea5e9,
              0 0 32px #0ea5e9;
          }
          100% {
            text-shadow:
              0 0 8px #0ea5e9,
              0 0 16px #0ea5e9;
          }
        }
        .shimmer-text {
          background: linear-gradient(
            90deg,
            #0891b2 20%,
            #4f39f6 40%,
            #0891b2 60%
          );
          background-size: 200% auto;
          color: transparent;
          background-clip: text;
          -webkit-background-clip: text;
          animation:
            shimmer 3s linear infinite,
            glow 3s ease-in-out infinite;
        }
        .float-loop {
          animation: float 4s ease-in-out infinite;
        }
      `}</style>

      {/* 2.  COMPONENT – no backgrounds */}
      <div className="mt-9 mb-5 flex items-center justify-center">
        <h1 className="text-center text-2xl md:text-4xl font-bold font-sans uppercase tracking-wider shimmer-text float-loop">
          Welcome to Sir Visvesvaraya Institute of Technology, Nashik
        </h1>
      </div>
    </>
  );
}
