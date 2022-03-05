import React from 'react';
import Img from "../assets/img/empty.png";
import "../assets/style/Empty.scss";

const Empty = () => (
  <div className='empty'>
        <img className='empty-img' src={Img} alt='Rick' />
        <span className='empty-text'>
            Necesitas seleccionar un Pokemon para lista de deseos
            <br/>
            Selecciona un Pokemon
        </span>
    </div>

)
export default Empty;