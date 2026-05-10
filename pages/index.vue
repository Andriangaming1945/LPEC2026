<script setup lang="ts">
const marqueeItems = [
  'LPEC 2026',
  'LOCAL POLYTECHNIC ENGLISH COMPETITION',
  'LPEC 2026',
  'PNJ',
  'LOCAL POLYTECHNIC ENGLISH COMPETITION',
  'LPEC 2026',
  'LOCAL POLYTECHNIC ENGLISH COMPETITION',
  'PNJ',
]
</script>

<template>
  <div class="min-h-screen text-white overflow-x-hidden relative" style="background-color: #8B1A1A;">

    <div class="fixed top-[-150px] right-[-150px] w-[500px] h-[500px] rounded-full opacity-20 pointer-events-none z-0" style="background-color: #C0726E;"></div>
    <div class="fixed bottom-[200px] left-[-100px] w-[350px] h-[350px] rounded-full opacity-15 pointer-events-none z-0" style="background-color: #C0726E;"></div>

    <Navbar />

    <section class="relative z-10 min-h-screen flex flex-col justify-center px-8 md:px-16 lg:px-24 py-32 animate-fadein">
      <div
  class="inline-flex items-center gap-2 bg-white/10 border border-white/25 rounded-full px-4 py-2 mb-5 sm:mb-6 max-w-fit"
>
  <span class="w-1.5 h-1.5 rounded-full bg-[#ff9999] animate-pulse"></span>

  <span
    class="text-[10px] sm:text-[11px] tracking-[0.18em] uppercase text-[#ffd4d4] font-light whitespace-nowrap"
  >
    LPEC 2026
  </span>
</div>
      <h1 class="font-serif font-black leading-none tracking-tight mb-8 " style="font-size: clamp(4rem, 15vw, 13rem); animation-delay: 0.25s;">
        LPEC<br><span class="text-white/30">2026</span>
      </h1>
      <p class="text-white/70 leading-relaxed max-w-2xl animate-fadein" style="font-size: clamp(1rem, 2.5vw, 1.5rem); animation-delay: 0.45s;">
        An English competition held exclusively for students of
        <strong class="text-white">Politeknik Negeri Jakarta (PNJ)</strong> — aiming to identify and select the best students
        to represent PNJ in the <strong class="text-white">Indonesian Polytechnic English Competition (IPEC)</strong>.
      </p>
      <div class="mt-10 animate-fadein" style="animation-delay: 0.6s;">
        <span class="inline-block bg-white/15 border border-white/30 px-6 py-2.5 rounded-full text-sm text-white/90">
          Will be held in <strong class="text-white font-semibold">July 2026</strong>
        </span>
      </div>

      <div class="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30 animate-fadein" style="animation-delay: 1s;">
        <span class="text-[11px] tracking-widest uppercase">Scroll</span>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="animate-bounce">
          <path d="M12 5v14M5 12l7 7 7-7"/>
        </svg>
      </div>
    </section>

    <section class="relative z-10 px-8 md:px-16 lg:px-24 py-24 border-t border-white/10">
      <div class="max-w-6xl mx-auto">
        <span class="inline-block text-[11px] tracking-[0.15em] uppercase text-white/50 border border-white/20 bg-white/10 px-3.5 py-1 rounded-full mb-12 animate-fadein" style="animation-delay: 0.1s;">About</span>
        <h2 class="font-serif font-black leading-tight mb-12 text-white animate-fadein" style="font-size: clamp(3rem, 10vw, 8rem); animation-delay: 0.2s;">
          What is<br>LPEC?
        </h2>
        <p class="text-white/70 leading-relaxed max-w-3xl animate-fadein" style="font-size: clamp(1rem, 2vw, 1.35rem); animation-delay: 0.35s;">
          Local Polytechnic English Competition (LPEC PNJ) is an English competition held specifically for students of
          <strong class="text-white">Politeknik Negeri Jakarta (PNJ)</strong>. This event aims to identify and select the best PNJ students
          who will represent PNJ in the <strong class="text-white">Indonesian Polytechnic English Competition (IPEC)</strong> in the following year.
        </p>
      </div>
    </section>

    <div class="relative z-10 overflow-hidden py-4 border-t border-white/10">
      <div class="marquee-wrapper">
        <div class="marquee-track">
          <span
            v-for="(item, i) in marqueeItems"
            :key="`a-${i}`"
            class="marquee-item font-serif font-black select-none"
          >
            {{ item }}
            <span class="marquee-dot">✦</span>
          </span>
        </div>
        <div class="marquee-track" aria-hidden="true">
          <span
            v-for="(item, i) in marqueeItems"
            :key="`b-${i}`"
            class="marquee-item font-serif font-black select-none"
          >
            {{ item }}
            <span class="marquee-dot">✦</span>
          </span>
        </div>
      </div>
    </div>

    <Footer></Footer>
    <Footer1></Footer1>

  </div>
</template>

<style scoped>
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
}

.marquee-wrapper {
  display: flex;
  width: max-content;
  animation: marquee 100s linear infinite;
  will-change: transform;
}

.marquee-track {
  display: flex;
  align-items: center;
  flex-shrink: 0;
}

.marquee-item {
  font-size: 6rem;
  line-height: 1;
  white-space: nowrap;
  padding: 0 1.5rem;
  color: rgba(255, 255, 255, 0.08);
}

.marquee-dot {
  font-size: 1.5rem;
  margin-left: 1.5rem;
  opacity: 0.3;
  vertical-align: middle;
}

@keyframes marquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
</style>