
export default () => {
  var help =
    '\n' +
    '\n  Usage: most-guilty <username> <token> <user/org> <repo> [milestone]' +
    '\n' +
    '\n  username: Your GitHub username' +
    '\n' +
    '\n  token: Your GitHub token. Help is here: https://help.github.com/articles/creating-an-access-token-for-command-line-use/' +
    '\n' +
    '\n  user/org: The GitHub user or org that has the repo you want to run this against' +
    '\n' +
    '\n  repo: The name of the repo you want to analyze' +
    '\n' +
    '\n  [milestone]: Optional milestone to filter issues by' +
    '\n' +
    '\n';
  console.log(help);
};
