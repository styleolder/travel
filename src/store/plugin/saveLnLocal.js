export default store => {
  console.log('store初始化')
  store.subscribe((mutation, state) => {
    console.log('提交mutation')
  })
}
