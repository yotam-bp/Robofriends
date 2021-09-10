import React from 'react';

const Card = ({name, email, id}) => {
    return (
        <div className = 'bg-light-blue dib br3 pa3 ma2 grow shadow-5' style={{width : '270px' , height: '350px' , display:'flex', flexDirection: 'column' }}>
           <img alt='robots' src={`https://robohash.org/${id}?size=100x100`} />
           <div>
               <h2>{name}</h2>
               <p> {email}</p>
           </div>    
        </div>
    );
}
export default Card;