export default {
    login: `
            mutation Login ($email: String!, $password: String!){
                Login(input: {email: $email, password: $password}){
                    access_token,
                    user {
                        id,
                        name,
                        image,
                        email
                    }   
                }   
            }
          `,
    logout: `             
            mutation { 
                Logout{
                    status
                    message
                }         
            }      
    `
}