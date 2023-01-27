export const catGender = {
  gender1: 'male',
  gender2: 'female'
}

export const catStatus = {
  status1: 'normal',
  status2: 'fat',
  status3: 'gone'
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
    feeding: []
  },
  {
    id: 1,
    name: 'Rosy',
    gender: catGender.gender2,
    age: 3,
    weight: 2,
    status: catStatus.status1,
    profileImg: require("../assets/images/cat2.jpg"),
    feeding: []
  },
  {
    id: 2,
    name: 'Leo',
    gender: catGender.gender1,
    age: 2,
    weight: 3,
    status: catStatus.status1,
    profileImg: require("../assets/images/cat3.jpg"),
    feeding: []
  }
]

/*
status : normal, fat, gone,,,
if weight = 30 -> fat
          = 45 -> gone

feeding: [
      {
        createdAt: '',
        createdBy: ''
      }
    ]
*/
