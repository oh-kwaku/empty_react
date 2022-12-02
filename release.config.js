module.exports={
    branches: "master",
    repositoryUrl: "https://github.com/kwakuemma37/empty_react",
    plugins:["@semantic-release/commit-analyzer",  //analyzes commit messages and figure out what version to be used
                "@semantic-release/release-notes-generator", //creates release notes based on commit descriptions
               ["@semantic-release/github",
            {
                assets:[
                    {path:"build.zip",label:"Build"}, // this expects a file and not folder so we need to zip the build folder
                    {path: "coverage.zip",label: "Coverage"} 
                ]
            }]
        ]

}; 