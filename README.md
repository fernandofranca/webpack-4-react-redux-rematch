If you're using ESLint, you should use eslint-plugin-import, and eslint-import-resolver-babel-module to remove falsy unresolved modules. If you want to have warnings when aliased modules are being imported by their relative paths, you can use eslint-plugin-module-resolver.

