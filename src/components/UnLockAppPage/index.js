import {useState} from 'react'
import LockImage from '../LockImage'
import LockButton from '../LockButton'

import {
  UnLockPageMainContainer,
  LockStatusText,
  LockAndTextContainer,
} from './styledComponents'

// const unLockAppPageConstants = {
//   closeLockImg: 'https://assets.ccbp.in/frontend/hooks/lock-img.png',
//   openLockImg: 'https://assets.ccbp.in/frontend/hooks/unlock-img.png',
//   lockOpenText: 'Your Device is Locked',
//   lockClosedText: 'Your Device is Unlocked',
//   lockText: 'Lock',
//   unLockText: 'Unlock',
// }

const UnLockAppPage = () => {
  const [lockStatus, setLockStatusFun] = useState(false)

  const lockButtonText = lockStatus ? 'Lock' : 'Unlock'
  const altTextStatus = lockStatus ? 'lock' : 'unlock'
  const imageStatus = lockStatus
    ? 'https://assets.ccbp.in/frontend/hooks/unlock-img.png'
    : 'https://assets.ccbp.in/frontend/hooks/lock-img.png'
  const lockStatusText = lockStatus
    ? 'Your Device is Unlocked'
    : 'Your Device is Locked'

  const updateLockButton = () => setLockStatusFun(prevState => !prevState)

  return (
    <UnLockPageMainContainer>
      <LockAndTextContainer>
        <LockImage imageUrl={imageStatus} altText={altTextStatus} />
        <LockStatusText>{lockStatusText}</LockStatusText>
      </LockAndTextContainer>
      <LockButton lockText={lockButtonText} onClick={updateLockButton} />
    </UnLockPageMainContainer>
  )
}

export default UnLockAppPage
