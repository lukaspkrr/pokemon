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

export interface PokemonTypesTheme {
  normal: string;
  fire: string;
  water: string;
  grass: string;
  electric: string;
  ice: string;
  fighting: string;
  poison: string;
  ground: string;
  flying: string;
  psychic: string;
  bug: string;
  rock: string;
  ghost: string;
  dark: string;
  dragon: string;
  steel: string;
  fairy: string;
}

export interface DarkLightTheme extends GlobalTheme, PokemonTypesTheme {
  title: string;
  primary: string;
  secundary: string;
  tertiary: string;
  highlight: string;
  text: string;
}
