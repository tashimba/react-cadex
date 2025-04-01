import { Flex, Box, Heading, Text } from "@radix-ui/themes";
import { Footer, Header } from "../components";
import { ContactForm } from "../modules";

export const Contact = () => {
  return (
    <Flex direction="column" style={{ minHeight: "100vh" }}>
      <Header />
      <Box style={{ flex: 1, padding: "var(--space-6) 0" }}>
        <Flex direction="column" align="center" gap="4" mb="6">
          <Heading as="h1" size="7">
            Contact us
          </Heading>
          <Text size="4">Only CTA on the page</Text>
        </Flex>
        <ContactForm />
      </Box>
      <Footer />
    </Flex>
  );
};
