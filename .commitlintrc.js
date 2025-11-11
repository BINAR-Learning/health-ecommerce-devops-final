/**
 * Commitlint Configuration
 * Enforces conventional commit messages
 * 
 * Format: <type>(<scope>): <subject>
 * Example: feat(auth): add JWT token refresh mechanism
 * 
 * Docs: https://commitlint.js.org/
 */

module.exports = {
  extends: ['@commitlint/config-conventional'],
  
  rules: {
    // Type enum - allowed commit types
    'type-enum': [
      2, // Level: error
      'always',
      [
        'feat',     // New feature
        'fix',      // Bug fix
        'docs',     // Documentation changes
        'style',    // Code style changes (formatting, semicolons, etc)
        'refactor', // Code refactoring
        'perf',     // Performance improvements
        'test',     // Adding or updating tests
        'build',    // Build system changes
        'ci',       // CI configuration changes
        'chore',    // Other changes (updating dependencies, etc)
        'revert'    // Reverting previous commit
      ]
    ],
    
    // Type case - lowercase
    'type-case': [2, 'always', 'lower-case'],
    
    // Type empty - must have type
    'type-empty': [2, 'never'],
    
    // Scope case - lowercase
    'scope-case': [2, 'always', 'lower-case'],
    
    // Subject case - sentence case
    'subject-case': [0], // Disabled - allow any case
    
    // Subject empty - must have subject
    'subject-empty': [2, 'never'],
    
    // Subject full stop - no trailing period
    'subject-full-stop': [2, 'never', '.'],
    
    // Header max length
    'header-max-length': [2, 'always', 100],
    
    // Body leading blank - blank line before body
    'body-leading-blank': [1, 'always'],
    
    // Footer leading blank - blank line before footer
    'footer-leading-blank': [1, 'always']
  }
};

