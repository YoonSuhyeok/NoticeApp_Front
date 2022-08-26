import React from 'react';
import { Text, View } from 'react-native';
import tw from 'twrnc';

interface Notice {
    title: string;
}

function NoticeBox({ title }: Notice) {
    return (
        <View style={tw`p-2 mt-2 border-solid border-2 border-slate-400`}>
            <Text style={tw`text-lg font-bold`}>{title}</Text>
            <View style={tw`flex flex-row`}>
                <Text>2022.08.25</Text>
                <Text> || </Text>
                <Text>예비군연대</Text>
            </View>
        </View>
    );
}

export default NoticeBox;
