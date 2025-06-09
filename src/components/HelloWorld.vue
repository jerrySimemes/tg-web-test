<script setup lang="ts">
import { onMounted } from 'vue'

defineProps<{ msg: string }>()

onMounted(() =>{
    const tg = (window as any).Telegram.WebApp;
    
    if (!tg) {
      alert("請從 Telegram Bot 開啟此網站");
      return;
    }

    tg.expand(); // 全螢幕
    tg.showAlert("Hello from Telegram Mini App");
  }
)

</script>

<template>
  <h1>{{ msg }}</h1>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
