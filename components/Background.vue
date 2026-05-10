<template>
    <div class="min-h-screen text-white overflow-x-hidden relative" style="background-color: #8B1A1A;">
      <div class="fixed top-[-150px] right-[-150px] w-[500px] h-[500px] rounded-full opacity-20 pointer-events-none z-0" style="background-color: #C0726E;"></div>
      <div class="fixed bottom-[200px] left-[-100px] w-[350px] h-[350px] rounded-full opacity-15 pointer-events-none z-0" style="background-color: #C0726E;"></div>
  
      <slot />
    </div>
  </template>