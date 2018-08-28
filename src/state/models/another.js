const defaultState = {
  anotherCount: 1,
  anotherIsLoading: false,
  anotherIsLoaded: true,
  anotherList: []
}

export default {
  state: {
    ...defaultState
  },
  reducers: {
    increment: state => {
      state.anotherCount += 1
      state.anotherIsLoading = !state.anotherIsLoading
      state.anotherIsLoaded = !state.anotherIsLoaded
      state.anotherList.push(state.anotherCount)
      return { ...state }
    },
    resetState: () => {
      return { ...defaultState }
    }
  },
}
