import styled from 'styled-components'
import classNames from "classnames/bind"
import {useState} from 'react'
import style from './Calc.module.scss'
const cx = classNames.bind(style)

const CalcBox = styled.div`
  width: 50%;
  padding: 2rem;

  p {
    padding: 1rem 2rem;
    font-size: 1.1rem;
  }
`

const Input = styled.input`
  width: 100%;
  margin-bottom: 2%;
  padding: 1rem 0;
  border-bottom: ${(props) => `1px solid ${props.theme.colors.bgLight}`};
  font-size: 1.5rem;
  text-indent: 1rem;
  background: ${(props) => props.theme.colors.bg};
`

const Button = styled.button`
  padding: 1rem 2rem;
  background: ${(props) => props.theme.primary};
`

const Calc = () => {
  const [percentageStandard, setPercentageStandard] = useState(null)
  const [percentageElement, setPercentageElement] = useState(null)
  const [percentageResult, setPercentageResult] = useState(null)

  const percentageSubmit = (event) => {
    event.preventDefault();
    setPercentageResult((percentageElement / percentageStandard) * 100)
  }

  return (
    <div>
      <CalcBox>
        <h2>1. Percentage</h2>
        <p>e.g., position, width, height...</p>
        <form className={cx('calc__forms')} onSubmit={percentageSubmit}>
          <div className={cx('calc__form')}>
            <label htmlFor="percentage-standard">기준 값</label>
            <Input
              type="text"
              id="percentage-standard"
              value={percentageStandard}
              className="calc__input"
              onChange={(event) => setPercentageStandard(event.target.value)}/>
          </div>
          <div className={cx('calc__form')}>
            <label htmlFor="percentage-element">요소 값</label>
            <Input
              type="text"
              id="percentage-standard"
              value={percentageElement}
              className="calc__input"
              onChange={(event) => setPercentageElement(event.target.value)}/>
          </div>
          <div>
            <Button>계산하기</Button>
          </div>
        </form>
        <div className={cx('calc__result')}>
          > "{percentageResult}" %
        </div>
      </CalcBox>
    </div>
  )
}

export default Calc