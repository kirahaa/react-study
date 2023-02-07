import {atom, selector, useRecoilState} from 'recoil'
import {catData} from '../../../database/cats'
import {recoilPersist} from 'recoil-persist'

const {persistAtom} = recoilPersist()

const catsState = atom({
  key: 'catsState',
  default: catData,
  effects_UNSTABLE: [persistAtom]
})

const selectedCatState = atom({
  key: 'selectedCatState',
  default: null
})

export const catStatusSelector = selector({
  key: 'catStatusSelector',
  get: ({get}) => {
    const selectedCat = get(selectedCatState)
    if (selectedCat) {
      return selectedCat.status
    } else {
      return null
    }
  }
})

const useCat = () => {
  const [cats, setCats] = useRecoilState(catsState)
  const [selectedCat, setSelectedCat] = useRecoilState(selectedCatState)

  return {
    cats,
    setCats,
    selectedCat,
    setSelectedCat
  }
}

export default useCat