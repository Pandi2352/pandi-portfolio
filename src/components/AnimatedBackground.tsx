import { memo } from 'react';

function AnimatedBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none select-none bg-slate-50">
      <div className="absolute top-[-12%] left-[-12%] h-[75%] w-[75%] rounded-full blur-[120px] bg-blue-100/50" />
      <div className="absolute bottom-[-15%] right-[-15%] h-[70%] w-[70%] rounded-full blur-[120px] bg-emerald-100/45" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.18)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.18)_1px,transparent_1px)] bg-[size:40px_40px]" />
    </div>
  );
}

export default memo(AnimatedBackground);
