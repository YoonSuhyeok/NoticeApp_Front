import React from 'react';
import { TextInput, View } from 'react-native';
import tw from 'twrnc';

interface WordInterface {
    setWord: React.Dispatch<React.SetStateAction<string>>;
    styles: string;
}

function SearchBox({ setWord, styles }: WordInterface) {
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
        </View>
    );
}

export default SearchBox;
