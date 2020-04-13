export const getMakeAPI = async () => {
  const response = await fetch(`http://desafioonline.webmotors.com.br/api/OnlineChallenge/Make`, { method: 'get' })
  const data = await response.json()
  return data
}