/* eslint-disable import/no-extraneous-dependencies */

import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
import Login from '@/views/Login.vue';

storiesOf('Views/Login', module)
  .add('Basic', () => ({
    components: { Login },
    template: '<login />',
  }));
