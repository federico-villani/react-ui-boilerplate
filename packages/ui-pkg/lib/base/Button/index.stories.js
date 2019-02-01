import React from 'react';
import { storiesOf, addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions'; // use this to SIMULATE ACTIONS ( CLICKS etc )
import { linkTo } from '@storybook/addon-links';
import { Welcome } from '@storybook/react/demo';
//import base from 'paths.macro'; // USE THIS ONE TO GENERATE NAME WITH PATH INSIDE

import Button from './index';

/**
 * DEMO INTRO
 * welcome and introduction
 *
 */
storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);
/**
 *
 */


/**
 * WRAPPING ALL STORY WITH A DECORATOR -- GLOBAL
 * useful to reset css about positioning / margin
 * the decorator wraps ALL the elem of storybook
 *
 */
addDecorator(story => <div style={{ textAlign: 'center' }}>{story()}</div>);
/**
 *
 */


/**
 * STANDARD UI COMPONENT
 * The most basic
 *
 */
storiesOf('bottone standard', module)
  .add('standard', () => <Button text="My Button Text" onClick={action('click')} />)
  .add('colore rosso', () => <Button text="My Button Texts con il rosso" colorBg="red" pos="relative" />);
/**
 *
 */


/**
 * NESTING STORTIES
 * with "/" in the title will group them
 *
 */
storiesOf('Nested/bottone versione 1', module)
  .add('standard', () => <Button text="My Button Text Nested versione 1" />)
  .add('colore rosso', () => <Button text="My Button Text versione 1 con il rosso" colorBg="red" />);
storiesOf('Nested/bottone versione 2', module)
  .add('standard', () => <Button text="My Button Text Nested versione 2" />)
  .add('colore rosso', () => <Button text="My Button Text versione 2 con il rosso" colorBg="red" />);
/**
 *
 */


/**
 * WRAPPING THE STORY WITH A DECORATOR
 * useful to reset css about positioning / margin
 * the decorator wraps all the elem inside the story
 *
 */
storiesOf('With decorator wrapper', module)
  .addDecorator(story => <div style={{ textAlign: 'right' }}>{story()}</div>) // @todo check why the import is not recognized
  .add('standard', () => <Button text="My Button Text" pos="relative" />)
  .add('colore rosso', () => <Button text="My Button Texts con il ross" colorBg="red" pos="relative" />);
/**
 *
 */


/**
 * GENERATE NAME WITH PATH INSIDE
 * dir reference into the name
 *
 */
// storiesOf(`Other|${base}/Dirname Example`, module)
//   .add('Dirname 1', () => <Button label="Dirname 1" />)
//   .add('Dirname 2', () => <Button label="Dirname 2" />);
/**
 *
 */
