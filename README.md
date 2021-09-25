## Usage/Examples

[![Build App](https://github.com/DarkTec/rbp-base/actions/workflows/build.yml/badge.svg?branch=master&event=push)](https://github.com/DarkTec/rbp-base/actions/workflows/build.yml)
[![Test App](https://github.com/DarkTec/rbp-base/actions/workflows/test.yml/badge.svg?branch=develop)](https://github.com/DarkTec/rbp-base/actions/workflows/test.yml)

### FormBuilder

See example files:

- `src/components/auth/loginForm/index.tsx`
- `src/pages/login/index.tsx`

### Generator

To use the generator, install hygen as a npm global module or prefix each
command with "npx"

```bash
npm i -g hygen
```

OR

```bash
npx hygen ...
```

#### Page / Component

```bash
hygen tsxGen new
```

#### Hooks

```bash
hygen hookGen new
```

#### Context

```bash
hygen contextGen new
```
