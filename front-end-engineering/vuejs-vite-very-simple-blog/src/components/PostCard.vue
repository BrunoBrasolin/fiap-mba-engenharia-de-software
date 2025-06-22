<template>
  <router-link :to="`/post/${post.slug}`" class="block">
    <div class="mb-6 p-6 border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition duration-300 bg-white">
      <h2 class="text-2xl font-bold text-blue-600 hover:underline mb-2">
        {{ post.title }}
      </h2>
      <p class="text-gray-600 text-base">{{ post.description }}</p>
    </div>
  </router-link>
</template>

<script setup>
defineProps({ post: Object });
</script>
