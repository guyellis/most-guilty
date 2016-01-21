import ghissues from 'ghissues';
import help from './help';
require('console.table');

export function run(user, token, name, repo, milestone) {

  if(!user || !token || !name || !repo) {
    help();
    return;
  }

  const authOptions = {user, token};

  ghissues.list(authOptions, name, repo, (err, issuelist) => {
    if(err) {
      console.log('Error:', err);
      return;
    }
    console.log('\nTotal Unfiltered Issue Count:', issuelist.length);

    const summary = issuelist.reduce( (acc, issue) => {
      const assignee = issue.assignee
        ? issue.assignee.login
        : '<nobody>';

      // Optionally filter for specified milestone
      if(milestone && (!issue.milestone || issue.milestone.title !== milestone)) {
        return acc;
      }

      // Only interested in open issues
      if(issue.state !== 'open') {
        return acc;
      }

      // Initialize with 1 or increment
      if(acc[assignee]) {
        acc[assignee] += 1;
      } else {
        acc[assignee] = 1;
      }

      return acc;
    }, {});

    var sorted = Object.keys(summary).map( (who) => {
      return {issues: summary[who], who};
    }).sort( (a, b) => b.issues - a.issues );

    console.log(`\nMost Egregiously Guilty${milestone ? ` by milestone ${milestone}` : ''}:`);
    console.table(sorted);

  });

};

export default () => {

  run(...process.argv.slice(2));

};
