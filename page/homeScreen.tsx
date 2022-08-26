import React, { useState } from 'react';
import { FlatList, Text, View } from 'react-native';

import useReadNotices from '../api/notice/useReadNotices';
import NoticeBox from '../components/noticeBox';
import SearchBar from '../components/searchBar';

function HomeScreen({ navigation }: any) {
    const [searchWord, setSearchWord] = useState<string>('');
    const { data: notice } = useReadNotices();

    return (
        <View>
            <SearchBar
                styles="mt-5"
                word={searchWord}
                setWord={setSearchWord}
            />
            {notice ? (
                <FlatList
                    data={notice}
                    renderItem={item => (
                        <NoticeBox
                            title={item.item.title}
                            url={item.item.url}
                            navigation={navigation}
                        />
                    )}
                />
            ) : (
                <Text>공지가 없습니다</Text>
            )}
        </View>
    );
}

export default HomeScreen;
