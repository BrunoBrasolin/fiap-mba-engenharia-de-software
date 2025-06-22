<template>
  <div class="max-w-3xl mx-auto px-4 py-10">
    <div v-if="post">
      <!-- Breadcrumb -->
      <nav class="text-sm text-gray-500 mb-6">
        <router-link to="/" class="hover:underline text-blue-600">Home</router-link>
        <span class="mx-2">/</span>
        <span class="text-gray-700 font-medium">{{ post.title }}</span>
      </nav>

      <!-- Post Content -->
      <h1 class="text-3xl font-bold text-gray-800 mb-4">{{ post.title }}</h1>
      <p class="text-lg text-gray-700 leading-relaxed">{{ post.content }}</p>
    </div>

    <div v-else class="text-center text-gray-500 text-lg mt-20">
      <p>Post não encontrado.</p>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { posts } from '../data/posts';

const route = useRoute();
const post = posts.find((p) => p.slug === route.params.slug);
</script>
