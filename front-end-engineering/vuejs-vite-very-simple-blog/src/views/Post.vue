<template>
  <div class="max-w-3xl mx-auto px-4 py-10">
    <nav class="text-sm text-gray-500 mb-6">
      <router-link to="/" class="hover:underline text-blue-600">Home</router-link>
      <span class="mx-2">/</span>
      <span v-if="post" class="text-gray-700 font-medium">{{ post.title }}</span>
    </nav>

    <div v-if="loading" class="text-center text-gray-500">Carregando post...</div>

    <article v-else-if="post" class="prose max-w-none">
      <h1 class="text-3xl font-bold mb-4">{{ post.title }}</h1>
      <p class="whitespace-pre-line">{{ post.body }}</p>
    </article>

    <div v-else class="text-center text-gray-500 text-lg mt-20">
      <p>Post não encontrado.</p>
    </div>
  </div>
</template>

<script setup>
import { ref, watchEffect } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const post = ref(null);
const loading = ref(false);
const error = ref(null);

function extractId(slug) {
  const match = slug?.match(/^post-(\d+)$/);
  return match ? Number(match[1]) : null;
}

async function fetchPost(id) {
  if (!id) {
    post.value = null;
    error.value = 'ID inválido';
    return;
  }
  loading.value = true;
  error.value = null;
  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    if (!res.ok) {
      post.value = null;
      error.value = `Post não encontrado (status: ${res.status})`;
      return;
    }
    post.value = await res.json();
  } catch (err) {
    error.value = 'Erro ao buscar post.';
    post.value = null;
    console.error(err);
  } finally {
    loading.value = false;
  }
}

watchEffect(() => {
  const slug = route.params.slug;
  const id = extractId(slug);
  fetchPost(id);
});
</script>

<style scoped>
.prose {
  line-height: 1.6;
  font-size: 1.125rem;
  color: #374151;
}
</style>
