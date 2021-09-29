import React from 'react'
import cl from '../styles/Loader.module.css'

const Loader = () => {
    return (
        <div className={cl.loader__container}>
            <div className={cl.loader}>
            </div>
        </div>
    )
}

export default Loader