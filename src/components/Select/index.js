import React from 'react'
import { useForm } from 'react-hook-form'

const Select = props => {
  const {
    title,
    data,
    nameSelect,
    onChange
  } = props

  const { register } = useForm()

  return <select name={nameSelect}
      ref={register({ required: true })}
      onChange={e => {
        const value = e.target.value
        onChange(value)
      }}
    >
    <option key={0} value={0}>{title}</option>

    {data.length && data.map(item => {
        return <option key={item.ID} value={item.ID}>{item.Name}</option>
      })
    }
  </select>
}

export default Select