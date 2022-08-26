import axios from 'axios';
import { useQuery } from 'react-query';

import { College } from '../types';

async function readCollege() {
    // TODO 추후 URL 수정 필요
    const { data } = await axios.get('http://10.0.2.2:8080/api/college');
    return data;
}

function useReadColleges() {
    return useQuery<Array<College>>('notices', () => readCollege());
}

export default useReadColleges;
