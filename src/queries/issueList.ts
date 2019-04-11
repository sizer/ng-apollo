import gql from 'graphql-tag';

const query = gql`
  query($owner: String!, $name: String!) {
    repository(owner: $owner, name: $name) {
      issues(first: 100) {
        edges {
          node {
            title
          }
        }
      }
    }
  }
`;

type Edge = {
  node: any
}

type Issue = {
  edges: Edge[]
}

type Repository = {
  issues: Issue
}

type Response = {
  repository: Repository,
};

export default query;
export { Response };