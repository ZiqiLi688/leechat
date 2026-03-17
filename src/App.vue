<template>
  <ToastProvider>
    <div :data-theme="themeStore.theme">
      <leechat-dialog
        :is-open="globalStore.isOpenGlobalDialog"
        :title="globalStore.dialogTitle"
        :content="globalStore.dialogContent"
        @ok="handlerLogout"
        @cancel="handlerLogout"
      />
      <RouterView />
    </div>
  </ToastProvider>
</template>

<script setup>
import { onMounted } from 'vue'
import { RouterView, useRouter } from 'vue-router'
import { useThemeStore } from '@/stores/useThemeStore.js'
import ToastProvider from '@/components/ToastProvider.vue'
import LeechatDialog from '@/components/LeechatDialog.vue'
import { useGlobalStore } from '@/stores/useGlobalStore.js'
import ws from '@/utils/ws.js'
import { useUserInfoStore } from '@/stores/useUserInfoStore.js'


/* ===== 1. 把 5 个仓库都拿过来 ===== */
import { useChatMsgStore } from '@/stores/useChatMsgStore.js'
import { useGroupStore } from '@/stores/useGroupStore.js'

/* ===== 2. 拿到实例 ===== */

const chatMsgStore = useChatMsgStore()
const groupStore = useGroupStore()

const themeStore = useThemeStore()
const globalStore = useGlobalStore()
const userInfoStore = useUserInfoStore()
const router = useRouter()
const handlerLogout = () => {
  localStorage.removeItem('x-token')
  userInfoStore.clearUserInfo()
  ws.disConnect()
  router.push('/login')
  globalStore.closeGlobalDialog()
}





/* ===== 3. 生命周期里统一打印 ===== */
onMounted(() => {
  console.log('🔷 用户信息:', userInfoStore.$state)
  console.log('💬 聊天记录:', chatMsgStore.$state)
  console.log('🌍 全局弹窗:', globalStore.$state)
  console.log('👥 群聊信息:', groupStore.$state)
  console.log('🎨 主题状态:', themeStore.$state)
})



</script>

<style scoped></style>

