First we fetch with graphql api :

Merge request branches

{
      project (fullPath: "bel-reloaded/mothership") {
        mergeRequest(iid: "5806") {
          targetBranch
          sourceBranch
          diff
        }
      }
    }

Branches hash

{
      project (fullPath: "bel-reloaded/mothership") {
        repository {
          tree (ref: "preprod") {
            lastCommit {
              sha
            }
          }
        }
      }
    }

Then we fetch the diff with REST API : https://docs.gitlab.com/ee/api/commits.html#get-the-diff-of-a-commit

Then we fetch the files with REST API + commits : https://docs.gitlab.com/ee/api/repository_files.html#get-file-from-repository
