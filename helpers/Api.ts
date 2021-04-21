const baseUrl = 'http://backend.hadi-syahbal.com/api/autofun';

const Api = {
    brand: {
        getAll:`${baseUrl}/brands`
    },
    cars: {
        getAll:`${baseUrl}/cars`
    },
    content: {
        getAll: `${baseUrl}/contents`
    }
}

export default Api;