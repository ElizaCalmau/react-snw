
let ADD_POST = 'ADD-POST';
let UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
let initialState = {
  
  post:[
    {message:'hello, world!', likesCount: 10},
    {message: 'It is me!', likesCount: 22},
    {message: 'okay', likesCount: 25}
],
newPostText:'it-kamasutra'
}
const profileReducer = (state = initialState, action) => {

  if(action.type === 'ADD_POST'){
    
    let newPost = {
      id: 5,
      message: state.newPostText,
      likesCount: 0
    };
    state.post.push(newPost);
    state.newPostText='';
    
  } else if (action.type === 'UPDATE_NEW_POST_TEXT'){
    state.newPostText = action.newText;
    
  }
  
  return state;
}
// switch(action.type){
//   case ADD_POST:  
//     let newPost = {
//       id: 5,
//       message: state.newPostText,
//       likesCount: 0
//       }
//         state.post.push(newPost);
//         state.newPostText='';

//         return state;
//   case UPDATE_NEW_POST_TEXT:
//     state.newPostText = action.newText;
//     return state;
//   default: 
//     return state;
    


export let addPostActionCreator = () => {
    return {
      type : 'ADD_POST'
    }
  }

export let updateNewPostTextActionCreator = (text) =>{
    return {
      type : 'UPDATE_NEW_POST_TEXT',
      newText: text
    }
}

export default profileReducer;