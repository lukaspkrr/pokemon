export type ThemeMode = 'light' | 'dark';

export interface ThemeContext {
  mode: ThemeMode;
  setMode(mode: ThemeMode): void;
}

export interface GlobalTheme {
  genderMale: string;
  genderFemale: string;
  white: string;
  black: string;
}

export enum PokemonTypesEnum {
  normal = 'normal',
  fire = 'fire',
  water = 'water',
  grass = 'grass',
  electric = 'electric',
  ice = 'ice',
  fighting = 'fighting',
  poison = 'poison',
  ground = 'ground',
  flying = 'flying',
  psychic = 'psychic',
  bug = 'bug',
  rock = 'rock',
  ghost = 'ghost',
  dark = 'dark',
  dragon = 'dragon',
  steel = 'steel',
  fairy = 'fairy',
}

export type PokemonTypesTheme = Required<
  Record<keyof typeof PokemonTypesEnum, string>
>;

export interface DarkLightTheme extends GlobalTheme, PokemonTypesTheme {
  title: string;
  primary: string;
  secundary: string;
  tertiary: string;
  highlight: string;
  text: string;
}
