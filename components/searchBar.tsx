import React from 'react';
import { Alert, Button, TextInput, View } from 'react-native';
import tw from 'twrnc';

interface Word {
    word: string;
    setWord: React.Dispatch<React.SetStateAction<string>>;
    styles: string;
}

function SearchBox({ word, setWord, styles }: Word) {
    return (
        <View
            style={[
                tw`flex flex-row justify-between items-center rounded-2xl border-2 ml-5 mr-5 pr-3 ${styles}`,
            ]}>
            <TextInput
                onChangeText={text => setWord(text)}
                placeholder="검색할 키워드를 입력해주세요!!"
                style={tw`flex-3`}
            />
            <Button title="검색" onPress={() => Alert.alert(word)} />
        </View>
    );
}

export default SearchBox;
