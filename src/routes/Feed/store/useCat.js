import {atom, useRecoilState} from 'recoil'
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