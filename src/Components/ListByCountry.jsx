import React from 'react'



const ListByCountry = ({fetchDataByCountry}) => {
  return (
    
    <div>
        <div className='unversity-wrapper'>
              {fetchDataByCountry.map((data) => (
               <>
                  <div className="universty-name">
                    {data.name}
                  </div>
                  
                  </>
               
              ))}
            
        </div>
    </div>
    
  )
}

export default ListByCountry