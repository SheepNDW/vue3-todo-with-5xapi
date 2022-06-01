import { ref } from 'vue'
import { checkAuth } from '@/api/users'
import { useRouter } from 'vue-router'

export default function useCheckAuth() {
  const router = useRouter()
  const checkSuccess = ref(false)

  const checkLogin = async () => {
    try {
      await checkAuth()
      checkSuccess.value = true
    } catch (err) {
      alert('請先登入!')
      router.push('/login')
    }
  }

  return {
    checkSuccess,
    checkLogin
  }
}
