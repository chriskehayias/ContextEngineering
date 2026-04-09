Generate tests for the file at: $ARGUMENTS

Follow these steps carefully and do not write any files until the user approves.

## Step 1: Read the Target File

Read the file specified above. If the file does not exist or the path is invalid, let the user know and stop here.

## Step 2: Detect the Testing Framework

Search the project to identify which testing framework is already in use. Check for:

- `package.json` dependencies and devDependencies (look for jest, vitest, mocha, chai, testing-library, playwright, cypress, etc.)
- `pytest`, `unittest`, or `nose` references in Python projects
- Existing test files (search for files matching patterns like `*.test.*`, `*.spec.*`, `test_*`, `*_test.*`)
- Test configuration files (`jest.config.*`, `vitest.config.*`, `pytest.ini`, `setup.cfg`, `pyproject.toml`, `.mocharc.*`)
- Test runner scripts in `package.json` scripts section

If you find existing test files, read one or two of them to understand the project's test patterns, conventions, naming style, and any shared test utilities or helpers.

If no testing framework is detected, recommend one appropriate for the project's tech stack, explain why you chose it, and ask the user whether they want to proceed with that recommendation before continuing.

## Step 3: Analyze the Code

Review the target file and identify:

- **Functions and methods** that need test coverage, including exported and internal logic
- **Edge cases and boundary conditions** such as empty inputs, null/undefined values, maximum/minimum values, and unexpected types
- **Error handling paths** including try/catch blocks, thrown exceptions, error returns, and validation failures
- **Key integration points** such as API calls, database operations, file system access, or external service interactions that should be mocked or stubbed

## Step 4: Generate the Tests

Write comprehensive test code that:

- Uses the testing framework detected in Step 2
- Follows the naming conventions and file structure found in existing project tests
- Includes descriptive test names that clearly explain what each test verifies (e.g., "should return an empty array when no items match the filter")
- Organizes tests into logical groups (describe/context blocks or equivalent)
- Covers these scenarios:
  - **Happy path**: Normal expected usage with valid inputs
  - **Edge cases**: Boundary values, empty inputs, special characters
  - **Error scenarios**: Invalid inputs, missing required data, failure conditions
- Reuses any test utilities, helpers, fixtures, or factories already present in the project
- Includes comments explaining non-obvious test logic so the tests are easy to understand

## Step 5: Present for Review

Display the complete generated test code to the user. Do NOT write the file yet.

Ask the user:

1. Would you like to make any changes to these tests?
2. Where should the test file be saved? Suggest a conventional location based on the project's existing test file structure (e.g., alongside the source file, in a `__tests__` directory, in a top-level `tests` folder, or wherever existing tests live).

Wait for the user's response before writing anything to disk.

## Step 6: Write the File

Only after the user confirms they are satisfied with the tests and has chosen a file location, write the test file to the specified path.
