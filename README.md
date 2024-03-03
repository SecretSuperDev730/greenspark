# Greenspark


## Technical stacks

- Vue 3 + Typescript
- Pinia (store)
- Tailwind css
- Histoire (storybook)
- Vitest (unit test)


## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

### Run storybook

```sh
npm run story:dev
```

### Build storybook

```sh
npm run story:build
```


## Implementation
I implemented this project with Vue 3 + typescript.
I didn't use router for this project as this is one page test app.

I used only tailwind css, but no other libraries for UI and I built common components from scratch.
I implemented pixel perfect and fully mobile responsive.

I used pinia for store management.
I didn't use store in basic components because they are common components which should be reusable and scalable.

I implemented unit test with vitest.
Also, I implemented storybook with pinia.

I've chosen the latest, modern & popular frameworks and libraries.

### Project structure
- assets (styles)
- components (basic components)
- icons (svg icons)
- resources (constants and interfaces)
- services (API calls)
- stores (pinia stores)
- App.vue
- main.ts
- index.html

### Components
#### Atoms
- Checkbox
- ColorSelect
- Logo
- Switch
- Tooltip
#### Molecules
- ProductWidget
