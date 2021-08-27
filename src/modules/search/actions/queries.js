import { gql } from '@apollo/client';

export const searchResultItemFragment = gql`
  fragment SearchResultItemFragment on User {
      id,
      avatarUrl,
      bio,
      bioHTML,
      company,
      companyHTML,
      name,
      url,
      websiteUrl
  }
`;

export const pageInfoFragment = gql`
  fragment PageInfoFragment on PageInfo {
    startCursor,
    endCursor,
  }
`;

const userSearchQuery = gql`
  query UserSearchQuery(
    $query: String!,
    $amount: Int!
  ) {
    search(
      type: USER,
      query: $query,
      first: $amount,
    ) {
      userCount,
      pageInfo {
        ...PageInfoFragment
      },
      nodes {
        ...SearchResultItemFragment
      }
    }
  }
  ${pageInfoFragment}
  ${searchResultItemFragment}
`;

export default userSearchQuery;
