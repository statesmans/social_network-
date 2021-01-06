let initialState = {
  
    friends: [
      {
          id: 1,
          userName: 'Julia',
          userImage: 'https://i.pinimg.com/originals/64/a8/8f/64a88f80d6b5a43b58d14c20c7ef4b89.jpg'
      },
      {
          id: 2,
          userName: 'Yuriy',
          userImage: 'https://i.pinimg.com/236x/74/05/5f/74055f83bfbdc20fdc1f9d1fc116fd26.jpg'
      },
      {
          id: 3,
          userName: 'Vasiliy',
          userImage: 'https://images.alphacoders.com/711/thumb-350-711581.jpg'
      },
      {
          id: 4,
          userName: 'Goga',
          userImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHdh5HHplZ0GfAxuijEAh6cC4sFdTrskGs0A&usqp=CAU'
      }
    ]}

const sideBarReducer = (state = initialState, action) => {

    return state
}

export default sideBarReducer