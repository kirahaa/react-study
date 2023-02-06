import {FeedWrap} from '../../../components/Feed/Wrap'
import {FeedCard} from '../../../components/Feed/Card'
import {Input} from '../../../components/Common/Input'
import styled from 'styled-components'
import {Radio} from '../../../components/Common/Radio'
import {
  catData,
  catGender,
  catStatus,
  WEIGHT_FAT,
  WEIGHT_GONE
} from '../../../database/cats'
import {useRef, useState} from 'react'
import Button from '../../../components/Common/Button'
import {FiChevronLeft} from 'react-icons/fi'
import {useNavigate} from 'react-router-dom'
import useCat from '../store/useCat'

const Card = styled(FeedCard)`
  gap: 1.5rem;
`

const FeedInput = styled(Input)`
  border-bottom: 1px solid #ebe9f1;
  opacity: .5;
  transition: .3s all;
  
  &:focus {
    opacity: 1;
  }
  
  &[type="file"] {
    display: none;
  }
`

const Label = styled.label`
  display: block;
  font-size: 1.3rem;
  font-weight: bold;
`

const RadioWrap = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem 0;
  gap: 1rem;
`

const SplitRow = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`

const ImageWrap = styled.div`
  margin-top: 1rem;
  width: 7rem;
  height: 7rem;
  border-radius: 50%;
  background-size: cover;
  background-repeat: no-repeat;
`

const FakeFile = styled.label`
  width: fit-content;
  margin-top: 1rem;
  padding: 1rem;
  color: ${props => props.theme.colors.white};
  background-color: ${props => props.theme.colorChip.primary};
  border-radius: .5rem;
  font-size: 1rem;
  cursor: pointer;
`

const FileWrap = styled.div`
  display: flex;
  flex-direction: column;
`

const IconWrap = styled.span`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin-right: 1rem;
  padding: .5rem .5rem;
  background-color: ${(props) => props.theme.colors.bg};
  border-radius: 50%;

  &.top {
    position: absolute;
    top: -4.5rem;
    left: 2%;
    background-color: ${(props) => props.theme.colors.bgLight};
  }
`

const FeedNew = () => {
  // ** hooks
  const navigate = useNavigate()
  const fileInputRef = useRef()
  const imgRef = useRef()

  // ** recoil
  const {cats, setCats} = useCat()

  // ** states
  const [values, setValues] = useState({
    id: catData.length,
    name: '',
    gender: '',
    age: '',
    weight: null,
    status: catStatus.status1,
    profileImg: '',
    recordList: []
  })
  const [weight, setWeight] = useState('')
  const [file, setFile] = useState('')

  const handleFileChange = e => {
    setFile(e.target.files[0])
    const reader = new FileReader()
    reader.onload = () => {
      imgRef.current.style.backgroundImage = `url(${reader.result})`
    }
    reader.readAsDataURL(e.target.files[0])
  }

  const handleWeightNStatus = e => {
    const currentWeight = Number(e.target.value)
    setWeight(currentWeight)
    setValues({
      ...values,
      weight: currentWeight,
      status: currentWeight >= WEIGHT_FAT && currentWeight < WEIGHT_GONE ? catStatus.status2 : currentWeight >= WEIGHT_GONE ? catStatus.status3 : catStatus.status1
    })
  }

  const handleChange = e => {
    setValues((values) => {
      if (e.target.name === 'age') {
        return {
          ...values,
          [e.target.name]: Number(e.target.value)
        }
      } else {
        return {
          ...values,
          [e.target.name]: e.target.value
        }
      }
    })
  }

  const handleSubmit = e => {
    e.preventDefault()
    if (!file) {
      alert("파일을 등록해주세요.")
    } else {
      const objectURL = URL.createObjectURL(file)

      setCats(() => {
        return [...cats, {
          ...values,
          profileImg: objectURL
        }]
      })
      alert("축하합니다! 고양이가 추가되었습니다:)")
      navigate('/feed')
    }
  }

  return (
    <FeedWrap>
      <form onSubmit={handleSubmit}>
        <Card>
          <IconWrap className="top" onClick={() => navigate('/feed')}>
            <FiChevronLeft size={25}/>
          </IconWrap>
          <div>
            <Label>Name</Label>
            <FeedInput
              name="name"
              maxLength={20}
              required
              onChange={handleChange}
            />
          </div>
          <div>
            <Label>Gender</Label>
            <RadioWrap>
              <Radio
                type="radio"
                id={catGender.gender1}
                name="gender"
                value={catGender.gender1}
                required
                onChange={handleChange}
              />
              <Label htmlFor={catGender.gender1}>
                {catGender.gender1}
              </Label>
              <Radio
                type="radio"
                id={catGender.gender2}
                name="gender"
                value={catGender.gender2}
                required
                onChange={handleChange}
              />
              <Label htmlFor={catGender.gender2}>
                {catGender.gender2}
              </Label>
            </RadioWrap>
          </div>
          <SplitRow>
            <div>
              <Label>Age</Label>
              <FeedInput
                type="number"
                name="age"
                max={15}
                required
                onChange={handleChange}
              />
            </div>
            <div>
              <Label>Weight</Label>
              <FeedInput
                type="number"
                name="weight"
                value={weight}
                required
                onChange={handleWeightNStatus}
              />
            </div>
          </SplitRow>
          <div>
            <Label>Status</Label>
            <FeedInput
              name="status"
              readOnly={true}
              value={values.status}
              required
            />
          </div>
          <FileWrap>
            <Label>Profile Image</Label>
            <FeedInput
              type="file"
              ref={fileInputRef}
              accept="image/*"
              onChange={handleFileChange}
            />
            {file ? <ImageWrap ref={imgRef} /> : null}
            <SplitRow>
              <FakeFile
                onClick={() => {
                  fileInputRef.current?.click()
                }}>Upload Image</FakeFile>
              <Label>{file.name}</Label>
            </SplitRow>
          </FileWrap>
          <Button bgColor="complementary">Submit</Button>
        </Card>
      </form>
    </FeedWrap>
  )
}

export default FeedNew