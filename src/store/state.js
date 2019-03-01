let defaultcity = '西安'
try {
  if (localStorage.city) {
    defaultcity = localStorage.city
  }
} catch (e) {}

const state = {
  city: defaultcity
}
export default state
