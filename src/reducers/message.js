import * as Message from '../constants/Message';
import * as Types from './../constants/ActionType';

var initalSate= Message.MSG_WELCOME;

const message = (state = initalSate,action)=>{
    switch(action.type){
         case Types.CHANGE_MESSAGE:
          return action.message;
        default : return state;
    }
}


export default message;