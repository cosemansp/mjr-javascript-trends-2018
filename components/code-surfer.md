```
import { CodeSurfer } from "mdx-deck-code-surfer"
import nightOwl from "prism-react-renderer/themes/nightOwl"

<CodeSurfer
  code={require("!raw-loader!./code/provider.js")}
  lang="jsx"
  theme={nightOwl}
/>

