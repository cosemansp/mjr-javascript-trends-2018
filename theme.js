import { dark as theme } from 'mdx-deck/themes'
import styled from 'styled-components'
import prismStyle from 'react-syntax-highlighter/styles/prism/tomorrow'
import bash from 'react-syntax-highlighter/languages/prism/bash';

export default {
  ...theme,

  // Customize your presentation theme here.
  //
  // Read the docs for more info:
  // https://github.com/jxnblk/mdx-deck/blob/master/docs/theming.md
  // https://github.com/jxnblk/mdx-deck/blob/master/docs/themes.md

  font: 'Futura, sans-serif',

  fontSizes: [
      '0.75em',
      '1em',
      '1em',  // bullets & Header 3,
      '2em',  // Header 2
      '2.5em'     // Header 1
  ],
  colors: {
    ...theme.colors,
    link: '#addb67',
  },
  weights: 300,
  h1: {
    // textTransform: 'uppercase',
    fontWeight: 600,
    color: '#6AD798',
  },
  small: {
    fontWeight: 200,
  },
  table: {
    fontSize: '40px',
  },
  prism: {
    style: prismStyle
  },
  languages: {
    bash
  }
}

// other themes, components and style
// https://github.com/SaraVieira/gql-all-things/blob/master/deck.mdx
