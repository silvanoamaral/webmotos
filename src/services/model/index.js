export const getModelAPI = async (id) => {
  const response = await fetch(`http://desafioonline.webmotors.com.br/api/OnlineChallenge/Model?MakeID=${id}`, { method: 'get' })
  const data = await response.json()
  return data
}