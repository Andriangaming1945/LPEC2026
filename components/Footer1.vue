<template>
    <footer class="relative border-t border-white/10" style="background-color: #5a0f0f;">
  
     
      <div class="px-8 md:px-16 lg:px-24 pt-16 pb-10">
        <div class="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12">
  
        
          <div class="col-span-2 md:col-span-1">
            <h3 class="font-serif font-black text-white mb-3" style="font-size: clamp(2rem, 5vw, 3rem); line-height: 1.1;">LPEC<br>2026</h3>
            <p class="text-white/50 text-sm leading-relaxed">
              Local Polytechnic English Competition — Politeknik Negeri Jakarta.
            </p>
          </div>
  
          
          <div>
            <p class="text-[11px] tracking-[0.2em] uppercase text-white/40 font-medium mb-5">Navigation</p>
            <ul class="flex flex-col gap-3">
              <li><NuxtLink to="/" class="text-white/60 hover:text-white text-sm transition-colors">Home</NuxtLink></li>
              <li><NuxtLink to="/categories" class="text-white/60 hover:text-white text-sm transition-colors">Categories</NuxtLink></li>
              <li><NuxtLink to="/benefit" class="text-white/60 hover:text-white text-sm transition-colors">Benefits</NuxtLink></li>
              <li><NuxtLink to="/comitte" class="text-white/60 hover:text-white text-sm transition-colors">Comitte Registration</NuxtLink></li>
              <li><NuxtLink to="/Competition" class="text-white/60 hover:text-white text-sm transition-colors">Competition Registration</NuxtLink></li>
             
            </ul>
          </div>
  
         
          <div>
            <p class="text-[11px] tracking-[0.2em] uppercase text-white/40 font-medium mb-5">Contact Person</p>
            <ul class="flex flex-col gap-4">
              <li>
                <a href="https://wa.me/6281910821507" target="_blank" class="group">
                  <p class="text-white/70 text-sm font-medium group-hover:text-white transition-colors">Rafi</p>
                  <p class="text-white/40 text-xs">+62 819-1082-1507</p>
                </a>
              </li>
              <li>
                <a href="https://wa.me/6285218944097" target="_blank" class="group">
                  <p class="text-white/70 text-sm font-medium group-hover:text-white transition-colors">Riyan</p>
                  <p class="text-white/40 text-xs">+62 852-1894-4097</p>
                </a>
              </li>
            </ul>
          </div>
  
          
          <div>
            <p class="text-[11px] tracking-[0.2em] uppercase text-white/40 font-medium mb-5">Follow Us</p>
            
            <a
              href="https://www.instagram.com/lpec_2023/"
              target="_blank"
              class="flex items-center gap-2 text-white/60 hover:text-white text-sm transition-colors"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <circle cx="12" cy="12" r="4"/>
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
              </svg>
              @lpec_2023
            </a>
          </div>
  
        </div>
      </div>
  
   
      <div class="border-t border-white/10 px-8 md:px-16 lg:px-24 py-5">
        <div class="max-w-6xl mx-auto">
          <p class="text-white/25 text-xs">© 2026 LPEC — Politeknik Negeri Jakarta. All rights reserved.</p>
        </div>
      </div>
  
    </footer>
  </template>