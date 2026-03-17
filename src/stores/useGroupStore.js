import { defineStore } from 'pinia'

export const useGroupStore = defineStore('group', {
  state: () => ({
    name: 'Leechat在线聊天群',
  }),
  actions: {
    setName(name) {
      this.theme = name
    },
  },
})
