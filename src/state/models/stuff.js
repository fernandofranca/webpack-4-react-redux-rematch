const defaultState = {
  count: 1,
  isLoading: false,
  isLoaded: true,
  list: []
}

export default {
  state: {
    ...defaultState
  },
  reducers: {
    increment: state => {
      state.count += 1
      state.isLoading = !state.isLoading
      state.isLoaded = !state.isLoaded
      return { ...state }
    },
    resetState: () => {
      return { ...defaultState }
    }
  },
  effects: {
    incrementAsync(payload, rootState) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          dispatch.stuff.increment()
          resolve()
        }, 1000)
      });
    }
  }
}
