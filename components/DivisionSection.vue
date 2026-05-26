<template>
  <section class="relative overflow-hidden px-4 py-16 sm:px-6 sm:py-24 lg:py-32">

    <!-- Grid overlay -->
    <div
      class="absolute inset-0 opacity-20"
      style="background-image: linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px); background-size: 60px 60px;"
    ></div>

    <!-- Decorative orbs -->
    <div class="absolute -left-20 top-1/4 w-[300px] h-[300px] rounded-full bg-[#c45b5b]/10 blur-3xl pointer-events-none"></div>
    <div class="absolute -right-20 bottom-1/4 w-[300px] h-[300px] rounded-full bg-[#8b1a1a]/15 blur-3xl pointer-events-none"></div>

    <div class="relative z-10 max-w-7xl mx-auto">

      <!-- Eyebrow badge -->
      <div class="inline-flex items-center gap-2 bg-white/10 border border-white/25 rounded-full px-3 py-1 sm:px-4 sm:py-1.5 mb-5 sm:mb-6 division-fade" style="animation-delay:0ms">
        <span class="w-1.5 h-1.5 rounded-full bg-[#ff9999] animate-pulse"></span>
        <span class="text-[10px] sm:text-[11px] tracking-[0.18em] uppercase text-[#ffd4d4] font-light">
          Division Jobdesk · LPEC 2026
        </span>
      </div>

      <!-- Heading -->
      <h2
        class="text-[36px] sm:text-[52px] lg:text-[64px] leading-none text-white mb-4 division-fade"
        style="font-family: 'Playfair Display', serif; animation-delay:80ms"
      >
        Our <em class="text-[#ffcece] not-italic italic">Divisions</em>
      </h2>
      <p class="text-white/60 text-sm sm:text-base lg:text-lg leading-relaxed max-w-xl mb-10 sm:mb-14 font-light division-fade" style="animation-delay:160ms">
        Each division plays a vital role in making LPEC 2026 a success. Find the role that fits you best.
      </p>

      <!-- Cards Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">

        <!-- Secretary -->
        <div class="division-card division-fade" style="animation-delay:240ms">
          <div class="division-card-inner">
            <div class="division-icon-wrap">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
            <div class="division-number">01</div>
            <h3 class="division-title">Secretary</h3>
            <p class="division-desc">
              Responsible for all administrative tasks and correspondence. Manages and schedules committee meetings to keep the organizing team aligned and on track throughout LPEC 2026.
            </p>
            <div class="division-tag">Administration</div>
          </div>
        </div>

        <!-- Treasury -->
        <div class="division-card division-fade" style="animation-delay:320ms">
          <div class="division-card-inner">
            <div class="division-icon-wrap">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div class="division-number">02</div>
            <h3 class="division-title">Treasury</h3>
            <p class="division-desc">
              Oversees all financial tasks including budgeting and monitoring budget efficiency throughout the event, ensuring LPEC 2026 runs smoothly within its financial plan.
            </p>
            <div class="division-tag">Finance</div>
          </div>
        </div>

        <!-- Event -->
        <div class="division-card division-fade" style="animation-delay:400ms">
          <div class="division-card-inner">
            <div class="division-icon-wrap">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <div class="division-number">03</div>
            <h3 class="division-title">Event</h3>
            <p class="division-desc">
              Handles event technicality, venue preparation, and the full rundown. Two members serve as MCs on stage and conduct rehearsals to ensure the competition flow stays on schedule.
            </p>
            <div class="division-tag">Operations</div>
          </div>
        </div>

        <!-- D3 -->
        <div class="division-card division-fade" style="animation-delay:480ms">
          <div class="division-card-inner">
            <div class="division-icon-wrap">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <div class="division-number">04</div>
            <h3 class="division-title">D3 — Design, Documentation & Decorations</h3>
            <p class="division-desc">
              Creates all visual content including posters, Instagram posts, and structural photos. Handles documentation throughout LPEC and is responsible for decorating the event venue.
            </p>
            <div class="division-tag">Creative</div>
          </div>
        </div>

        <!-- Public Relations -->
        <div class="division-card division-fade" style="animation-delay:560ms">
          <div class="division-card-inner">
            <div class="division-icon-wrap">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
              </svg>
            </div>
            <div class="division-number">05</div>
            <h3 class="division-title">Public Relations</h3>
            <p class="division-desc">
              Builds relationships with the public through 2 dedicated contact persons. Coordinates all sponsorships and collaborations with media partners throughout PNJ during LPEC.
            </p>
            <div class="division-tag">Relations</div>
          </div>
        </div>

        <!-- Competition PIC -->
        <div class="division-card division-fade" style="animation-delay:640ms">
          <div class="division-card-inner">
            <div class="division-icon-wrap">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div class="division-number">06</div>
            <h3 class="division-title">Competition PIC</h3>
            <p class="division-desc">
              Organizes each competition category and coordinates briefings with judges to discuss competition mechanics and grading criteria, ensuring a fair and well-run competition.
            </p>
            <div class="division-tag">Competition</div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<style scoped>
.division-card {
  position: relative;
  cursor: default;
}

.division-card-inner {
  background: #ffffff;
  border-radius: 20px;
  padding: 28px 26px 24px;
  border-left: 4px solid #981414;
  box-shadow: 0 4px 24px rgba(0,0,0,0.18), 0 1px 4px rgba(152,20,20,0.08);
  position: relative;
  overflow: hidden;
  transition: transform 0.35s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.35s ease;
  height: 100%;
}

.division-card-inner::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(152,20,20,0.04) 0%, transparent 60%);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.division-card:hover .division-card-inner {
  transform: translateY(-6px) scale(1.015);
  box-shadow: 0 16px 48px rgba(152,20,20,0.22), 0 4px 12px rgba(0,0,0,0.15);
}

.division-card:hover .division-card-inner::before {
  opacity: 1;
}

.division-card-inner::after {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  width: 4px;
  height: 0%;
  background: linear-gradient(to bottom, #ff6b6b, #981414);
  transition: height 0.4s cubic-bezier(0.4,0,0.2,1);
  border-radius: 0 0 4px 4px;
}

.division-card:hover .division-card-inner::after {
  height: 100%;
}

.division-icon-wrap {
  width: 44px;
  height: 44px;
  border-radius: 12px;
  background: linear-gradient(135deg, #981414, #c45b5b);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  margin-bottom: 16px;
  transition: transform 0.3s cubic-bezier(0.34,1.56,0.64,1);
  box-shadow: 0 4px 12px rgba(152,20,20,0.35);
}

.division-card:hover .division-icon-wrap {
  transform: rotate(-6deg) scale(1.1);
}

.division-number {
  font-family: 'Playfair Display', serif;
  font-size: 13px;
  color: #981414;
  font-weight: 700;
  letter-spacing: 0.12em;
  margin-bottom: 6px;
  opacity: 0.6;
}

.division-title {
  font-family: 'Playfair Display', serif;
  font-size: 20px;
  font-weight: 700;
  color: #1a0505;
  margin-bottom: 10px;
  line-height: 1.3;
}

.division-desc {
  font-size: 18px;
  color: #5a3a3a;
  line-height: 1.7;
  font-weight: 400;
  margin-bottom: 16px;
}

.division-tag {
  display: inline-flex;
  align-items: center;
  background: rgba(152,20,20,0.08);
  color: #981414;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  padding: 4px 10px;
  border-radius: 100px;
  border: 1px solid rgba(152,20,20,0.2);
  transition: background 0.25s, color 0.25s;
}

.division-card:hover .division-tag {
  background: #981414;
  color: #fff;
}

@keyframes divisionFadeUp {
  from {
    opacity: 0;
    transform: translateY(32px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.division-fade {
  opacity: 0;
  animation: divisionFadeUp 0.6s cubic-bezier(0.4,0,0.2,1) forwards;
}
</style>