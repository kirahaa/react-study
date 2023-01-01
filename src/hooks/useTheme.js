import {useDispatch, useSelector} from "react-redux"
import {handleTheme} from "../redux/layout"
import {dark, light} from "../utility/theme"

export const useTheme = () => {
  const dispatch = useDispatch()
  const storeTheme = useSelector(state => state.layout.theme)
  const mode = storeTheme ? dark : light

  const setTheme = () => {
    dispatch(handleTheme(!storeTheme))
  }

  return {theme: storeTheme, setTheme, mode: mode}
}