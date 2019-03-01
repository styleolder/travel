export const getUserName = () => {
  return new Promise((resolve, reject) => {
    const err = null
    setTimeout(() => {
      if (!err) {
        resolve({
          code: 200,
          info: {
            username: 'hello vue'
          }
        })
      } else {
        reject(err)
      }
    })
  })
}
