/* eslint-disable import/no-extraneous-dependencies */

import { storiesOf } from '@storybook/vue';
import GoogleLoginButton from '../components/GoogleLoginButton.vue';

storiesOf('GoogleLoginButton', module)
  .add('Basic', () => ({
    components: { GoogleLoginButton },
    template: '<google-login-button appkey=""></google-login-button>',
  }));
