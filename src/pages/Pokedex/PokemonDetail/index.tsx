import React, {useState} from 'react';
import {useWindowDimensions} from 'react-native';
import {
  Container,
  Content,
  HeaderContent,
  PokeballImage,
  PokemonContainer,
  PokemonId,
  PokemonName,
  PokemonSprite,
  PokemonType,
  RNTabBar,
  TypeContainer,
  TypeContent,
  View,
} from './styles';
import {RouteProp} from '@react-navigation/native';
import {PokedexStackParamList} from '~/routes/pokedexStack';

import Pokeball from '~/assets/images/pokeball-outline.png';
import {
  AboutComponent,
  BaseStatsComponent,
  EvolutionComponent,
  MovesComponent,
} from './components';
import {SceneMap, TabView} from 'react-native-tab-view';

const renderScene = SceneMap({
  about: () => <AboutComponent />,
  baseStats: () => <BaseStatsComponent />,
  evolution: () => <EvolutionComponent />,
  moves: () => <MovesComponent />,
});

interface PokemonDetailProps {
  route: RouteProp<PokedexStackParamList>;
}
const PokemonDetail: React.FC<PokemonDetailProps> = ({route}) => {
  const layout = useWindowDimensions();

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {key: 'about', title: 'About'},
    {key: 'baseStats', title: 'Base Stats'},
    {key: 'evolution', title: 'Evolution'},
    {key: 'moves', title: 'Moves'},
  ]);

  const renderTabBar = (props: any) => <RNTabBar {...props} />;

  return (
    <Container pokemonType={route.params?.pokemon?.types?.[0]}>
      <HeaderContent>
        <View>
          <PokemonName>{route.params?.pokemon?.name}</PokemonName>
          <TypeContainer>
            {route.params?.pokemon?.types?.map((type: string, i: number) => (
              <TypeContent key={String(i)}>
                <PokemonType>{type}</PokemonType>
              </TypeContent>
            ))}
          </TypeContainer>
        </View>
        <View>
          <PokemonId>{route.params?.pokemon?.idText}</PokemonId>
        </View>
      </HeaderContent>
      <PokemonContainer>
        <PokeballImage source={Pokeball} />
        <PokemonSprite
          source={{
            uri: route.params?.pokemon?.sprite,
          }}
        />
      </PokemonContainer>
      <Content>
        <TabView
          navigationState={{index, routes}}
          renderScene={renderScene}
          onIndexChange={setIndex}
          initialLayout={{width: layout.width}}
          renderTabBar={renderTabBar}
        />
      </Content>
    </Container>
  );
};

export default PokemonDetail;
