export const catData = [
  {
    id: '0',
    name: 'Toobey',
    gender: 'female',
    age: 1,
    weight: 1,
    status: 'normal',
    profileImg: require("../assets/images/cat1.jpg"),
    phone: '010-1234-1234',
    feeding: []
  },
  {
    id: '1',
    name: 'Rosy',
    gender: 'female',
    age: 3,
    weight: 2,
    status: 'fat',
    profileImg: require("../assets/images/cat2.jpg"),
    phone: '010-5678-5678',
    feeding: []
  },
  {
    id: '2',
    name: 'Leo',
    gender: 'male',
    age: 2,
    weight: 3,
    status: 'gone',
    profileImg: require("../assets/images/cat3.jpg"),
    phone: '010-0000-0000',
    feeding: []
  }
]

/*
status : normal, fat, gone,,,
if age = 15 gone
if weight = 30 -> fat
          = 45 -> gone

feeding: [
      {
        createdAt: '',
        createdBy: ''
      }
    ]

    lastEatTime: null
    firstEatTime: null

*/
