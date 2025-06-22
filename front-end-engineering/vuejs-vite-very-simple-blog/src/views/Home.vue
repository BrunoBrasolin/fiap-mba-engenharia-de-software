<template>
  <div class="max-w-3xl mx-auto px-4 py-8">
    <h1 class="text-4xl font-bold mb-8 text-center text-gray-800">Meu Blog</h1>
    <div v-if="!posts.length" class="text-center text-gray-500">
      <p>Nenhum post encontrado.</p>
    </div>

    <PostCard v-for="post in paginatedPosts" :key="post.id" :post="post" />

    <div class="flex justify-center mt-8 space-x-2">
      <button class="px-3 py-1 border rounded hover:bg-gray-100" :disabled="currentPage === 1" @click="currentPage--">
        Anterior
      </button>

      <button v-for="page in totalPages" :key="page" @click="currentPage = page" :class="[
        'px-3 py-1 border rounded',
        currentPage === page ? 'bg-blue-600 text-white' : 'hover:bg-gray-100'
      ]">
        {{ page }}
      </button>

      <button class="px-3 py-1 border rounded hover:bg-gray-100" :disabled="currentPage === totalPages"
        @click="currentPage++">
        Próxima
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { posts } from '../data/posts';
import PostCard from '../components/PostCard.vue';

const postsPerPage = 5;
const currentPage = ref(1);

const totalPages = Math.ceil(posts.length / postsPerPage);

const paginatedPosts = computed(() => {
  const start = (currentPage.value - 1) * postsPerPage;
  const end = start + postsPerPage;
  return posts.slice(start, end);
});
</script>
