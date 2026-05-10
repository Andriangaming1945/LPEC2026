<template>
     <section class="relative z-10 px-8 md:px-16 lg:px-24 py-24 border-t border-white/10">
      <div class="max-w-6xl mx-auto flex flex-col md:flex-row md:items-end md:justify-between gap-8">
        <div>
          <h2 class="font-serif font-black leading-tight text-white mb-4" style="font-size: clamp(2rem, 5vw, 4rem);">
            Ready to<br>register?
          </h2>
          <p class="text-white/60 text-base max-w-md leading-relaxed">
            Competition registration will open soon. Stay tuned!
          </p>
        </div>
        <NuxtLink
          to="/Linktree"
          class="inline-block bg-white font-semibold text-base px-10 py-4 rounded-full hover:opacity-90 hover:-translate-y-0.5 transition-all flex-shrink-0"
          style="color: #8B1A1A;"
        >
          Go to Linktree
        </NuxtLink>
      </div>
    </section>

</template>