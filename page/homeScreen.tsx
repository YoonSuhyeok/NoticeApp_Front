import { View } from 'react-native';
import React, { useState } from 'react';
import SearchBar from '../components/searchBar';

function HomeScreen() {
    const [searchWord, setSearchWord] = useState<string>('');
    return (
        <View>
            <SearchBar
                styles="mt-5"
                word={searchWord}
                setWord={setSearchWord}
            />
        </View>
    );
}

export default HomeScreen;
