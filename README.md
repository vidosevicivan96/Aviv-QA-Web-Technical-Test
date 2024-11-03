
# Playwright Automation Project for Demo NopCommerce

This project is an automation suite developed in Playwright and TypeScript for the [https://demo.nopcommerce.com/](https://demo.nopcommerce.com/) website.

## Prerequisites

To run these tests locally, you need to have the following installed on your machine:
- **Node.js** (version 16 or compatible with Playwright)
- **npm** (Node Package Manager)

## Getting Started

### Clone the Repository

1. Clone the repository to your local machine.
2. Navigate to the project directory.

### Install Dependencies

Run the following command to install the required dependencies:

```bash
npm install
```

### Running Tests Locally

Before running the tests, make sure that 'CF_CLEARANCE_COOKIE' variable value in .env file is set correctly.
To run the tests locally, use the following commands:

1. Install the required Playwright browsers (if not already installed):
   ```bash
   npx playwright install
   ```

2. Run the tests in headed mode (headless mode turned off):
   ```bash
   npm test
   ```

3. To view the test results in a Playwright HTML report, run:
   ```bash
   npx playwright show-report
   ```
   This command will open a local server with detailed logs and validation results for each test.

## Project Structure

The project follows the Page Object Model (POM) pattern for better code organization and maintainability.

- **Tests**: The main test cases, focused on validations, are located in the `tests` directory.
- **Helpers**: Helper methods, locators, and underlying code logic are organized under the `helpers` directory.

Example directory structure:

```
workspaces/e2e/e2e-tests/
├── testdata/
│   ├── data/
│   ├── helpers/
│   └── locators.ts
└── tests/
    ├── existing-user-login-and-checkout.spec.ts
    ├── invalid-signup-attempt.spec.ts
    ├── test-set-up.ts
    ├── user-signup-and-checkout.spec.ts
    └── verify-cart-functionality.spec.ts
```

## Continuous Integration

The project includes a GitHub Actions CI/CD pipeline that runs on each push or pull request. This setup helps in maintaining code quality and ensures that tests are executed consistently on the repository.

### Important Notes

- **Headless mode**: I have turned off headless mode since Cloudflare detects it as bot so the tests fail because of it.
- **HTML Reports**: Once the tests are completed, use `npx playwright show-report` to view the Playwright HTML reports for detailed test results.
- **Challenges**: The site uses Cloudflare's reCAPTCHA, which is bypassed using a `cf_clearance` cookie. This cookie is managed via environment variables and is included in `.env`.
  - **Note**: This is currently pushed to GitHub for testing purposes but would ideally be stored securely in GitHub Secrets (Not sure you have access to my GitHub Secrets Variables).

## Parallel Test Execution

Playwright by default utilizes the maximum number of available runners, allowing tests to run in parallel. **Note**: Running tests in parallel during CI/CD can lead to high CPU usage, potentially exceeding the capabilities of the remote machine.

To control the number of workers in CI/CD, you can adjust the following setting in the Playwright config:

```typescript
// playwright.config.ts
workers: process.env.CI ? 1 : undefined,  // Limits to 1 worker in CI/CD
```

## Future Improvements

1. Use random data for test cases instead of hardcoded user data.
2. Integrate a linter for code style consistency.
3. Add a code quality analyzer.
4. Dockerize the automation project to make it more portable.


---

**Happy Testing!**
