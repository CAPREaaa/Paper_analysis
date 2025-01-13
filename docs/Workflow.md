# Workflow

A well-tuned and documented development work can help us keep our team productive and deliver software in a consistent and timely manner.

The workflow is not fixed always and no one-size-fits-all, it is always a cyclical process. Thus, please update the way you work once this document updates.

Feature branches are used rather than commiting on the main branch immediately. Developers should create a branch for anything you are working on so that others can the code review process.

1. Start your work from the main branch. 
You can create the feature branch on your own
   - Clone the main branch
   - Create the branch locally
   - Open a Merge request after pushing your work

    Or create the feature branch based on the issue
   - Go to that Issue
   - Click 'Create branch'
   - Clone that branch locally

2. Make changes

3. Push changes
    ```
    git add .
    git commit -m "your message"
    git push
    ```
   - add appropriate commit messages help others understand the current development process
   - `git status`, `git diff` may help you clarify the work you did.

4. Open a merge request on Gitlab
   Add detailed description about what you've done
5. Start Code Review
    Ask for others to review your work
    - [Code Review Guideline](https://handbook.gitlab.com/handbook/engineering/workflow/code-review/)
6. Merge it!
