# items to talk about

- Vue vs React

React, VueJS & React has mostly focused on fundamental improve their framework.

- Angular
    @angular/cli: Full Rework; multiple apps/libs, faster, ...
    Tree Shakable
        - Providers (no more reference in NgModule)
        - RxJS v6 (pipeable operators)
    update.anglular.io

    (Soon) Evy rendering engine (3 gen, smaller, faster) going to Web Components

- Vuejs
    @vue/cli: Productivity boost for developers
    Vue DevTools & Vue-test-utils
    Improved Typescript support
    Web Components
    (Soon) Improved rendering engine (faster & smaller) for modern browsers. V3 will be build with typescript.
    (Soon) Vuex 4.0: even more simplified
    https://github.com/vuejs/roadmap

- React Fiber
    New core architecture (but we didn't notice it); ready for async rendering
    React v16: Fragements, Error bounderies, portals, better and faster SSR, 30% smaller.

    Coming: react can pause and resume rendering at will, has a priority-based update system; Fiber allows React to fine tune rendering to make sure the most important updates happen as soon as possible. Suspense: You can pause any state update until the data is ready, and you can add async loading to any component deep in the tree without plumbing all the props and state through your app and hoisting the logic
    https://build-mbfootjxoo.now.sh/

- NodeJS
    + Node foundation
    + N-api node abstraction on js engine
    + Async/await + ES2018
    + Web Assembly in node
    + ESM in node10, today @std/esm
    + frameworks:
        + NestJS

- GraphQL

    + Tl;DR: GraphQL is the thing that's eventually gonna replace REST, but you keep telling yourself that you don't need to learn it.

    => state management is hard
    /api/posts
    /api/posts/1
    /api/user/info  -> cache -> invalidate -> redux

    => I love / hate redux
    => Next 2.0 - Full page reload when navigaton between routes

    "When using Apollo & GraphQL, in 90% of the cases, you don't need Redux, MobX, Sagas, Observables or RxJS."

    + Apollo client (replace redux, ngrx) -
    + Apollo server
    + GraphQL Stack
    + Relay Modern
    + Info
        * https://medium.com/airbnb-engineering/reconciling-graphql-and-thrift-at-airbnb-a97e8d290712
        * https://egghead.io/lessons/node-js-build-a-simple-graphql-server-with-graphql-yoga

