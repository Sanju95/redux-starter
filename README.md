# redux-starter
Learning redux

https://codewithmosh.com/courses/enrolled/783424

# Writing clean Redux code: 4- Redux Toolkit
https://redux-toolkit.js.org/


# Designing the store: 7- Memoizing Selectors with Reselect 
`npm i reselect`
## Use this library to use cache if the state doesn't change
i.e:
`const x = getUnresolvedBugs(store.getState());`
`const y = getUnresolvedBugs(store.getState());`

### fix
`export const getUnresolvedBugs = createSelector(
  state => state.entities.bugs,
  state => state.entities.projects,
  (bugs, projects) => bugs.filter(bug => !bug.resolved)
  )`
