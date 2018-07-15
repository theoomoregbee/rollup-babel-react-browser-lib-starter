import Cache from '../../helpers/cache'

export const performAsync = () => {
  const options = Cache.get('options')
  return new Promise((resolve) => {
    setTimeout(() => {
      window.alert('check console for options')
      console.log('options', options)
      resolve(['lib', 'rollup', 'babel', 'react'])
    }, 1000)
  })
}
