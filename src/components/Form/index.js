import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { useForm } from 'react-hook-form'

import { makeReducer, modelReducer, versionReducer } from '../../redux/actions'
import Select from '../Select'
import Checkbox from '../Checkbox'
import arrowBack from '../../assets/images/back-arrow.svg'
import location from '../../assets/images/icon-location.svg'

import './Form.scss'

const Form = props => {
  const { register, handleSubmit } = useForm()

  const onSubmit = (data) => console.log(data)

  useEffect(() => {
    props.makeReducer()
  },[])

  const faixapreco = [
    {
      "ID": '1',
      "Name":"R$ 1999,99"
    },
    {
      "ID": '2',
      "Name":"R$ 2999,99"
    }
  ]
  const faixaano = [
    {
      "ID": '1',
      "Name":"2000"
    },
    {
      "ID": '2',
      "Name":"2020"
    }
  ]

  const consoleLog = e =>{
    console.log(e)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <div className="tipo__carro">
          <Checkbox
            name="tipo__carro"
            value="carroNovo"
          />
          <Checkbox
            name="tipo__carro"
            value="carroUsado"
          />
        </div>

        <div className="row">
          <div className="col marginright">
            <div className="col">
              <div className="location">
                <img src={location} alt="location" />
                <input type="text" placeholder="Onde" name="location" ref={register({ required: true })} />
                <Select
                  nameSelect="faixaraio"
                  title="Raio"
                  data={faixaano}
                  onChange={consoleLog}
                />
              </div>
            </div>
            <div className="col">
              <Select
                nameSelect="faixaano"
                title="Ano Desejado"
                data={faixaano}
                onChange={consoleLog}
              />

              <Select
                nameSelect="faixapreco"
                title="Faixa de Preço"
                data={faixapreco}
                onChange={consoleLog}
              />
            </div>
          </div>

          <div className="col marginleft">
            <div>
              <Select
                nameSelect="make"
                title="Selecione uma Marca"
                data={props.make}
                onChange={props.modelReducer}
              />

              <Select
                nameSelect="model"
                title="Selecione um Modelo"
                data={props.model}
                onChange={props.versionReducer}
              />
            </div>
            <div>
              <Select
                nameSelect="version"
                title="Selecione um Versão"
                data={props.version}
                onChange={consoleLog}
              />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <div>
              <button className="btn__avancar">
                <img src={arrowBack} alt="arrow-back" />
                Busca Avançada
              </button>
            </div>
          </div>
          <div className="col btn">
            <div>
              <button className="btn__limpar">Limpar filtros</button>
              <button type='submit' className="btn__ofertas">Ver Ofertas</button>
            </div>
          </div>
        </div>
      </div>
    </form>
  )
}

const mapStateToProps = store => ({
  make: store.makeReducer.make,
  model: store.modelReducer.model,
  version: store.versionReducer.version
})

const mapDispatchToProps = {
  makeReducer,
  modelReducer,
  versionReducer
}

export default connect(mapStateToProps, mapDispatchToProps)(Form)