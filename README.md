# ![Screenshot](./src/favicon.ico) News Application | Angular with NgRx

It is a real-time `News Application` using New York Times news API. 

The New York Times is an American newspaper based in New York City with worldwide influence and readership.

> [Let's View Live !!](https://kprokkie.github.io/angular-ngrx-news-app/)

Following are the few concepts used while building this application:

- Routing
- API Calls
- Dependency Injection
- State Management using NgRx

## App Folder Structure

- Components `[SectionsComponent, NavbarComponent, NewsComponent, and NewsIemComponent]`
- Services `[NewsService]`
- Store `[Actions, Reducers, Selectors, Effects]`

## Code Setup

Create a `reducer` function for each data type you have in your application. The combination of these reducers will make up your application `state`:

```
export interface SectionsState {
    allSections: Array<string>;
    currentSection: string;
}

export function reducer(state: SectionsState = initialState, action: SectionsActions): SectionsState {
    switch (action.type) {
        case SectionsActionTypes.LOAD_SECTIONS:
            return state;
        case SectionsActionTypes.SET_CURRENT_SECTION:
            return {
                ...state,
                currentSection: action.payload
            };
        default:
            return state;
    }
}
```

In your app's main module, import those reducers and use the `StoreModule.provideStore(reducers)` function to provide them to Angular's injector:

```
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { reducers } from './store/reducers';
import { NewsEffects } from './store/effects/news.effects';

@NgModule({
  imports: [
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([
      NewsEffects
    ])
  ]
})
export class AppModule { }
```

You can then inject the Store service into your components and services. Use `store.select` to select slice(s) of state:

```
this.store.pipe(select(getAllSections))
    .subscribe(
    allSections => {
        this.allSections = allSections;
    }
);

filterNews(filter: string): void {
    this.store.dispatch(new fromActions.FilterSubSection(filter));
}

```

Build `Actions` to dispatch actions and `Selectors` to fetch slice of `state`:

```
import { Action } from '@ngrx/store';

export class LoadSections implements Action {
    readonly type = SectionsActionTypes.LOAD_SECTIONS;
    constructor() {}
}

import { createSelector } from '@ngrx/store';

export const getAllSections = createSelector(
    selectSectionsState,
    sections => sections.allSections
)
```
The `effect` listens for any defined `action(s)` (e.g. LoadNewsSection), then does some processing and returns any `action(s)` that are then processed by the store and distributed to a `reducer` or some other `effect`:

```
this.store.dispatch(new fromActions.LoadNewsSection());

import { Effect, Actions, ofType } from '@ngrx/effects';

@Effect()
loadNews$: Observable<Action> = this.actions$.pipe(
    ofType(fromActions.NewsActionTypes.LOAD_SECTION_NEWS), // watch action
    mergeMap((action: LoadNewsSection) =>
        this.newsService.getSectionNews(action.payload).pipe(
            map((news: NewsInfo) => (new fromActions.LoadNewsSectionSuccess(news.results))),
            catchError(error => of(new fromActions.LoadNewsSectionFailure(error)))
        )
    )
);
```

## How to run app ?

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.1.2.

## Clone Project Repository 

> `git clone https://github.com/kprokkie/angular-ngrx-news-app.git`

## Install Dependencies

> Run `npm install` to install project dependencies

## Development Server

> Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`

## Build

> Run `ng build` to build the project.

The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running Unit Tests

> Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running E2E Tests

> Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).