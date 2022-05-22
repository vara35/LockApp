import {LoginButtonEle} from './styledComponents'

const LoginButton = props => {
  const {lockText} = props
  return <LoginButtonEle>{lockText}</LoginButtonEle>
}
export default LoginButton
