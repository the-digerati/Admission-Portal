import React from 'react'
import Header from "../Components/Header";
import Menu from "../Components/Menu";
import "./NewStyles.css";

const AdminDashboard = () => {
    return (
        <div className='main-page'>
            <Header userName = "Administrator"/>
            <Menu/>
            
            

        </div>
    )
}

export default AdminDashboard