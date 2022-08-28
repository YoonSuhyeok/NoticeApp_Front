/* eslint-disable react/no-unstable-nested-components */
import React, { useMemo, useState } from 'react';
import { ActivityIndicator, FlatList, View } from 'react-native';
import tw from 'twrnc';

import useInfiniteReadNotices from '../api/notice/useInfiniteReadNotices';
import NoticeBox from '../components/noticeBox';
import PageBox from '../components/pageBox';
import SearchBar from '../components/searchBar';

function HomeScreen({ navigation }: any) {
    const [searchWord, setSearchWord] = useState<string>('');
    const [page, setPage] = useState<number>(0);
    const {
        data: notices,
        isLoading,
        refetch,
    } = useInfiniteReadNotices(page, searchWord);

    const pages = useMemo(() => {
        if (notices && notices.totalElements) {
            const temp = [];
            for (let i = 0; i < notices.totalPages; i += 1) {
                temp.push(i);
            }
            return temp;
        }
        return [];
    }, [notices]);

    const PageNumberComponet = (
        <View style={tw`flex flex-row`}>
            {pages.map(num => (
                <PageBox
                    key={num}
                    page={num}
                    setPage={setPage}
                    refetch={refetch}
                />
            ))}
        </View>
    );

    if (isLoading) {
        <ActivityIndicator size="large" />;
    }

    return (
        <View>
            <SearchBar
                styles="mt-5"
                setWord={setSearchWord}
                fetch={refetch}
                setPage={setPage}
            />
            {PageNumberComponet}
            {notices && (
                <FlatList
                    data={notices.content}
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
                    ListEmptyComponent={() => (
                        <ActivityIndicator size="small" />
                    )}
                />
            )}
        </View>
    );
}

export default HomeScreen;
