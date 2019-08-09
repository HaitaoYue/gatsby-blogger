---
title: "Build html for gatsby failed"
date: "2019-08-09"
image: ""
thumb: ""
---

## Use window in component will build failed

```bash
"window" is not available during server side rendering.
```

This error is because using `window` in component, need to set loaders to null at build html stage, and add condition usage of this component.

```javascript
exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === "build-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /bad_component/,
            use: loaders.null()
          }
        ]
      }
    });
  }
};
```

Then add condition usage in React Class.

```javascript 1.8
{
  typeof window !== "undefined" && <BadComponent />;
}
```
