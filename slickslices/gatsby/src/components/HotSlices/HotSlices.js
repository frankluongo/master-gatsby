import React from 'react';
import { useSlicesContext } from '@context';

export default function HotSlices() {
  const { hotSlices } = useSlicesContext();
  console.log(hotSlices);
  return <div />;
}
