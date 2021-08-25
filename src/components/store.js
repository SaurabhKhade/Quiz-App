import { createSlice, configureStore } from '@reduxjs/toolkit'

const timeElapse = createSlice({
  name: 'time-elapse',
  initialState: {
    value: 0
  },
  reducers: {
    initiate: state => {
      state.value += 1
    },
    decremented: state => {
      state.value -= 1
    }
  }
})

export const { incremented, decremented } = counterSlice.actions

const store = configureStore({
  reducer: counterSlice.reducer
})

store.subscribe(() => console.log(store.getState()))

store.dispatch(incremented())
store.dispatch(incremented())
store.dispatch(decremented())