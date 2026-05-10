<template>
    <Background>
      <Navbar />
  
      <section
        class="relative min-h-screen overflow-hidden flex items-center justify-center px-6"
      >
        <div class="relative z-10 text-center animate-fadein">
          
          <div
            class="inline-flex items-center gap-3 border border-[#f6d6d6]/60 rounded-full px-6 py-2.5 mb-8 bg-white/5 backdrop-blur-sm max-w-fit mx-auto"
          >
            <div
              class="w-5 h-5 rounded-full border border-[#f6d6d6] flex items-center justify-center"
            >
              <div class="w-2 h-2 rounded-full bg-[#f6d6d6] animate-pulse"></div>
            </div>
  
            <span
              class="text-[#f8eaea] uppercase tracking-[0.3em] text-xs sm:text-sm font-medium whitespace-nowrap"
            >
              Coming Soon
            </span>
          </div>
  
          <h1
            class="text-white font-black leading-none text-[70px] sm:text-[100px] md:text-[140px]"
            style="font-family: 'Playfair Display', serif"
          >
            Coming Soon
          </h1>
  
          <p
            class="mt-8 text-[#f2cfcf] text-lg md:text-2xl max-w-3xl mx-auto leading-relaxed"
          >
            The competition page is currently under development.
            <br />
            Stay tuned for updates and exciting news from LPEC 2026.
          </p>
        </div>
      </section>
    </Background>
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
  </style>