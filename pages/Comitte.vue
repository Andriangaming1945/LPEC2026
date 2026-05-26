<script setup lang="ts">
import DivisionSection from '~/components/DivisionSection.vue';

</script>

<template>
    <Background>
      <Navbar></Navbar>
      <section
  class="relative min-h-screen overflow-hidden px-4 pt-36 pb-16 sm:px-6 sm:pt-40 sm:pb-24 lg:py-32 animate-fadein"
>
        <!-- Orbs -->
        <div class="absolute -left-32 top-1/3 w-[420px] h-[420px] rounded-full "></div>
        <div class="absolute -right-32 -top-24 w-[520px] h-[520px] rounded-full"></div>
  
        <!-- Grid overlay -->
        <div
          class="absolute inset-0 opacity-30"
          style="background-image: linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px); background-size: 60px 60px;"
        ></div>
  
        <div class="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
  
          <!-- LEFT -->
          <div class="flex-1 text-white w-full">
  
            <!-- Eyebrow badge -->
            <div class="inline-flex items-center gap-2 bg-white/10 border border-white/25 rounded-full px-3 py-1 sm:px-4 sm:py-1.5 mb-5 sm:mb-6">
              <span class="w-1.5 h-1.5 rounded-full bg-[#ff9999] animate-pulse"></span>
              <span class="text-[10px] sm:text-[11px] tracking-[0.18em] uppercase text-[#ffd4d4] font-light">
                Open Recruitment · LPEC 2026
              </span>
            </div>
  
            <!-- HEADING — mobile-first: kecil dulu, besar di lg -->
            <h1
              class="text-[42px] sm:text-[60px] md:text-[80px] lg:text-[100px] leading-none"
              style="font-family: 'Playfair Display', serif"
            >
              Committee
              <br />
              <em class="text-[#ffcece] not-italic italic">Registration</em>
            </h1>
  
            <p class="mt-5 sm:mt-6 text-white/70 text-sm sm:text-base lg:text-lg leading-relaxed max-w-md font-light">
              Become part of the organizing team behind LPEC 2026.
              Gain valuable experience, build connections, and create an
              unforgettable competition together with us.
            </p>
  
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdE45IjFy3PVmPAF6wvsl7QYOXTcYk8nq7-Z073qgEaYH7C0A/viewform?usp=publish-editor"
              target="_blank"
              class="inline-flex items-center gap-3 mt-8 sm:mt-10 bg-white text-[#981414] px-6 py-3 sm:px-8 sm:py-4 rounded-full font-semibold text-sm sm:text-base hover:scale-105 transition duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 sm:w-5 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
              Register Now
            </a>
  
            <!-- Stats -->
            <div class="flex gap-6 sm:gap-8 mt-8 sm:mt-10 pt-6 sm:pt-8 border-t border-white/15">
              <div>
                <p class="text-2xl sm:text-3xl font-bold" style="font-family: 'Playfair Display', serif">2026</p>
                <p class="text-[10px] sm:text-[11px] uppercase tracking-widest text-white/50 mt-1">Batch</p>
              </div>
              <div>
                <p class="text-2xl sm:text-3xl font-bold" style="font-family: 'Playfair Display', serif">PNJ</p>
                <p class="text-[10px] sm:text-[11px] uppercase tracking-widest text-white/50 mt-1">Institution</p>
              </div>
              <div>
                <p class="text-2xl sm:text-3xl font-bold" style="font-family: 'Playfair Display', serif">English</p>
                <p class="text-[10px] sm:text-[11px] uppercase tracking-widest text-white/50 mt-1">Competition</p>
              </div>
            </div>
          </div>
  
          <!-- RIGHT -->
          <div class="flex-1 relative flex justify-center w-full">
            <div class="absolute w-[420px] h-[420px] rounded-full bg-[#c45b5b]/20 blur-3xl"></div>
  
            <div class="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-[28px] sm:rounded-[40px] p-5 sm:p-8 w-full max-w-[500px] shadow-2xl">
  
              <!-- Card header -->
              <div class="flex items-center justify-between mb-5 sm:mb-6">
                <div>
                  <p class="text-[10px] uppercase tracking-[0.2em] text-white/50 mb-1">Open Recruitment</p>
                  <h2
                    class="text-white text-2xl sm:text-4xl"
                    style="font-family: 'Playfair Display', serif"
                  >
                    LPEC 2026
                  </h2>
                </div>
  
                <div class="w-11 h-11 sm:w-14 sm:h-14 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 sm:w-7 sm:h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8"
                      d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0M9 14l2 2 4-4" />
                  </svg>
                </div>
              </div>
  
              <!-- Divider -->
              <div class="h-px bg-white/10 mb-4 sm:mb-6"></div>
  
              <!-- Benefits -->
              <div class="space-y-3 sm:space-y-4">
  
                <!-- Item 1 -->
                <div class="bg-white/5 border border-white/10 rounded-xl sm:rounded-2xl p-4 sm:p-5 flex items-center gap-3 sm:gap-4 hover:bg-white/10 transition duration-200">
                  <div class="w-10 h-10 sm:w-11 sm:h-11 rounded-lg sm:rounded-xl bg-white/10 border border-white/15 flex items-center justify-center flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8"
                        d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </div>
                  <div>
                    <h3 class="text-white font-semibold text-sm sm:text-base">Improve Experience</h3>
                    <p class="text-white/50 text-xs sm:text-sm mt-0.5">Learn teamwork and event management skills.</p>
                  </div>
                </div>
  
                <!-- Item 2 -->
                <div class="bg-white/5 border border-white/10 rounded-xl sm:rounded-2xl p-4 sm:p-5 flex items-center gap-3 sm:gap-4 hover:bg-white/10 transition duration-200">
                  <div class="w-10 h-10 sm:w-11 sm:h-11 rounded-lg sm:rounded-xl bg-white/10 border border-white/15 flex items-center justify-center flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8"
                        d="M17 20h5V4H2v16h5m10 0v-4a3 3 0 00-3-3H9a3 3 0 00-3 3v4m10 0H7m5-10a3 3 0 100-6 3 3 0 000 6zm6 0a3 3 0 100-6 3 3 0 000 6z" />
                    </svg>
                  </div>
                  <div>
                    <h3 class="text-white font-semibold text-sm sm:text-base">Build Connection</h3>
                    <p class="text-white/50 text-xs sm:text-sm mt-0.5">Meet new people and expand your network.</p>
                  </div>
                </div>
  
                <!-- Item 3 -->
                <div class="bg-white/5 border border-white/10 rounded-xl sm:rounded-2xl p-4 sm:p-5 flex items-center gap-3 sm:gap-4 hover:bg-white/10 transition duration-200">
                  <div class="w-10 h-10 sm:w-11 sm:h-11 rounded-lg sm:rounded-xl bg-white/10 border border-white/15 flex items-center justify-center flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8"
                        d="M12 15v2m0 0v2m0-2h2m-2 0H9m3-3a4 4 0 100-8 4 4 0 000 8zm-7 4h14M5 7H3a2 2 0 00-2 2v1a4 4 0 004 4h.5M19 7h2a2 2 0 012 2v1a4 4 0 01-4 4h-.5" />
                    </svg>
                  </div>
                  <div>
                    <h3 class="text-white font-semibold text-sm sm:text-base">Organize National Event</h3>
                    <p class="text-white/50 text-xs sm:text-sm mt-0.5">Be part of one of PNJ's biggest English competitions.</p>
                  </div>
                </div>
  
              </div>
            </div>
          </div>
  
        </div>
        <DivisionSection />
      </section>
      <Footer1></Footer1>
    </Background>
 
  </template>
  
