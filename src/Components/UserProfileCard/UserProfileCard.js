import React from 'react'
import Profile from '../Profile/Profile'
import EditProfile from '../EditProfile/EditProfile'
import "./UserProfileCard.css";
import { useSelector } from 'react-redux';
import Footer from '../../FooterSection/FooterSection';

const UserProfileCard = () => {

   // Access user data from Redux store
  const user = useSelector((state) => state.user.userData);

  return (
    <>
    <div className='user-profile-card'>
      <Profile user = {user}/>
      <EditProfile user = {user} />
      
      </div>
      <Footer/>
    </>
  )
}

export default UserProfileCard;
