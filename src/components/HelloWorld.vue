<template>
  <h1>{{ msg }}</h1>
  <div>
    <div>
      <!-- <div>userId</div> -->
      <div>{{ userId }}</div>
    </div>
    <div>
      <!-- <div>userFirstName</div> -->
      <div>{{ userFirstName }}</div>
    </div>
    <div>
      <!-- <div>userLastName</div> -->
      <div>{{ userLastName }}</div>
    </div>
    <div>
      <!-- <div>languageCode</div> -->
      <div>{{ languageCode }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

defineProps<{ msg: string }>()

const userId = ref("")
const userFirstName = ref("")
const userLastName = ref("")
const languageCode = ref("")

onMounted(() =>{
    const tg = (window as any).Telegram.WebApp;
    tg.expand(); // 全螢幕
    // 取得使用者資訊
    const user = tg.initDataUnsafe?.user;
    if (user) {
      console.log("User info:", user);
      userId.value = user.id;
      userFirstName.value = user.first_name;
      userLastName.value = user.last_name;
      languageCode.value = user.language_code;
    } else {
      // console.log("找不到使用者資料");
      tg.showAlert("找不到使用者資料");
    }
  }
)

</script>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
