import React from 'react'



const ListByCountry = ({fetchDataByCountry}) => {
  return (
    
    <div>
        <div className='unversity-wrapper'>
              {fetchDataByCountry.map((data, index) => (
               
                  <div className="universty-name" key={index}>
                    {data.name}
                  </div>
                  
                  
               
              ))}
            
        </div>
    </div>
    
  )
}

export default ListByCountry