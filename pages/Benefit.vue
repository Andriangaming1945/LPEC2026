<template>
    <Navbar />
  
    <div class="min-h-screen text-white overflow-x-hidden relative" style="background-color: #8B1A1A ; ">
  
      <!-- Blobs -->
      <div class="fixed top-[-150px] right-[-150px] w-[500px] h-[500px] rounded-full opacity-20 pointer-events-none z-0" style="background-color: #C0726E;"></div>
      <div class="fixed bottom-[200px] left-[-100px] w-[350px] h-[350px] rounded-full opacity-15 pointer-events-none z-0" style="background-color: #C0726E;"></div>
  
      
      <!-- Header -->
      <section class="relative z-10 px-8 md:px-16 lg:px-24 pt-40 pb-16 animate-fadein">
        <div
  class="inline-flex items-center gap-2 bg-white/10 border border-white/25 rounded-full px-4 py-2 mb-5 sm:mb-6 max-w-fit"
>
  <span class="w-1.5 h-1.5 rounded-full bg-[#ff9999] animate-pulse"></span>

  <span
    class="text-[10px] sm:text-[11px] tracking-[0.18em] uppercase text-[#ffd4d4] font-light whitespace-nowrap"
  >
    Benefit · LPEC 2026
  </span>
</div>
        <h1 class="font-serif font-black leading-none tracking-tight" style="font-size: clamp(3.5rem, 12vw, 10rem);">
          Benefits
        </h1>
        <p class="text-white/60 mt-8 max-w-xl leading-relaxed" style="font-size: clamp(0.95rem, 2vw, 1.2rem);">
          What you gain from joining LPEC 2026.
        </p>
      </section>
  
      <!-- Benefits cards -->
      <section class="relative z-10 px-8 md:px-16 lg:px-24 pb-24 animate-fadein">
        <div class="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
  
          <!-- Card 1 -->
          <div class="rounded-3xl border border-white/15 p-8 hover:border-white/30 transition-all duration-300" style="background: rgba(255,255,255,0.05);">
            <div class="w-12 h-12 rounded-2xl border border-white/20 flex items-center justify-center mb-6" style="background: rgba(255,255,255,0.08);">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="text-white/70">
                <path d="M12 15l-2 5h4l-2-5z"/><path d="M8.5 15a6.5 6.5 0 1 1 7 0"/>
              </svg>
            </div>
            <h3 class="font-serif font-black text-white text-2xl mb-3">Awards &amp; Experience</h3>
            <p class="text-white/55 text-sm leading-relaxed">Compete and earn recognition for your English skills at the institutional level.</p>
          </div>
  
          <!-- Card 2 -->
          <div class="rounded-3xl border border-white/15 p-8 hover:border-white/30 transition-all duration-300" style="background: rgba(255,255,255,0.05);">
            <div class="w-12 h-12 rounded-2xl border border-white/20 flex items-center justify-center mb-6" style="background: rgba(255,255,255,0.08);">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="text-white/70">
                <rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7V5a2 2 0 0 1 4 0v2"/>
              </svg>
            </div>
            <h3 class="font-serif font-black text-white text-2xl mb-3">Certificate of Appreciation</h3>
            <p class="text-white/55 text-sm leading-relaxed">Receive an official certificate recognizing your participation and achievement.</p>
          </div>
  
          <!-- Card 3 -->
          <div class="rounded-3xl border border-white/15 p-8 hover:border-white/30 transition-all duration-300" style="background: rgba(255,255,255,0.05);">
            <div class="w-12 h-12 rounded-2xl border border-white/20 flex items-center justify-center mb-6" style="background: rgba(255,255,255,0.08);">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="text-white/70">
                <circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15 15 0 0 1 0 20M12 2a15 15 0 0 0 0 20"/>
              </svg>
            </div>
            <h3 class="font-serif font-black text-white text-2xl mb-3">PNJ Delegate at IPEC</h3>
            <p class="text-white/55 text-sm leading-relaxed">Winners represent Politeknik Negeri Jakarta at the national Indonesian Polytechnic English Competition.</p>
          </div>
  
        </div>
      </section>
  
      <Footer1></Footer1>
    </div>
  </template>

  <style>
.animate-fadein {
  opacity: 0;
  transform: translateY(24px);
  animation: fadein 0.7s ease forwards;
}

@keyframes fadein {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}</style>