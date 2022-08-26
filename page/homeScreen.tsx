import React, { useState } from 'react';
import { FlatList, View } from 'react-native';

import useReadNotices from '../api/notice/useReadNotices';
import NoticeBox from '../components/noticeBox';
import SearchBar from '../components/searchBar';

function HomeScreen({ navigation }: any) {
    const [searchWord, setSearchWord] = useState<string>('');
    const { data: notices, isLoading } = useReadNotices(searchWord);

    return (
        <View>
            <SearchBar styles="mt-5" setWord={setSearchWord} />
            {!isLoading && (
                <FlatList
                    data={notices}
                    keyExtractor={item => item.title}
                    refreshing={isLoading}
                    renderItem={item => (
                        <NoticeBox
                            key={item.item.id}
                            title={item.item.title}
                            url={item.item.url}
                            navigation={navigation}
                        />
                    )}
                />
            )}
        </View>
    );
}

export default HomeScreen;
