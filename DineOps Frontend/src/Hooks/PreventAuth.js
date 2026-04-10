import { useEffect } from "react"
import { getData } from "../Https/index"
import { useDispatch } from "react-redux"
import { setUser, removeUser } from "../Redux/Slice/UserSlice"

const useLoadUser = () => {

  const dispatch = useDispatch()

  useEffect(() => {

    async function fetchUser() {

      try {

        const { data } = await getData()

        const { _id, name, email, phone, role } = data.data

        dispatch(setUser({ _id, name, email, phone, role }))

      } catch (error) {

        dispatch(removeUser())

      }
    }

    fetchUser()

  }, [dispatch])

}

export default useLoadUser