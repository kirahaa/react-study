import {useCallback, useState} from "react";

const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue)

  const onChange = useCallback(event => {
    const { target: {value} } = event
    setValue(value)
  }, [])

  return [value, onChange]
}

export default useInput