import React from 'react'
import '../CSS/CommunityItem.css'
import {dummyData} from './Data.js';
import calander from '../Images/calendar.png';
import person from '../Images/person.png';

function CommunityItem() {
  console.log(dummyData);
  return (
    <div className='itemContainer'>
      {dummyData.map(item => (
        <React.Fragment key={item.id}>
          <div className='itemHeader'> 
            <h3 className='title'>{item.title}</h3>
          </div>
          <div className='itemFooter'>
            <div className='author'>
              <img src={person} alt='author' className='personImg' ></img>
              <span>{item.username}</span>
            </div>
            <div className='date'>
              <img src={calander} alt='date' className='calanderImg'></img>
              <span>{item.date}</span>
            </div>
          </div>
        </React.Fragment>
      ))}
    </div>
  )
}
export default CommunityItem;