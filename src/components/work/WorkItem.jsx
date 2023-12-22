import React from 'react'
import Data from './Data.jsx';

const WorkItem = ({item}) => {
  return (
    <div className="work__card" key={item.id}>
        <img src={item.image} alt="" className='work__img' />
        <h3 className="work__title">{item.title}</h3>
        <a href="#" target='_blank' className="work__button">
            Demo <i className="bx bx-right-arrow-alt work__buton-icon"></i>
        </a>
    </div>
  )
}

export default WorkItem