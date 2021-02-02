import gql from 'graphql-tag';

export const GET_CATEGORY_ARTICLES_QUERY = gql`
    query Category($id: ID!){
    category(id: $id) {
        name
        description
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

