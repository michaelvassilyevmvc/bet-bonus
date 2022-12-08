<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div>
    <RouterLink to="/" active-class="text-green-500">Home</RouterLink>
  </div>
  <RouterView />
</template>
