import 'styled-components/native';
import {DarkLightTheme} from '~/styles/types';

declare module 'styled-components/native' {
  export interface DefaultTheme extends DarkLightTheme {}
}
