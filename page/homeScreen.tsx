import React, { useState } from 'react';
import { FlatList, View } from 'react-native';

import NoticeBox from '../components/noticeBox';
import SearchBar from '../components/searchBar';

const data = [
    {
        id: 1,
        title: '첫번째 공지',
    },
    {
        id: 2,
        title: '첫번째 공지',
    },
    {
        id: 3,
        title: '첫번째 공지',
    },
    {
        id: 4,
        title: '첫번째 공지',
    },
    {
        id: 5,
        title: '첫번째 공지',
    },
    {
        id: 6,
        title: '첫번째 공지',
    },
];

function HomeScreen() {
    const [searchWord, setSearchWord] = useState<string>('');
    return (
        <View>
            <SearchBar
                styles="mt-5"
                word={searchWord}
                setWord={setSearchWord}
            />
            <FlatList
                data={data}
                renderItem={item => <NoticeBox title={item.item.title} />}
            />
        </View>
    );
}

export default HomeScreen;
