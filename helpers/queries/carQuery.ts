type groupType = "MOST_POPULAR" | "LATEST" | "LCGC" |"SUV" | "Sedan" | "MVP" | "City_Car";

export default  {
    getByGroup : () => {
        return `query getByGroup($group: GroupType!){
                 CarsByGroup(group:$group){
                    id
                    name
                    image
                    min_price
                    max_price
                  }
            }`
    },

    getByBrand : `
        query getByBrand ($brand_id: String) {
            cars ( brand_id: $brand_id) {
                data {
                  id
                  name
                  image
                  min_price
                  max_price
                  brand {
                    id
                    name
                    image
                    desc
                  }
                }
            }
        }
    `,
    getById : `
        query getById ($car_id: ID) {
            car ( id: $car_id) {                
              id
              name
              image
              min_price
              max_price
              built_year
              brand {
                id
                name
                image                    
              } 
              images {
                url               
              }
              body_type
              fuel
              transmission
              segmen
              power
            }
        }
    `,
    getAll: `
            query paginate($page: Int = 1 ){
              carsAll (page:$page){
                data{
                  id
                  name
                  image
                  min_price
                  max_price
                  images {
                    id
                    url
                  }
                  group
                  brand {
                    id
                    name
                    image
                  },
                  segmen
                  body_type
                  transmission
                  fuel
                  power
                },                            
                paginatorInfo {
                  currentPage
                  total      
                  perPage      
                }
              }
        }
    `

}