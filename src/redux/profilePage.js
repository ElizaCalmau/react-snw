let ADD_POST = 'ADD-POST';
let UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const profilePage = (state, action) => {

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

export default profilePage;