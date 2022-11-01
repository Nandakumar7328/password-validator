import {useState} from 'react'
import {
  MainBgContainer,
  SubContainer,
  Heading,
  Paragraph,
  InputContainer,
  ErrorPara,
} from './styledComponents'

const PasswordValidator = () => {
  const [inputText, setChangeInput] = useState('')

  const onChangeInput = event => {
    setChangeInput(event.target.value)
  }

  return (
    <MainBgContainer>
      <SubContainer>
        <Heading>Password Validator</Heading>
        <Paragraph>Check how strong and secure is your password</Paragraph>
        <InputContainer
          onChange={onChangeInput}
          value={inputText}
          type="password"
        />
        {inputText.length <= 8 && (
          <ErrorPara>Your password must be at least 8 characters</ErrorPara>
        )}
      </SubContainer>
    </MainBgContainer>
  )
}

export default PasswordValidator
