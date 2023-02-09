import useInterval from './useInterval'
import {useState} from 'react'
import useCat from '../routes/Feed/store/useCat'
import {AGE_GONE, catStatus, WEIGHT_FAT, WEIGHT_GONE} from '../database/cats'

const useTimer = (func) => {
  const [now, setNow] = useState(new Date())
  const {cats, setCats, setSelectedCat} = useCat()

  // 마지막으로 먹은 시간에 따라 몸무게 줄어드는 고양이
  let currentCats = cats.map(cat => {
    const duration = cat.recordList.some(item => {
      return Math.floor(((now.getTime() - new Date(item.createdAt).getTime()) / (1000 * 60)) % 60) % 2 === 0
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

  useInterval(() => {
    setCats(currentCats)
    func()
  }, 10000)
}

export default useTimer