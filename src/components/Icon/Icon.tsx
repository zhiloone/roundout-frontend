import { rem } from '@mantine/core';
import { IconCheck, IconX } from '@tabler/icons-react';

interface IconProps {
  name: 'x' | 'check';
}

const iconDefaultStyles = { width: rem(20), height: rem(20) };

const iconDictionary: { [key in IconProps['name']]: React.ReactNode } = {
  x: <IconX style={iconDefaultStyles} />,
  check: <IconCheck style={iconDefaultStyles} />,
};

export const Icon = (props: IconProps) => iconDictionary[props.name];
