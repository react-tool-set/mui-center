# Center Material-UI components
Centers children vertically and horizontally. Best suited for [Material-UI](https://material-ui.com) components because it depends on MUI's style compiler. May be used in non-MUI projects as well, but will probably bloat your code bundle due to dependencies.

###Install
`npm install --save @react-toolset/mui-center`

###Use
##### with Typescript
```typescript jsx
import React from 'react';
import Center, {CenterMode} from '@react-toolset/mui-center';

const Centered = ()=> {
        return <Center mode={CenterMode.Parent}>...</Center> 
}
```
##### with Javascript
```jsx harmony
import React from 'react';
import Center from '@react-toolset/mui-center';

const Centered = ()=> {
        return <Center mode="parent">...</Center> 
}
```