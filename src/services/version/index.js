export const getVersionAPI = async (id) => {
  const response = await fetch(`http://desafioonline.webmotors.com.br/api/OnlineChallenge/Version?ModelID=${id}`, { method: 'get' })
  const data = await response.json()
  return data
}