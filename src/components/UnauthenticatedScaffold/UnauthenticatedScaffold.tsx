import { Flex, FlexProps } from '@mantine/core';

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
    ...remainingFlexProps
  } = flexProps;

  return (
    <Flex mih={mih} w={w} justify={justify} align={align} {...remainingFlexProps}>
      {children}
    </Flex>
  );
};
