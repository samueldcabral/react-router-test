const initState = {
  posts: [
    {id: '1', title: 'Squirtle Mirtle', body: 'lorem ipsum'},
    {id: '2', title: 'Charmander Fender', body: 'lorem ipsum'},
    {id: '3', title: 'Pikachu Tofu', body: 'lorem ipsum'}
  ]
}
const rootReducer = (state = initState, action) => {
  if(action.type === 'DELETE_POST'){
    let newPosts = state.posts.filter(post => post.id !== action.id);
    return {
      ...state,
      posts: newPosts
    }
  }
  return state;
}

export default rootReducer;