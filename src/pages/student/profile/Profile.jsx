import React, {useContext} from 'react'
import './Profile.css'
import { ContextTeste } from "../../../context/contextAchievements";
import CardProfile from "./components/card-profile/CardProfile";
import AchievementCard from '../components/achievement-card/AchievementCard'

function Profile() {
  const [contextState] = useContext(ContextTeste); 
  return (
    <div className='main-profile-container'>
        <CardProfile/>
        <div className='achivements-container-profile'>
        <h3>Conquistas</h3>
            {/* Map das conquistas adicionadas as favoritas */}
            {contextState.favorites.length > 0 ?  (
                <div className={`achievements-scroll-profile ${contextState.favorites.length >= 6  ? "achivements-scroll-white" : " "}`}>
                {contextState.favorites?.map((item => <AchievementCard buttonVisible={false} data={item}/>))}
            </div>
            ) : (
                <h2>Adicione conquistas ao seu perfil nas configurações!</h2>
            )}
         </div>
        </div>
  )
}

export default Profile