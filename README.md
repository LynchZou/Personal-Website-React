# Lynch's Personal Website - React version

This project is the React version of Lynch (Xuyang)'s personal website. It is completely different from the previous version in coding part. No code is reused and everything is built from scratch. It uses React with Redux.

## Preparation

Lynch's Personal Website - React version (LPWR) requires predefined `.env` file to start building<br/>
Below is one example of the `.env` file<br/>

```
API_KEY=AIxxxaSxxxmzg73xxxxxx1dxxxxx4xxxxx-KGY
AUTH_DOMAIN=websixxxxt-6xxxx18.firebaseapp.com
DATABASE_URL=https://websixxct-xx18.firebaseio.com
PROJECT_ID=websixxxeaxxb18
STORAGE_BUCKET=website-react-xxxxx.appspot.com
MESSAGING_SENDERID=819xxx49xx
```

`API_KEY` refers to your firebase API key<br/>
`AUTH_DOMAIN` refers to your firebase auth domain<br/>
`DATABASE_URL` refers to your firebase database url<br/>
`PROJECT_ID` refers to your project id with firebase<br/>
`STORAGE_BUCKET` refers to your firebase storage bucket<br/>
`MESSAGING_SENDERID` refers to your firebase messaging senderId<br/>

## Installation

For npm user:

```sh
$ npm install
$ npm run start
```

For yarn user:

```sh
$ yarn install
$ yarn run start
```

## Debug

If your React/Node server fails to start with the following error message

```sh
events.js:167
       throw er; // Unhandled 'error' event
```

Please check your port `3000` and make sure there is no other app running on the same port

## Dependencies

LPWR uses a number of open source libraries to work properly.<br/>
Below are all the key dependencies/technologies in this project.<br/>
For all dependencies, please refer to `package.json`

| Dependency                          | Description                                                                                                   |
| ----------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| [react]                             | A JavaScript library for building user interfaces. Serve as front-end.                                        |
| [redux]                             | A predictable state container for JavaScript apps                                                             |
| [redux-thunk]                       | Thunk middleware for Redux                                                                                    |
| [bootstrap]                         | An open source toolkit for developing with HTML, CSS, and JS                                                  |
| [firebase]                          | Firebase is Google's mobile platform that helps you quickly develop high-quality apps and grow your business. |
| [moment]                            | Parse, validate, manipulate, and display dates and times in JavaScript                                        |
| [react-typing-animation]            | A fully-featured typing animation in React that supports any valid JSX                                        |
| [react-vertical-timeline-component] | Vertical timeline for React.js                                                                                |
| [react-visibility-sensor]           | Sensor component for React that notifies you when it goes in or out of the window viewport                    |
| [webpack]                           | A static module bundler for modern JavaScript applications                                                    |

## License

MIT

[//]: # "These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax"
[react]: https://reactjs.org/
[redux]: https://redux.js.org/
[redux-thunk]: https://github.com/reduxjs/redux-thunk
[bootstrap]: https://getbootstrap.com/
[firebase]: https://firebase.google.com/
[moment]: https://momentjs.com/
[react-typing-animation]: https://www.npmjs.com/package/react-typing-animation/
[react-vertical-timeline-component]: https://stephane-monnot.github.io/react-vertical-timeline/#/
[react-visibility-sensor]: https://github.com/joshwnj/react-visibility-sensor
[webpack]: https://webpack.js.org/
