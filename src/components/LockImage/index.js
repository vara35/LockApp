import {LockImg} from './styledComponents'

const LockImage = props => {
  const {imageUrl, altText} = props
  return <LockImg src={imageUrl} alt={altText} />
}
export default LockImage
