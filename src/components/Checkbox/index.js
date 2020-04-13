import React from 'react'
import { useForm } from 'react-hook-form'

import check from '../../assets/images/check-red.svg'

const Checkbox = props => {
  const {
    name,
    value
  } = props

  const { register } = useForm()

  return <label className="checkbox">
    <input name={name} type="checkbox" value={value} ref={register({ required: true })}/>
      <img src={check} alt="checkbox" />
      Novos
  </label>
}

export default Checkbox