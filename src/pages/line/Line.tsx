import { Center, Text, Box } from '@chakra-ui/react';

export const Line = () => {
  return (
    <Box position={"relative"} w={"full"}>
      <Center
        h={"150px"}
        w={"110%"}
        bgColor={"white"}
        color={"black"}
        display={"inline-flex"}
        gap={"14"}
        fontStyle={"italic"}
        position={"relative"}
        transform={"rotate(3deg) translateX(-100px) translateY(-120px)"}
        shadow={'2xl'}
      >
        {Array(8)
          .fill('KONSEPT')
          .map((text, i) => (
            <Text key={i} fontSize={"3xl"} fontWeight={"bold"} opacity={"0.5"}>
              {text}
            </Text>
          ))}
      </Center>
    </Box>
  );
};
