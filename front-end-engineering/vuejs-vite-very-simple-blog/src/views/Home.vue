<template>
  <div class="max-w-3xl mx-auto px-4 py-8">
    <h1 class="text-4xl font-bold mb-8 text-center text-gray-800">Meu Blog</h1>

    <div v-if="loading" class="text-center text-gray-500">Carregando posts...</div>

    <div v-if="error" class="text-center text-red-500 mb-6">{{ error }}</div>

    <template v-if="!loading && !error">
      <PostCard v-for="post in paginatedPosts" :key="post.id" :post="post" />

      <nav class="flex justify-center mt-8 space-x-2" aria-label="Paginação do blog">
        <button class="px-3 py-1 border rounded hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
          :disabled="currentPage === 1" @click="currentPage--" aria-label="Página anterior">
          Anterior
        </button>

        <button v-for="page in totalPages" :key="page" @click="currentPage = page"
          :aria-current="currentPage === page ? 'page' : undefined" :class="[
            'px-3 py-1 border rounded',
            currentPage === page
              ? 'bg-blue-600 text-white'
              : 'hover:bg-gray-100'
          ]">
          {{ page }}
        </button>

        <button class="px-3 py-1 border rounded hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
          :disabled="currentPage === totalPages" @click="currentPage++" aria-label="Próxima página">
          Próxima
        </button>
      </nav>
    </template>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import PostCard from '../components/PostCard.vue';

const posts = ref([]);
const loading = ref(false);
const error = ref(null);

const postsPerPage = 10;
const currentPage = ref(1);

const totalPages = computed(() => Math.ceil(posts.value.length / postsPerPage));

const paginatedPosts = computed(() => {
  const start = (currentPage.value - 1) * postsPerPage;
  return posts.value.slice(start, start + postsPerPage);
});

async function fetchPosts() {
  loading.value = true;
  error.value = null;
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    if (!response.ok) {
      throw new Error(`Erro ao buscar posts (status ${response.status})`);
    }
    const data = await response.json();

    posts.value = data.map(post => ({
      ...post,
      slug: `post-${post.id}`,
      description: post.body.slice(0, 80) + '...',
      content: post.body,
    }));

    currentPage.value = 1;
  } catch (err) {
    error.value = err.message || 'Erro desconhecido ao buscar posts.';
    posts.value = [];
  } finally {
    loading.value = false;
  }
}

onMounted(() => {
  fetchPosts();
});
</script>
