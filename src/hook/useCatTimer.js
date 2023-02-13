import useInterval from './useInterval'
import {useRef} from 'react'
import useCat from '../routes/Feed/store/useCat'
import {AGE_GONE, catStatus, WEIGHT_FAT, WEIGHT_GONE} from '../database/cats'

const useCatTimer = (func, delay) => {
  const now = useRef(new Date())
  const {cats} = useCat()

  // 마지막으로 먹은 시간에 따라 몸무게 줄어드는 고양이
  let currentCats = cats.map(cat => {
    const duration = cat.recordList.some(item => {
      return Math.floor(((new Date(item.createdAt).getTime() - now.current.getTime()) / (1000 * 60)) % 60) % 30 === 0
    })
    return duration ? {
      ...cat,
      weight: cat.weight > 0 ? cat.weight - 1 : 0,
      status: cat.weight >= WEIGHT_FAT && cat.weight < WEIGHT_GONE
        ? catStatus.status2
        : (cat.weight >= WEIGHT_GONE || cat.age >= AGE_GONE || ((cat.weight / cat.age) * 100) < 10 || cat.weight < 0
          ? catStatus.status3
          : catStatus.status1)}
      : cat
  })
  // TODO:: 작동을 하긴 하는데 detail 페이지에서 selectedCat은 바로 업데이트되지 않고 페이지를 나갔다 들어와야 업데이트 됨..
  useInterval(() => {
    func(currentCats)
  }, delay)
}

export default useCatTimer