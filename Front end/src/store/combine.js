import { combineReducers } from 'redux';
import categorySlice from './reducer/categorySlice';
import taskSlice from './reducer/taskSlice';
import userSlice from './reducer/userSlice';



export default combineReducers({
    category:categorySlice,
    task:taskSlice,
    user:userSlice,
});
