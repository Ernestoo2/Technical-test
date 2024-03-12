import React from 'react'

const getCategories = () => {
  
        const Categories = [
          {
            name:"3D Printing and Design",
            id: "3d-printing-and-design",
            sessions:
              [
            
                  {
                    name: "3D Printing with Metal",
                    id: "3d-printing-metal",
                    desc: "See the latest in metal 3D printing technologies, from desktop machines",
                      speaker:{
                        name: "Geoff Leffler",
                        title: "Fabrication Specialist",
                        org: "KinetEco Inc.",
                        bio: "Geoff Leffler has metal in his veins. Starting out in traditional steel"
              
                      },
                    
                  },
                  {
                    name: "Homebuilding and 3D Printing",
                    id:"homebuilding-and-3d-printing",
                    desc: "A new house in 24 hours-can this be our practical solution for making afford",
                    speaker:{
                    name: "Griffin Snow",
                    title: "Fabrication Specialist",
                    org: "KinetEco Inc.",
                    bio: "Geoff Leffler has metal in his veins. Starting out in traditional steel"
              
                    },
                  },
                
                ],  
          },
          
          
        ]

  return (
    <div>
      <Categories/>
    </div>
  )
}

export default getCategories;
