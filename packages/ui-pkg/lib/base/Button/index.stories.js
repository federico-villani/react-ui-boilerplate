import React from 'react';
import { storiesOf, addDecorator, addParameters } from '@storybook/react';
import { action } from '@storybook/addon-actions'; // use this to SIMULATE ACTIONS ( CLICKS etc )
import { linkTo } from '@storybook/addon-links';
import { Welcome } from '@storybook/react/demo';
import { withViewport } from '@storybook/addon-viewport';
// import { withOptions } from '@storybook/addon-options';
//import base from 'paths.macro'; // USE THIS ONE TO GENERATE NAME WITH PATH INSIDE
import {
  withKnobs,
  text,
  boolean,
  number
} from '@storybook/addon-knobs';

import MyButton from './index';

/**
 * DEMO INTRO
 * welcome and introduction
 */
storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('MyButton')} />);
/**
 */

/**
 * WRAPPING ALL STORY WITH A DECORATOR -- GLOBAL
 * useful to reset css about positioning / margin
 * the decorator wraps ALL the elem of storybook
 */
addParameters({ options: { showAddonPanel: false } });
addDecorator(story => <div style={{ textAlign: 'center' }}>{story()}</div>);
/**
 */

/**
 * STANDARD UI COMPONENT
 * The most basic
 */
storiesOf('bottone standard', module)
  .add('standard', () => <MyButton text="My Button Text" onClick={action('click')} />)
  .add('colore rosso', () => <MyButton text="My Button Texts con il rosso" colorBg="red" pos="relative" />);
/**
 */

/**
 * Mobile VIEWPORT UI COMPONENT
 * The most basic
 */
storiesOf('bottone Mobile', module)
  .addDecorator(withViewport('iphone6'))
  .add('iphone6 example', () => <MyButton text="My Button Text" onClick={action('click')} />)
/**
 */

/**
 * NESTING STORTIES
 * with "/" in the title will group them
 */
storiesOf('Nested/bottone versione 1', module)
  .add('standard', () => <MyButton text="My Button Text Nested versione 1" />)
  .add('colore rosso', () => <MyButton text="My Button Text versione 1 con il rosso" colorBg="red" />);
storiesOf('Nested/bottone versione 2', module)
  .add('standard', () => <MyButton text="My Button Text Nested versione 2" />)
  .add('colore rosso', () => <MyButton text="My Button Text versione 2 con il rosso" colorBg="red" />);
/**
 */

/**
 * WRAPPING THE STORY WITH A DECORATOR
 * useful to reset css about positioning / margin
 * the decorator wraps all the elem inside the story
 */
storiesOf('With decorator wrapper', module)
  .addDecorator(story => <div style={{ textAlign: 'right' }}>{story()}</div>) // @todo check why the import is not recognized
  .add('standard', () => <MyButton text="My Button Text" pos="relative" />)
  .add('colore rosso', () => <MyButton text="My Button Texts con il ross" colorBg="red" pos="relative" />);
/**
 */

/**
 * KNOBS
 * addons to render different props in the same component
 */
storiesOf('Storybook Knobs', module)
// Add the `withKnobs` decorator to add knobs support to your stories.
// You can also configure `withKnobs` as a global decorator.
  .addDecorator(withKnobs)
  // Knobs for React props
  .add('with a button', () => (
    <button type="button" disabled={boolean('Disabled', false)}>
      {text('Label', 'Hello Storybook')}
    </button>
  ))
  // Knobs as dynamic variables.
  .add('as dynamic variables', () => {
    const name = text('Name', 'Arunoda Susiripala');
    const age = number('Age', 89);

    const content = `I am ${name} and I'm ${age} years old.`;
    return (<div>{content}</div>);
  });
/**
 */

/**
 * CUSTOM OPTIONS
 * add parameters and options to a single story
 */
storiesOf('Addons|Custom options', module)
  // If you want to set the option for all stories in of this kind
  .addParameters({ options: { showAddonPanel: false } })
  .add(
    'Story for MyComponent',
    () => <MyButton text="My Button Text" pos="relative" />,
    // If you want to set the options for a specific story
    { options: { showAddonPanel: false } }
  );
/**
 */

/**
 * GENERATE NAME WITH PATH INSIDE
 * dir reference into the name
 */
// storiesOf(`Other|${base}/Dirname Example`, module)
//   .add('Dirname 1', () => <MyButton label="Dirname 1" />)
//   .add('Dirname 2', () => <MyButton label="Dirname 2" />);
/**
 */
