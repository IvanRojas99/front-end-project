import React from 'react'
import Profile from '../../components/profile/Profile'
import { useAuth } from '../../hooks/useAuth'

const ProfilePage = () => {

			const { user } = useAuth();
  
    return (
      <>
        <Profile user={ user }/>
      </>
    )
}

export default ProfilePage