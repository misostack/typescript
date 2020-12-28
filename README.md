# Typescript

> Application : CV

```layout
header
  generalInfo
  avatar
main
  careerPathSection
  certificateSection
  experienceSection
  skillSection
  languageSection
  hoobySection
  portfolioSection
footer
  referenceSection

2 pages: viewMode(for print) vs editMode
```

## Course

- [x] Installation
- [ ] Build
- [ ] Core Data Types


### 1.Installation

> yarn global add typescript
> tsc --version
> Current version : 4.1.3

### 2.Build

> tsc index.ts
> tsx -watch index.ts // watch change

> Ref
- https://alligator.io/tooling/webpack-gulp-grunt-browserify/
- https://stackoverflow.com/questions/19846078/how-to-read-from-chromes-console-in-javascript
- https://coderwall.com/p/fskzdw/colorful-console-log

1. https://gulpjs.com/

```bash
yarn global add gulp-cli 
yarn add typescript gulp gulp-typescript -D 
```

### 3.Core Datatypes

1. Boolean
2. Number
3. String
4. Object
5. Array
6. Tuple

> About Number, String, Boolean, Symbol and Object

> It can be tempting to think that the types Number, String, Boolean, Symbol, or Object are the same as the lowercase versions recommended above. These types do not refer to the language primitives however, and almost never should be used as a type.

> Ref

- https://www.typescripttutorial.net/typescript-tutorial/typescript-types/
- https://github.com/typestack/class-transformer
- https://randomuser.me/documentation#multiple