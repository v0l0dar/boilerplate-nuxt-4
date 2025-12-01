<template>
  <main class="min-h-screen space-y-8 p-8 font-mono text-sm">
    <div class="grid grid-cols-4 gap-6">
      <div
        class="h-32 rounded-lg bg-TXT text-white flex items-center justify-center">
        TXT (#0C0612)
      </div>
      <div
        class="h-32 rounded-lg bg-BG text-white flex items-center justify-center">
        BG (DEFAULT)
      </div>
      <div
        class="h-32 rounded-lg bg-green text-white flex items-center justify-center">
        green (DEFAULT = #01C11F)
      </div>
      <div
        class="h-32 rounded-lg bg-green-light text-black flex items-center justify-center">
        green-light
      </div>
      <div
        class="h-32 rounded-lg bg-BG-quest text-black flex items-center justify-center">
        BG-quest (#E9DCAE)
      </div>
      <div
        class="h-32 rounded-lg bg-BG-hover text-black flex items-center justify-center">
        BG-hover (с альфой)
      </div>
      <div
        class="h-32 rounded-lg bg-BG-active text-black flex items-center justify-center">
        BG-active (#F6D515)
      </div>
    </div>
    <div>
      <h1>Your Application</h1>
      <Button label="Hello World" />
    </div>
  </main>
</template>
<script setup lang="ts">
import Button from '../src/volt/Button.vue';
</script>
