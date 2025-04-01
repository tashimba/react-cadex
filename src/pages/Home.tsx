import { Flex, Box, Heading, Text, Container, Grid } from "@radix-ui/themes";
import styled from "styled-components";
import { ButtonWithLink } from "../ui";
import { Footer, Header, YouTubeEmbed } from "../components";

const FullWidthGraySection = styled.div`
  background-color: var(--gray-2);
  width: 100%;
`;

const SectionContent = styled(Container)`
  padding: var(--space-5) 0;
`;

export const Home = () => {
  return (
    <Flex direction="column" style={{ minHeight: "100vh" }}>
      <Header />
      <FullWidthGraySection>
        <SectionContent size="3">
          <Flex direction={{ initial: "column", md: "row" }} gap="6">
            <Box flexGrow="1">
              <Heading as="h1" size="8" mb="4">
                Most important title on the page
              </Heading>
              <Text as="p" size="4" mb="4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                mattis, leo et condimentum ultricies, sem urna convallis matus,
                vel suscipit nibh lacus tincidunt ante
              </Text>
              <ButtonWithLink asChild size="3" to="/contact">
                Contact Us
              </ButtonWithLink>
            </Box>
            <Box flexGrow="1" style={{ minWidth: "50%" }}>
              <YouTubeEmbed />
            </Box>
          </Flex>
        </SectionContent>
      </FullWidthGraySection>

      <Container size="3" py="6">
        <Heading as="h2" size="6" align="center" mb="6">
          Also very important title
        </Heading>
        <Grid columns={{ initial: "1", sm: "2", md: "3" }} gap="4">
          {[1, 2, 3, 4, 5].map((item) => (
            <Box key={item}>
              <Heading as="h3" size="4" mb="2">
                Title
              </Heading>
              <Text as="p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                <br />
                <br />
                Aliquam mattis, leo et condimentum
              </Text>
            </Box>
          ))}
        </Grid>
      </Container>

      <FullWidthGraySection>
        <SectionContent size="3">
          <Flex direction="column" align="center" gap="4">
            <Heading as="h3" size="4">
              Less important title
            </Heading>
            <ButtonWithLink asChild size="2" to="/contact">
              Contact Us
            </ButtonWithLink>
          </Flex>
        </SectionContent>
      </FullWidthGraySection>

      <Footer />
    </Flex>
  );
};
