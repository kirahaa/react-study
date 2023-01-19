export const catData = [
  {
    id: '0',
    name: 'Toobey',
    gender: 'women',
    age: 1,
    weight: 1,
    status: 'normal',
    profileImg: 'cat1.jpg',
    phone: '010-1234-1234',
    feeding: []
  },
  {
    id: '1',
    name: 'Rosy',
    gender: 'women',
    age: 3,
    weight: 2,
    status: 'fat',
    profileImg: 'cat2.jpg',
    phone: '010-5678-5678',
    feeding: []
  },
  {
    id: '2',
    name: 'Leo',
    gender: 'man',
    age: 2,
    weight: 3,
    status: 'gone',
    profileImg: 'cat3.jpg',
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
