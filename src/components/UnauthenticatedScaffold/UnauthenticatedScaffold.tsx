import { Flex, FlexProps, Space, Text } from '@mantine/core';

interface UnauthenticatedScaffoldProps extends FlexProps {}

export const UnauthenticatedScaffold = ({
  children,
  ...flexProps
}: UnauthenticatedScaffoldProps) => {
  const {
    mih = '100vh',
    w = 'full',
    justify = 'center',
    align = 'center',
    direction = 'column',
    ...remainingFlexProps
  } = flexProps;

  return (
    <Flex
      mih={mih}
      w={w}
      direction={direction}
      justify={justify}
      align={align}
      {...remainingFlexProps}
    >
      <Text size="xl" fw="bold">
        RoundOut
      </Text>
      <Space h="sm" />
      {children}
    </Flex>
  );
};
