export const catGender = {
  gender1: 'male',
  gender2: 'female'
}

export const catStatus = {
  status1: 'normal',
  status2: 'fat',
  status3: 'gone',
  status4: 'exercise'
}

export const catFeedType = {
  feed1: 'fish',
  feed2: 'canned',
  feed3: 'water'
}

export const WEIGHT_FAT = 30

export const WEIGHT_GONE = 45

export const AGE_GONE = 15

export const TIME_FEED = Math.floor(Math.random() * 9) + 2 // 2초 ~ 10초까지 랜덤하게

export const TIME_EXERCISE = 10

export const TIME_MSG = 5

export const TIME_LOSE_WEIGHT = 180000 // 30분

export const TIME_AGING = 360000 // 1시간

export const catMessage = {
  m1: '집사 하이?',
  m2: '안먹을고얏!',
  m3: '맛있구나 집사야',
  m4: '운동중이니 건들지마라 냥!',
  m5: '배가 통통해졌다 냥..',
  m6: '...☠',
  m7: '한 살 먹었다 냥!',
  m8: '집사야 심심하다..',
  m9: '운동하니 기분이 좋다 냥~!',
  m10: '룰루~🐾'
}

export const catData = [
  {
    id: 0,
    name: 'Toobey',
    gender: catGender.gender2,
    age: 1,
    weight: 1,
    status: catStatus.status1,
    profileImg: require("../assets/images/cat1.jpg"),
    recordList: []
  },
  {
    id: 1,
    name: 'Rosy',
    gender: catGender.gender2,
    age: 1,
    weight: 1,
    status: catStatus.status1,
    profileImg: require("../assets/images/cat2.jpg"),
    recordList: []
  },
  {
    id: 2,
    name: 'Leo',
    gender: catGender.gender1,
    age: 1,
    weight: 1,
    status: catStatus.status1,
    profileImg: require("../assets/images/cat3.jpg"),
    recordList: []
  }
]

/*
status : normal, fat, gone,,,
if weight = 30 -> fat
          = 45 -> gone

recordList: [
      {
        type: '',
        createdAt: '',
        createdBy: ''
      }
    ]
*/
