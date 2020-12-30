import React from 'react';
import { useSlicesContext } from '@context';
import LoadingGrid from '@components/LoadingGrid';
import ItemGrid from '@components/ItemGrid';

export default function HotSlices() {
  const { hotSlices } = useSlicesContext();
  return (
    <div>
      <h2 className="center">
        <span className="mark tilt">Hot Slices</span>
      </h2>
      <p>Sitting in the window, ready to eat</p>
      {!hotSlices && <LoadingGrid />}
      {hotSlices && !hotSlices?.length && <p>Nothin' in the case</p>}
      {hotSlices && hotSlices?.length && <ItemGrid items={hotSlices} />}
    </div>
  );
}
