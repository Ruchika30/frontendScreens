import gql from 'graphql-tag';

// Get blogs by clickingon cards
const GET_BLOGPOST = gql`
   query blogPost($id: ID!) {
        blogPost(id: $id){
        id
        Title
        Content
        author
        minutes
        Published
        Image{
              id
              formats
            }
        category {
                id
                name
                
            }
            
        }
    }
`;

export default GET_BLOGPOST;
