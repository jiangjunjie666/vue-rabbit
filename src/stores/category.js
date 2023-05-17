import { ref } from 'vue'
import { defineStore } from 'pinia'
import { getCategoryAPI } from '@/apis/layout'

//导航列表数据集中管理
export const useCategoryStore = defineStore('category', () => {
  const categoryList = ref([])

  const getCategory = async () => {
    const res = await getCategoryAPI()
    categoryList.value = res.data.result
  }
  return {
    categoryList,
    getCategory
  }
})
