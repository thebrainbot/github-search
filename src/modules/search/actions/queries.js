import { gql } from '@apollo/client';

export const searchResultItemFragment = gql`
  fragment SearchResultItemFragmentUser on User {
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
  fragment SearchResultItemFragmentOrg on Organization {
    id,
    avatarUrl,
    name,
    url,
    websiteUrl
  }
`;

export const pageInfoFragment = gql`
  fragment PageInfoFragment on PageInfo {
    startCursor,
    endCursor,
    hasNextPage,
    hasPreviousPage,
  }
`;

const userSearchQuery = gql`
  query UserSearchQuery(
    $query: String!,
    $afterCursor: String,
    $beforeCursor: String,
    $first: Int,
    $last: Int
  ) {
    search(
      type: USER,
      query: $query,
      first: $first,
      last: $last,
      after: $afterCursor,
      before: $beforeCursor,
    ) {
      userCount,
      pageInfo {
        ...PageInfoFragment
      },
      nodes {
        ...SearchResultItemFragmentUser,
        ...SearchResultItemFragmentOrg
      }
    }
  }
  ${pageInfoFragment}
  ${searchResultItemFragment}
`;

export default userSearchQuery;
