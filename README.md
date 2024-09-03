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
I have chosen Vue 3 because this has better performance than React and Angular.
Vue 3 offers better performance optimization compared to previous versions and some other frameworks. The reactivity system in Vue 3 is highly efficient, resulting in faster updates and rendering.
Also, it introduces the Composition API, which provides a more flexible and scalable way to organize and reuse code logic in components. This can lead to cleaner and more maintainable code.

I didn't use router for this project as this is one page test app.

I used only tailwind css, but no other libraries for UI and I built common components from scratch.
I implemented pixel perfect and fully mobile responsive.

I used Pinia for store management, not Vuex.
Because Pinia has got these advantages.
- **Built with Composition API**: Pinia is built using Vue 3's Composition API, which provides more flexibility and modularity when organizing state logic. This can lead to cleaner and more maintainable code compared to Vuex.
- **Type Safety**: Pinia provides strong type safety support, making it easier to catch errors during development and ensuring more robust code. With TypeScript, you can benefit from enhanced code completion, type checking, and better code maintainability.
- **Zero Dependencies**: Pinia has zero external dependencies, which can result in a smaller bundle size for your application compared to Vuex. This can lead to faster load times and better performance.

As the result, Pinia is more popular now.
I didn't use store in basic components because they are common components which should be reusable and scalable.

I implemented unit test with Vitest.
Also, I implemented storybook with Histoire.

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
