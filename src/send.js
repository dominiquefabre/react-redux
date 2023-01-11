import delay from 'delay'

const send = async data => {
  console.log({data})
  await delay(2000)
  return true
}

export default send