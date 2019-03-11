import Cookies from 'js-cookie'

export const setTitle = (title) => {
  window.document.title = title || 'admin'
}

export const setToken = (token, tokenname = 'token') => {
  Cookies.set(tokenname, token)
}

export const getToken = (tokenname = 'token') => {
  Cookies.get(tokenname)
}
