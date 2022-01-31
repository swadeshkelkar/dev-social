//Custom sort function to sort on basis of stars of repo first and then by the fork count of repo and return 1st 5 of top repos
const getTopRepos = (repos) => {
  repos = repos.map(
    ({ id, html_url, name, description, stargazers_count, forks_count }) => {
      return {
        id,
        html_url,
        name,
        description,
        stargazers_count,
        forks_count,
      };
    }
  );
  repos.sort((a, b) => {
    return (
      b.stargazers_count - a.stargazers_count || b.forks_count - a.forks_count
    );
  });
  return repos.slice(0, 5);
};

module.exports = getTopRepos;
