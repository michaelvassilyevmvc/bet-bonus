<template>
  <article class="overflow-hidden rounded-lg shadow-lg mx-4 my-4">
    <img
      :src="opponent.avatar"
      alt="country-image"
      class="block h-auto w-full mb-3"
    />
    <footer class="flex flex-col gap-4">
      <h1 class="font-bold text-gray-600">{{ opponent.opponent }}</h1>
      <button
        class="bg-white border-green-500 font-bold text-black px-4 py-2 inline-block w-full"
      >
        {{ opponent.koef }}
      </button>
    </footer>
  </article>
</template>

<script setup>
defineProps({
  opponent: {
    type: Object,
    required: true,
  },
});
</script>
