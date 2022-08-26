import axios from 'axios';
import { useQuery } from 'react-query';

import { Notice } from '../types';

async function readNotice() {
    // TODO 추후 URL 수정 필요
    const { data } = await axios.get('http://10.0.2.2:8080/api/notice/');
    return data;
}

function useReadNotices(searchWord: string) {
    return useQuery<Array<Notice>>('notices', () => readNotice(), {
        select: notices =>
            notices.filter(
                notice =>
                    !(notice.title.match(new RegExp(searchWord, 'i')) === null),
            ),
    });
}

export default useReadNotices;
