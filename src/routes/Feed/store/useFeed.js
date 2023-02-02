import {atom, selector, useRecoilState} from 'recoil'
import {catData} from '../../../database/cats'

const catsState = atom({
  key: 'catsState',
  default: catData
})

const selectedCatState = atom({
  key: 'selectedCatState',
  default: null
})

const useFeed = () => {
  const [cats, setCats] = useRecoilState(catsState)
  const [selectedCat, setSelectedCat] = useRecoilState(selectedCatState)

  return {
    cats,
    setCats,
    selectedCat,
    setSelectedCat
  }
}

export default useFeed