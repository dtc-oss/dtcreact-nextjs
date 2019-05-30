import { configure, addParameters, addDecorator } from '@storybook/react';
import myTheme from './myTheme'
import { setConsoleOptions } from '@storybook/addon-console';
import { addReadme } from 'storybook-readme'

setConsoleOptions({
  panelExclude: [],
});

addParameters({
  options: {
    theme: myTheme,
  },
})

addDecorator(addReadme)

// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /\.stories\.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
