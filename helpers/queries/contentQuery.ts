type contentType = 'NEWS' | 'TIPS' | 'REVIEW';

export default  {
    getContentByType : (type:contentType, count:number) =>  {
        return `query getContentByType {
                    contents (type :${type}, first: ${count}){
                        data{
                          id
                          title
                          overview
                          content
                          image
                          writer {        
                            name
                            photo
                          }
                          type
                        }
                    }
                }`
    }
}