import React from 'react';
import { useSlicesContext } from '@context';
import LoadingGrid from '@components/LoadingGrid';
import ItemGrid from '@components/ItemGrid';

export default function CurrentlySlicing() {
  const { sliceMasters } = useSlicesContext();
  return (
    <div>
      <h2 className="center">
        <span className="mark tilt">SliceMasters On</span>
      </h2>
      <p>Standing by, ready to slice</p>
      {!sliceMasters && <LoadingGrid />}
      {sliceMasters && !sliceMasters?.length && (
        <p>No one is currently Slicing</p>
      )}
      {sliceMasters && sliceMasters?.length && (
        <ItemGrid items={sliceMasters} />
      )}
    </div>
  );
}
