import { Body, Container, Head, Heading, Hr, Html, Preview, Section, Tailwind, Text } from '@react-email/components';

interface Props {
  message: string;
  senderEmail: string;
}

export default function ContactFormEmail({ message, senderEmail }: Props) {
  return (
    <Html>
      <Head />
      <Preview>New Message from Portfolio Site</Preview>
      <Tailwind>
        <Body className="bg-gray-100 text-black">
          <Container>
            <Section className="bg-white borderBlack my-10 px-10 py-4 rounded-md">
              <Heading className="leading-tight">You received the following message from the contact form</Heading>
              <Text>{message}</Text>
              <Hr />
              <Text>The sender's email is: {senderEmail}</Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
