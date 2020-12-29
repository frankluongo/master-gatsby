import React from 'react';
import { useSlicesContext } from '@context';

export default function CurrentlySlicing() {
  const { sliceMasters } = useSlicesContext();
  console.log(sliceMasters);
  return <div />;
}
