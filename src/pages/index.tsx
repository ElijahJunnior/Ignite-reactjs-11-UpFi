import { Button, Box } from '@chakra-ui/react';
import { useMemo } from 'react';
import { useInfiniteQuery } from 'react-query';

import { Header } from '../components/Header';
import { CardList } from '../components/CardList';
import { api } from '../services/api';
import { Loading } from '../components/Loading';
import { Error } from '../components/Error';

export default function Home(): JSX.Element {

  const {
    data,
    isLoading,
    isError,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteQuery(
    'images',
    getDataFromBack,
    {
      getNextPageParam: (previewsReqData) => {
        return previewsReqData?.after
      }
    }
  );

  function getDataFromBack({ pageParam = null }) {
    return api.get("/api/images", {
      params: {
        after: pageParam
      }
    }).then(res => res.data);
  }

  const formattedData = useMemo(() => {
    // TODO FORMAT AND FLAT DATA ARRAY
    // console.log("::dados::", data);

  }, [data]);

  // TODO RENDER LOADING SCREEN

  // TODO RENDER ERROR SCREEN

  return (
    <>
      {console.log("hasNextPage", hasNextPage)}
      {console.log("data", data?.pages.flat(1))}
      <Header />

      <Box maxW={1120} px={20} mx="auto" my={20}>
        {/* <CardList cards={formattedData} /> */}
        {/* TODO RENDER LOAD MORE BUTTON IF DATA HAS NEXT PAGE */
          hasNextPage && (
            <Button onClick={() => fetchNextPage()}>
              Loading Next Page
            </Button>
          )
        }

      </Box>
    </>
  );
}
