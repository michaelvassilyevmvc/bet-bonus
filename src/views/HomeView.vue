<template>
  <div class="flex flex-col justify-center items-center pt-7">
    <Match v-for="match in matches" :match="match" :key="match.id" />
  </div>
</template>

<script setup>
import { MATCHES } from "../../data";
import { ref } from "vue";
import Match from "../components/Match.vue";

const matches = ref(MATCHES);
console.log(matches.value);
</script>
