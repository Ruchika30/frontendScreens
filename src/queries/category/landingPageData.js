import gql from 'graphql-tag';

// Get article wrt categories (Landing page)
const CATEGORY_ARTICLES_QUERY = gql`
    query Categories{
        categories {
            name
            id
            blog_posts {
                id
                Title
                Description
                
                category {
                id
                name
                }
            }
        }
    }
`;

export default CATEGORY_ARTICLES_QUERY;
