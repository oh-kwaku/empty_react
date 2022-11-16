module.exports={
    branches: "master",
    repositoryUrl: "https://github.com/kwakuemma37/empty_react",
    plugins:["@semantic-release/commit-analyzer",  //analyzes commit messages and figure out what version to be used
                "@semantic-release/release-notes-generator", //creates release notes based on commit descriptions
                "@semantic-release/npm"]

}