1. ts for plain TS files & tsx for react components.

2. We maintain React components and React handles DOM(creating & updating DOM elements).

3. React application is tree of components with App being root.

4. React is a Lib ( lib is a tool vs framework is a toolset) for building UI.

5. DOM: tree like structure representing all elements/components in browser.

6. Virtual DOM: JS data structure, lightweight , in memory representation of component tree, where each node represents a component & its properties.

7. When state of a component changes, React updates the corresponding node in virtual DOM to reflect the new state. Then it compares the current version of virtual DOM with the previous version to identify the nodes that need to be updated. Then update those nodes in the actual DOM.

8. In React a component cant return more than 1 element. Use Fragment (<>) to solve this issue.

9. In JSX we can only use html or other react components.

10. Type Annotation: We can specify the type of our vars & parameters.

11. Hook: fn allows to tap into built-in features in React

12. Each component is going to have its own state, independent of other components.

13. Interface in TS: using this we can define the shape or the interface of an obj.

14. Using Props we can pass data to our components.(like fn args)

15. event handler prop names start with on & then camelCased event name. e.g. onSelectItem, onClick, onChange, onSubmit

16. State is local data in a React component.

17. rafce -> react Arrow Function Export component. shortcut

18. With children prop we can pass children to a component. "children: ReactNode" if we want to pass html.

19. A CSS module : all class names r scoped locally, to avoid name clashes with other CSS files.

20. CSS-IN-JS : write all the styles for a component next to its definition in JS or TS file.
    styled-components library is used for this.

21. React updates state asynchronously,(after the event handler finishes execution). All the state changes are batched.

22. State is stored outside of components in memory. They are there (in memory) as long as components r visible on screen.

23. Use 'hooks' only at the top level of our components. (No using them in if, for ,nested loops)

24. Group related State vars inside an obj, but avoid deep nesting bsc hard to update.

25. Pure Fn: Given same input, always returns same result.

26. React components take 'Props' input and give 'JSX' output.

27. To keep components pure, keep changes out of the render phase. No change to any item that existed before rendering. (before function component)
    It is totally fine to update an item created as part of rendering.

28. Strict Mode. Renders each component twice & shows result of 2nd render. 2nd render -> used to update user interface
    1st render-> detect & report bugs. only in devlopment mode.

29. We should treat **props** & state obj/arrays as **immutable**.

30. Spread operator is shallow. Retruns address doesn't create new.
    When updating State, our new State obj is independent of existing State obj.

31. 'Immers' lib: draft is a proxy obj that records changes we going to apply to State arr/obj.(<-Copy of)
    used to update state vars (arrays & objs)

32. To share State betn components we need to lift the State to the closest parent and share with child components as props.

33. The component holding the State is responsible for updating it...(not chlid components)

34. Ref Hook: used to reference DOM elements. This obj has 1 'current' property. Used to read values from input field.

35. ParseInt: JS fn. covert str to no.

36. <varname>? for optional parameter in Props.

37. All 'input fields' in HTML has a 'value' property for maintaining their own state. Value property of input fields always returns a str.

38. Controlled component: The component's state is entirely controlled by react. In case of Input fields the 'value' is
    not managed by DOM but instead is stored & updated in the component state.

39. Optional Chaining (?) and Destructuring, Nested Destructuring.. some new features of JS.

40. Schema: All validation rules defined in one place. 'Zod' is a lib for this(schema based form validation)

41. TS 'type' is similar to 'interface'.

42. Both ref hook & state hook can be used to read data from input fields. 'React-hook-form' lib makes this even easier.
    It also supports standard HTML attributes for data validation such as required, minLength, etc.

43. Effect hook : execute some code after a component is rendered. To prevent Side-effect, to keep components pure.
    e.g. storing smthing in local storage(browser), working with DOM elements, call server etc.

44. React Icons : lib for using icons with react.

45. Effect Dependencies: vars(state or props) Effect hook is dependent on. If value of any one of vars change, react reruns Effect fn.
    [] for making it run only once, the 1st time our component is rendered.

46. 'Cleanup code' should be provided if needed in 'return' statement of Effect hook. Usually cleanup code stops or undos
    whatever effect was doing. (connect,subscribe,show,fetch-disconnect,unsub,hide,abort or ignore)

47. React 'mounts' and 'unmounts' components on screen. Cleanup code gets executed during unmounting.

48. Axios: lib for http request.

47.'Promise': An obj that holds the eventual result or failure of an asynchronous(long running) operation.
All promises have a method called 'then'.

48. Give [] as Effect Dependencies when updating state in effect hook.

49. XHR: xml http request.

50. Every http request/response has 2 sections: headers (metadata) & body(supply or get data)

51. All promises have a 'catch' method for catching errors.

52. Axios get returns a promise. If promise resolved we get response else error obj.

53. Can't pass asynch fns to Effect hook.

54. Type Annotation is not allowed in catch clause. (type assertion)

55. 'Await' the promise from a 'asynch' function to get response. Try catch block for error handling.

56. Best Practice: When we fetch data in effect we should also provide a cleanup fn for cancelling the fetch req
    in case the data is no longer needed.

57. 'AbortController': Built in class in browsers, that allows us to cancel or abort asynchronous operation.

58. asynchronous operations are non blocking. So control moves immediately to next line of code wether promise is
    settled or not.

59. All promises have a 'finally' method, which is executed when our promise is settled. This doesn't work in
    strict mode.

60. Optimistic Update: Update the UI then Call the server. We r optimistic that call to server will succeed.
    Blazing fast UI. Instant feedback to user. **preferred**

61. Pessimistic Update: Call the server, wait for result.If call successful, we update UI.
    We assume call to server will fail. Slow UI.

62. data: savedUser = savedUser is renaming / alias for data property. TS feature ig.

63. In Http, 'Put' for replacing an obj & 'Patch' for updaing one or more of obj properties.

64. Some backends require us to send apikey in http headers.

65. Custom Hooks: We can share functionality across different components.
