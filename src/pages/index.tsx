import { Button, Box } from '@chakra-ui/react';
import { useMemo } from 'react';
import { useInfiniteQuery } from 'react-query';

import { Header } from '../components/Header';
import { CardList } from '../components/CardList';
import { api } from '../services/api';
import { Loading } from '../components/Loading';
import { Error } from '../components/Error';
import { string } from 'yup';

type Image = {
  title: string,
  description: string,
  url: string,
  ts: number,
  id: string,
}
type Page = {
  after?: string,
  data: Image[]
}


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

  function getDataFromBack({ pageParam = null }): Promise<Page> {
    return api.get("/api/images", {
      params: {
        after: pageParam
      }
    }).then(res => res.data);
  }

  const formattedData = useMemo(() => {
    const formatedData = data?.pages.flatMap(
      pageData => pageData.data
    );
    return formatedData;
  }, [data]);

  if (isLoading) {
    return (
      <Loading />
    )
  }

  // TODO RENDER ERROR SCREEN
  if (isError) {
    return (
      <Error />
    )
  }

  return (
    <>
      <Header />
      <Box maxW={1120} px={20} mx="auto" my={20}>
        <CardList cards={formattedData} />
        {
          hasNextPage && (
            <Button
              onClick={() => fetchNextPage()}
              disabled={isFetchingNextPage}
            >
              {!isFetchingNextPage ? "Carregar mais" : "Carregando..."}
            </Button>
          )
        }
      </Box>
    </>
  );
}
