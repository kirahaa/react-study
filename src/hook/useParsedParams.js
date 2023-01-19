import {useParams} from 'react-router-dom'

const useParsedParams = () => {
  const params = useParams()
  const { id } = params
  return JSON.parse(id)
}

export default useParsedParams