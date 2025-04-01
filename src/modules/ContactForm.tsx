import styled from "styled-components";
import { useForm } from "react-hook-form";
import {
  Flex,
  Text,
  TextField,
  Button,
  Heading,
  TextArea,
} from "@radix-ui/themes";
import { useState } from "react";

const StyledForm = styled.form`
  max-width: 500px;
  margin: 0 auto;
  width: 90%;
`;

const ErrorText = styled(Text)`
  color: var(--red-11);
  font-size: var(--font-size-1);
`;

type FormValues = {
  name: string;
  email: string;
  message: string;
};

export const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [submittedName, setSubmittedName] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit = async (data: FormValues) => {
    setIsLoading(true);

    try {
      fetch("url", {
        //сервер не стал писать, поэтому просто запрос в никуда, не жду ответа
        method: "POST",
        body: JSON.stringify(data),
      });

      setSubmittedName(data.name);
      setSubmitted(true);
      setIsLoading(false);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  if (submitted) {
    return (
      <Flex direction="column" gap="4" align="center">
        <Heading size="5">Message generated on the server</Heading>
        <Text>Thank you for your interest, {submittedName}</Text>
      </Flex>
    );
  }

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <Flex direction="column" gap="4">
        <Flex direction="column" gap="2">
          <Text as="label" size="2" weight="bold">
            Name
          </Text>
          <TextField.Root
            placeholder="Enter your name"
            {...register("name", { required: "Name is required" })}
            disabled={isLoading}
          />
          {errors.name && <ErrorText>{errors.name.message}</ErrorText>}
        </Flex>

        <Flex direction="column" gap="2">
          <Text as="label" size="2" weight="bold">
            Email
          </Text>
          <TextField.Root
            placeholder="Enter your email"
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address",
              },
            })}
            disabled={isLoading}
          />
          {errors.email && <ErrorText>{errors.email.message}</ErrorText>}
        </Flex>

        <Flex direction="column" gap="2">
          <Text as="label" size="2" weight="bold">
            Message
          </Text>
          <TextArea
            placeholder="Enter your message"
            rows={5}
            {...register("message", { required: "Message is required" })}
            disabled={isLoading}
          />
          {errors.message && <ErrorText>{errors.message.message}</ErrorText>}
        </Flex>

        <Button
          type="submit"
          size="3"
          style={{ marginTop: "var(--space-2)" }}
          disabled={isLoading}
        >
          {isLoading ? "Submitting..." : "Submit"}
        </Button>
      </Flex>
    </StyledForm>
  );
};
