# Unsplash Stats Workflow
GitHub action to add your Unsplash stats

## How to use

### Comment Section
At your repository, add the following section to your `README.md` file: `<!-- UNSPLASH-STATS:START --><!-- UNSPLASH-STATS:END -->`. You can give any title and add anything before or after it, just like:

```markdown
# Unsplash Stats
<!-- UNSPLASH-STATS:START -->
<!-- UNSPLASH-STATS:END -->
```

The workflow will replace the comment with your Unsplash.

### Setup
- Create a `.github` folder and create a `workflows` folder inside of it, in case it doesn't exists.
- Create a new workflow file named something like `unsplash-stats-workflow.yml` with the following content:

### Options and Keys
You'll have to set some values in order to run the action. These tokens can be found at the [Unsplash Developers](https://unsplash.com/developers).

If you haven't set up any app, just go to "your apps" link at the main menu (on the top right corner) and create a "New Application". This will give you the Keys you'll need to execute the action properly.

| Option name  | Description                      | Where to define | Required | Default        |
|--------------|----------------------------------|-----------------|----------|----------------|
| file         | Your README file path            | Workflow file   | false    | './README.md'  |
| template     | Stats data template (table/list) | Workflow file   | false    | list           |
| username     | Your Unsplash's username         | Workflow file   | true     |                |
| ACCESS_KEY   | Your app's access key            | Github Secrets  | true     |                |
| SECRET_KEY   | Your app's secret key            | Github Secrets  | true     |                |


These keys (both `ACCESS_KEY` and `SECRET_KEY`) should be kept under the Github Secrets and should not be passed directly into the created workflow file. The only information you should provide at your workflow is your `username`.


## Examples
- [My Github Profile](https://github.com/gabrieluizramos/)
