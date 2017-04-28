# Most Egregiously Guilty of Outstanding Issues

[![Greenkeeper badge](https://badges.greenkeeper.io/guyellis/most-guilty.svg)](https://greenkeeper.io/)

Who has the most open issues assigned to them?

## Install

`npm i -g most-guilty`

## Prerequisite

You need a [GitHub token](https://help.github.com/articles/creating-an-access-token-for-command-line-use/) to run this. This will take you about 30 seconds.

## Run

`most-guilty <username> <token> <user/org> <repo> [milestone]`

username: Your GitHub username.

token: Your [GitHub token](https://help.github.com/articles/creating-an-access-token-for-command-line-use/).

user/org: The GitHub user or org that has the repo you want to run this against.

repo: The name of the repo you want to analyze.

milestone: Optional milestone to filter issues by.

## Example

`most-guilty guyellis <my-token> guyellis http-status-check`

Output:

```
Total Unfiltered Issue Count: 20

Most Guilty:
issues  who     
------  --------
15      <nobody>
5       guyellis
```
