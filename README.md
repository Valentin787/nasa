The deploy site process is implemented using Netlify services.
After each update of the “main” branch, the deployment process will start automatically.
The deploy process consists from the following steps:

1. An installation of all necessary packages on the remote machine using of the “npm install” command;
2. Rechecking by a linter for a consistency in the written code
3. Build-project using of the “npm run build” command

If an error occurs during one of these stages, the deploy is automatically stopped and code updates will not reach the production version of the site.

In addition, automatic deployment works when creating request pool. In this way, developers creating a new request pool can make sure that their edits do not affect the operation of the site.
