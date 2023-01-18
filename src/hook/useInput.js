import {useCallback, useState} from "react";

const useInput = (initialValue) => {
  const [inputValue, setInputValue] = useState(initialValue)
  const [lists, setLists] = useState([])

  const handleChange = useCallback(event => {
    const { target: {value} } = event
    setInputValue(value)
  }, [])

  const handleSubmit = (event) => {
    event.preventDefault()
    setInputValue('')
    setLists([...lists, inputValue])
  }

  return [inputValue, handleChange, lists, handleSubmit]
}


export default useInput