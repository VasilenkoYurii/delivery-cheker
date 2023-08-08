import { Navigation } from "../Navigation/Navigation";
import { AppBarContainer, Container } from "./AppBar.styled";

export const AppBar = () => {
  return (
    <AppBarContainer>
      <Container>
        <Navigation />
      </Container>
    </AppBarContainer>
  );
};
