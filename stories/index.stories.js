import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Welcome } from '@storybook/react/demo';
import { Button, Row, Col, Container } from '../components'

storiesOf('Get Started', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add('with text', () => {
    return (
      <>
        <Button onClick={() => console.log('asdf')}>Default</Button>
        <Button type="primary" onClick={() => console.log('asdf')}>Primary</Button>
      </>
    )
  })
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ));

storiesOf('Grid', module)
  .add('Row', () => {
    return (
      <>
        <Row flow="nowrap">
          <Col span>
            test
          </Col>
          <Col span>
            test
          </Col>
        </Row>
      </>
    )
  })