import { useEffect } from 'react';
import { useSlicesContext } from '@context';

export function useLatestData() {
  const { setHotSlices, setSliceMasters } = useSlicesContext(null);

  useEffect(fetchData, []);

  function fetchData() {
    async function fetcher() {
      try {
        const res = await fetch(process.env.GATSBY_GRAPHQL_ENDPOINT, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            query: `
            query {
              StoreSettings(id: "downtown") {
                name
                slicemasters {
                  name
                }
                hotSlices {
                  name
                }
              }
            }
            `,
          }),
        });
        const { data } = await res.json();
        setHotSlices(data.StoreSettings.hotSlices);
        setSliceMasters(data.StoreSettings.slicemasters);
      } catch (e) {
        console.log(e);
      }
    }
    fetcher();
  }
}
