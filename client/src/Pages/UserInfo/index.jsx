import React from 'react'
// import { Link } from 'react-router-dom'

import {
  UserInfoContainer
} from './style'

import Header from '../../Containers/Header/'

const UserInfo = () => {
  return (
    <UserInfoContainer>
      
      <div className='user_info__header'>
        <Header type='UserInfo' />
      </div>

      <div className='user_info__contents'>
        
      </div>

    </UserInfoContainer>
  )
}

export default UserInfo
