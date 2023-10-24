import React, {useMemo} from 'react';
import {
  ActionButton,
  ButtonText,
  Container,
  FontAwesome,
  ItemsContainer,
  PageIndicatorText,
  Separator,
} from './styles';

interface PaginationComponentProps {
  page: number;
  totalPages: number;
  onPreviousPage: () => void;
  onNextPage: () => void;
}

const PaginationComponent: React.FC<PaginationComponentProps> = ({
  page,
  totalPages,
  onPreviousPage,
  onNextPage,
  ...args
}) => {
  const pageIdicator = useMemo(() => {
    return `${page} / ${totalPages}`;
  }, [page, totalPages]);

  const disablePreviousButton = useMemo(() => {
    return page === 0;
  }, [page]);

  const disableNextButton = useMemo(() => {
    return page >= totalPages;
  }, [page, totalPages]);

  return (
    <Container {...args}>
      <ItemsContainer>
        <PageIndicatorText>{pageIdicator}</PageIndicatorText>
        <Separator />
        <ActionButton>
          <ButtonText>Go to</ButtonText>
        </ActionButton>
        <Separator />
        <ActionButton disabled={disablePreviousButton} onPress={onPreviousPage}>
          <FontAwesome
            disabled={disablePreviousButton}
            name="arrow-left-long"
          />
        </ActionButton>
        <Separator />
        <ActionButton disabled={disableNextButton} onPress={onNextPage}>
          <FontAwesome disabled={disableNextButton} name="arrow-right-long" />
        </ActionButton>
      </ItemsContainer>
    </Container>
  );
};
export default PaginationComponent;
