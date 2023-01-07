 export const userData = [
  {
    name: "김하영",
    loginId: "hayeong",
    password: "123123123",
    phoneNumber: "010-6213-6178",
    isAdmin: true,
    accessToken: "18c1021a9b9d8e9999edf028182e3",
    abilities: [
      {
        action: "dashboard",
        permission: "manage"
      },
      {
        action: "users",
        permission: "read"
      }
    ]
  },
  {
    name: "온유",
    loginId: "onew",
    password: "123123123",
    phoneNumber: "010-1243-1234",
    isAdmin: false,
    accessToken: "43c1051a9b9d8e7779123328182e4",
    abilities: [
      {
        action: "dashboard",
        permission: "read"
      },
      {
        action: "users",
        permission: "read"
      }
    ]
  }
]