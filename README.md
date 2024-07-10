# Template

## Features

- [PostCSS](https://postcss.org/) with [mantine-postcss-preset](https://mantine.dev/styles/postcss-preset)
- [TypeScript](https://www.typescriptlang.org/)
- [Storybook](https://storybook.js.org/)
- [Vitest](https://vitest.dev/) setup with [React Testing Library](https://testing-library.com/docs/react-testing-library/intro)
- ESLint setup with [eslint-config-mantine](https://github.com/mantinedev/eslint-config-mantine)

## npm scripts

## Build and dev scripts

- `dev` – start development server
- `build` – build production version of the app
- `preview` – locally preview production build

### Testing scripts

- `typecheck` – checks TypeScript types
- `lint` – runs ESLint
- `prettier:check` – checks files with Prettier
- `vitest` – runs vitest tests
- `vitest:watch` – starts vitest watch
- `test` – runs `vitest`, `prettier:check`, `lint` and `typecheck` scripts

### Other scripts

- `storybook` – starts storybook dev server
- `storybook:build` – build production storybook bundle to `storybook-static`
- `prettier:write` – formats all files with Prettier

## Stack Used

`React Query`
`JavaScript`
`Yarn`
`Mantine`

## Collaboration Guidelines

- Branching: Create a new branch for each feature or bug fix. Use descriptive branch names. e.g, feature/dashboard-fix Note: all in lowercase case
- Create a new branch: `git checkout -b feature/branch-name`
- Rebasing from Staging: Before merging your branch into the staging branch, rebase your branch onto the latest staging branch to incorporate any changes made by other team members.
  - Switch to your branch: `git checkout feature/branch-name`
  - Fetch the latest changes: `git fetch origin staging`
  - Rebase your branch onto staging: `git rebase origin/staging`
- Coding Standards: Follow the established coding standards and conventions especially the stacks specified above only.
- Commit Messages: Write clear and descriptive commit messages.E.g, Add: Button added to Profile flow.
- Stage changes: `git add .`
- Pull Requests: Open pull requests to merge changes into the `staging` branch. Include relevant details and tag the team lead for review.
  - Push your branch: `git push origin feature/branch-name`
  - Open a pull request on the repository's GitHub page.
- Code Reviews: Review code changes from other team members and provide constructive feedback.
- Issue Tracking: Use the issue tracker to report bugs, suggest new features, or discuss project-related topics.
- Package Installation: Kindly contact team lead before installing any npm package

## Commit Guidelines

This contains the type and the description of the commit names.

- `feat`: A new feature
- `fix`: A bug fix
- `docs`: Documentation only changes
- `style`: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
- `refactor`: A code change that neither fixes a bug nor adds a feature
- `perf`: A code changes that improves performance
- `test`: Adding missing or correcting existing tests.
- `chore`: Changes to the build process or auxillary tools and libraries such as documentation generation.

### Test libraries used

`Jest`
`React Testing Library`

## Query Language

`REST API`

## Folder Structure (src) Library

The important folders are located in the `src` directory. These include:

- `assets`: Contains static files like images, fonts, and stylesheets.
- `components`: Reusable UI components.
- `config`: Configuration files or settings.
- `helpers`: Helper functions or utilities.
- `hooks`: Custom React hooks for shared logic.
- `layouts`: Higher-level layout components for page structures.
- `lib`: External libraries or utility functions.
- `pages`: Higher-level layout components for page structures.
- `services`: API service or data-fetching functions.
- `store`: Zustand or state management related files.
- `utils`- General utility functions or helper classes.

## Folder Structure (src) Library

- `public`: contains all the static files, images for example
- `src`
- `env.example`
- `gitignore`
- `prettierrc`
- `jsconfig`
- `tailwind.config.js`
- `README.md`

## Contact

For any questions or concerns, please reach out to `joshua@bigmerchant.co`.
