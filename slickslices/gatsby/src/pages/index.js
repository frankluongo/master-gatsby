import React from 'react';
import SEO from '@components/SEO';
import CurrentlySlicing from '@components/CurrentlySlicing';
import HotSlices from '@components/HotSlices';
import { useLatestData } from '@lib';
import { HomePageGrid } from '@styles';
import LoadingGrid from '@components/LoadingGrid';

export default function HomePage() {
  useLatestData();
  return (
    <>
      <SEO title="Home" />
      <div className="center">
        <h1>The best Pizza downtown</h1>
        <p>Open 11 AM to 11 PM Everyday</p>
        <HomePageGrid>
          <LoadingGrid />
          <LoadingGrid />
          {/* <CurrentlySlicing /> */}
          {/* <HotSlices /> */}
        </HomePageGrid>
      </div>
    </>
  );
}
