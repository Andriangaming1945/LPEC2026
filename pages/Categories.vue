<script setup lang="ts">
import newcastingImg from '~/assets/images/categories/Newcasting.jpeg';
import storytellingImg from '~/assets/images/categories/Storytelling.jpeg';
import speechImg from '~/assets/images/categories/Speech.jpeg';
import EssayImg from '~/assets/images/categories/Essay.jpeg';

const categories = [
  {
    name: 'Essay Writing',
    slug: 'essay-writing',
    image: EssayImg,
    imagePosition: 'left',
    description: 'Express your thoughts and arguments through structured written English. Participants will be given a topic and must craft a compelling, well-organized essay within a set time.',
    details: [
      'Individual competition',
      'Written on-site during the event',
      'Topic announced on the day',
      'Judged on structure, grammar, and argumentation',
    ]
  },
  {
    name: 'Storytelling',
    slug: 'storytelling',
    image: storytellingImg,
    imagePosition: 'right',
    description: 'Bring stories to life with your voice, expression, and creativity. Participants tell a story — original or adapted — in front of a live audience and panel of judges.',
    details: [
      'Individual competition',
      'Story prepared beforehand',
      'Duration: 5–7 minutes',
      'Judged on delivery, expression, and fluency',
    ]
  },
  {
    name: 'Speech',
    slug: 'speech',
    image: speechImg,
    imagePosition: 'left',
    description: 'Deliver a persuasive and impactful speech on a given topic. Participants must demonstrate strong public speaking skills, confidence, and command of the English language.',
    details: [
      'Individual competition',
      'Topic given before the event',
      'Duration: 5–7 minutes',
      'Judged on content, delivery, and stage presence',
    ]
  },
  {
    name: 'Newscasting',
    slug: 'newscasting',
    image: newcastingImg,
    imagePosition: 'right',
    description: 'Simulate a live news broadcast with a partner. Participants present prepared news scripts with professionalism, clarity, and broadcast-quality English delivery.',
    details: [
      'Pair competition (2 people)',
      'Script prepared beforehand',
      'Duration: 5–7 minutes',
      'Judged on clarity, pronunciation, and teamwork',
    ]
  },
]
</script>

<template>
  <div class="min-h-screen text-white overflow-x-hidden relative" style="background-color: #8B1A1A;">

    <div class="fixed top-[-150px] right-[-150px] w-[500px] h-[500px] rounded-full opacity-20 pointer-events-none z-0" style="background-color: #C0726E;"></div>
    <div class="fixed bottom-[200px] left-[-100px] w-[350px] h-[350px] rounded-full opacity-15 pointer-events-none z-0" style="background-color: #C0726E;"></div>

    <Navbar />

   
<section class="relative z-10 px-8 md:px-16 lg:px-24 pt-40 pb-16 animate-fadein">
    
    <div
      class="inline-flex items-center gap-2 bg-white/10 border border-white/25 rounded-full px-4 py-2 mb-5 sm:mb-6 max-w-fit"
    >
      <span class="w-1.5 h-1.5 rounded-full bg-[#ff9999] animate-pulse"></span>
  
      <span
        class="text-[10px] sm:text-[11px] tracking-[0.18em] uppercase text-[#ffd4d4] font-light whitespace-nowrap"
      >
        Categories · LPEC 2026
      </span>
    </div>
  
    <h1
      class="font-serif font-black leading-none tracking-tight"
      style="font-size: clamp(3.5rem, 12vw, 10rem);"
    >
      Competition<br>
      <span class="text-white/30">Categories</span>
    </h1>
  
    <p
      class="text-white/60 mt-8 max-w-xl leading-relaxed"
      style="font-size: clamp(0.95rem, 2vw, 1.2rem);"
    >
      Four categories, one goal — to find the best English speakers representing Politeknik Negeri Jakarta.
    </p>
  
  </section>

    <!-- Categories list -->
    <section class="relative z-10 px-8 md:px-16 lg:px-24 pb-24 animate-fadein">
      <div class="max-w-6xl mx-auto flex flex-col gap-6">

        <div
          v-for="(cat, index) in categories"
          :key="cat.slug"
          class="category-card group rounded-3xl overflow-hidden border border-white/15 hover:border-white/30 transition-all duration-300"
          :class="cat.imagePosition === 'left' ? 'image-left' : 'image-right'"
        >

          <!-- Image -->
          <div
            class="category-image relative overflow-hidden"
            style="background: rgba(0,0,0,0.15);"
          >
            <img
              :src="cat.image"
              :alt="cat.name"
              class="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              @error="(e) => (e.target as HTMLImageElement).style.display = 'none'"
            />
          </div>

          <!-- Content -->
          <div class="category-content flex flex-col justify-center p-8 md:p-10">
            <h2 class="font-serif font-black text-white mb-4 leading-tight" style="font-size: clamp(1.8rem, 4vw, 3rem);">
              {{ cat.name }}
            </h2>
            <p class="text-white/65 text-[15px] leading-relaxed mb-6">
              {{ cat.description }}
            </p>
            <ul class="flex flex-col gap-2.5">
              <li
                v-for="detail in cat.details"
                :key="detail"
                class="flex items-start gap-3 text-[13px] text-white/60"
              >
                <span class="mt-0.5 flex-shrink-0 w-4 h-4 rounded-full border border-white/25 flex items-center justify-center">
                  <span class="w-1.5 h-1.5 rounded-full bg-white/60 block"></span>
                </span>
                {{ detail }}
              </li>
            </ul>
          </div>

        </div>
      </div>
    </section>

    
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
.category-card {
  background: rgba(255, 255, 255, 0.05);
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 280px auto;
}

.category-image {
  min-height: 280px;
  order: 1;
}

.category-content {
  order: 2;
}

/* Desktop: side by side */
@media (min-width: 768px) {
  .category-card {
    grid-template-rows: unset;
    min-height: 420px;
  }

  .image-left {
    grid-template-columns: 400px 1fr;
  }

  .image-right {
    grid-template-columns: 1fr 400px;
  }

  .image-left .category-image {
    order: 1;
  }

  .image-left .category-content {
    order: 2;
  }

  .image-right .category-image {
    order: 2;
  }

  .image-right .category-content {
    order: 1;
  }

  .category-image {
    min-height: 420px;
  }
}
</style>