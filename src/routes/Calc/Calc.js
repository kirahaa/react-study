import styled from 'styled-components'
import classNames from "classnames/bind"
import {useEffect, useState} from 'react'
import style from './Calc.module.scss'
const cx = classNames.bind(style)

const CalcWrap = styled.div`
  display: flex;
  gap: 1px;
  background-color: ${(props) => props.theme.colors.bgLight};
  
  @media (max-width: 720px) {
    flex-direction: column;
  }
`

const CalcBox = styled.div`
  flex: 1;
  padding: 2rem;
  background-color: ${(props) => props.theme.colors.bg};
  
  h2{
    font-family: 'Bungee', cursive;
    font-weight: 800;
  }

  p {
    padding: 1rem 2rem;
    font-size: 1.1rem;
  }
`

const Input = styled.input`
  width: 100%;
  padding: 1rem 0;
  border-bottom: ${(props) => `1px solid ${props.theme.colors.bgLight}`};
  font-size: 1.5rem;
  background: ${(props) => props.theme.colors.bg};
`

const Button = styled.button`
  padding: 1rem 2rem;
  background: ${(props) => props.theme.primary};
`

const Calc = () => {
  const [percentage, setPercentage] = useState({standard: '', element: ''})
  const [percentageResult, setPercentageResult] = useState('')

  const [rem, setRem] = useState({standard: '', default: '', relative: ''})
  const [remResult, setRemResult] = useState('')

  const [proportion, setProportion] = useState({A: '', B: '', C: '', X: 'x'})
  const [proportionResult, setProportionResult] = useState('')

  const submit = (event) => {
    event.preventDefault()
    const {target: {id}} = event

    if (id === 'percentage') {
      setPercentageResult((percentage.element / percentage.standard) * 100)
    } else if (id === 'rem') {
      setRemResult((rem.default * rem.relative) / rem.standard)
    } else {
      setProportionResult((proportion.B * proportion.C) / proportion.A)
    }
  }

  return (
    <CalcWrap>
      <CalcBox>
        <h2>1. Percentage</h2>
        <p>e.g., position, width, height...</p>
        <form id="percentage" className={cx('calc__forms')} onSubmit={submit}>
          <Input
            type="number"
            id="percentage-standard"
            value={percentage.standard}
            className="calc__input"
            placeholder="기준값 e.g, 1440, 750px..."
            onChange={(event) => setPercentage({...percentage, standard: event.target.value})}/>
          <Input
            type="number"
            id="percentage-standard"
            value={percentage.element}
            className="calc__input"
            placeholder="요소값"
            onChange={(event) => setPercentage({...percentage, element: event.target.value})}/>
          <Button>Enter</Button>
        </form>
        <strong className={cx('calc__result')}>
          > "{percentageResult}" %
        </strong>
      </CalcBox>
      <CalcBox>
        <h2>2. Root element</h2>
        <p>e.g., @media ( min || max standard ) { `{ value }` }</p>
        <form id="rem" className={cx('calc__forms')} onSubmit={submit}>
          <Input
            type="number"
            value={rem.standard}
            className="calc__input"
            placeholder="기준값 e.g, 1440, 750px..."
            onChange={(event) => setRem({...rem, standard: event.target.value })}/>
          <Input
            type="number"
            value={rem.default}
            className="calc__input"
            placeholder="기본값 e.g, 10px"
            onChange={(event) => setRem({...rem, default: event.target.value })}/>
          <Input
            type="number"
            value={rem.relative}
            className="calc__input"
            placeholder="상대값 e.g, 375, 320px..."
            onChange={(event) => setRem({...rem, relative: event.target.value })}/>
          <Button>Enter</Button>
        </form>
        <strong className={cx('calc__result')}>
          > "{remResult}" %
        </strong>
      </CalcBox>
      <CalcBox>
        <h2>3. proportional expression</h2>
        <p>e.g., A : B = C : 𝓍</p>
        <form id="proportion" className={cx('calc__forms')} onSubmit={submit}>
          <Input
            type="number"
            value={proportion.A}
            className="calc__input"
            placeholder="A"
            onChange={(event) => setProportion({...proportion, A: event.target.value})}/> :
          <Input
            type="number"
            value={proportion.B}
            className="calc__input"
            placeholder="B"
            onChange={(event) => setProportion({...proportion, B: event.target.value})}/> =
          <Input
            type="number"
            value={proportion.C}
            className="calc__input"
            placeholder="C"
            onChange={(event) => setProportion({...proportion, C: event.target.value})}/> :
          <Input
            type="text"
            value={proportion.X}
            className="calc__input"
            placeholder="X"
            readOnly/>
          <Button>Enter</Button>
        </form>
        <strong className={cx('calc__result')}>
          > "{proportionResult}" %
        </strong>
      </CalcBox>
    </CalcWrap>
  )
}

export default Calc