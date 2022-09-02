import axios from 'axios';
import { useQuery, useQueryClient } from 'react-query';

import { NoticePage } from '../types';

export async function readNotice(page: number, word: string) {
    // TODO 추후 URL 수정 필요
    const { data } = await axios.get(
        `http://10.0.2.2:8080/api/notice?page=${page}&word=${word}`,
    );
    return data;
}

function useInfiniteReadNotices(page: number, word: string) {
    const queryClient = useQueryClient();

    const zeroPage = queryClient.getQueryData(['notices', 0]) as NoticePage;
    let totalPage = 0;
    if (zeroPage !== undefined) {
        totalPage = zeroPage.totalPages;
    }

    if (page + 1 > totalPage) {
        queryClient.prefetchQuery(['notices', page + 1], () =>
            readNotice(page + 1, word),
        );
    }

    return useQuery<NoticePage>(
        ['notices', page],
        () => readNotice(page, word),
        {
            initialData: queryClient.getQueryData(['notices', page]),
            keepPreviousData: true,
        },
    );
}

export default useInfiniteReadNotices;
