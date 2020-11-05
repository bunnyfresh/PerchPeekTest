import { createSlice } from '@reduxjs/toolkit';


//get activities from Local Storage
const LS_ACTIVITIES = JSON.parse(localStorage.getItem("activities"));

export const activitiesSlice = createSlice({
  name: 'activities',
  initialState: {
    activities: (LS_ACTIVITIES && LS_ACTIVITIES.length > 0) ? LS_ACTIVITIES : [],
  },
  reducers: { 
    add: (state, action) => { 
      state.activities.push(action.payload);
      //add activities to local storage
      localStorage.setItem("activities", JSON.stringify(state.activities));
    },
  },
});

export const { add } = activitiesSlice.actions;

export const selectActivities = state =>  state.activities.activities;
 
// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
// export const selectCount = state => state.counter.value;

export default activitiesSlice.reducer;
