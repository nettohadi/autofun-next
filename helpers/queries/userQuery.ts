export default {
    getLoggedInUser: `
            query {             
              authUser{
                id
                name
                email
                image
              }                
            }
          `
}