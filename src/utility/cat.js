export const catData = [
  {
    id: '0',
    name: 'Toobey',
    gender: 'female',
    age: 1,
    weight: 1,
    status: 'normal',
    profileImg: require("../assets/images/cat1.jpg"),
    feeding: []
  },
  {
    id: '1',
    name: 'Rosy',
    gender: 'female',
    age: 3,
    weight: 2,
    status: 'normal',
    profileImg: require("../assets/images/cat2.jpg"),
    feeding: []
  },
  {
    id: '2',
    name: 'Leo',
    gender: 'male',
    age: 2,
    weight: 3,
    status: 'normal',
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
