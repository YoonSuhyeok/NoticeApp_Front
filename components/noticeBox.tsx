import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import tw from 'twrnc';

interface NoticeInterface {
    title: string;
    url: string;
    navigation: any;
}

function NoticeBox({ title, url, navigation }: NoticeInterface) {
    return (
        <View style={tw`p-2 mt-2 border-solid border-2 border-slate-400`}>
            <TouchableOpacity
                onPress={() => navigation.navigate('Web', { url })}>
                <Text
                    style={tw`text-lg font-bold`}
                    numberOfLines={1}
                    ellipsizeMode="tail">
                    {title}
                </Text>
                <View style={tw`flex flex-row`}>
                    <Text>2022.08.25</Text>
                    <Text> || </Text>
                    <Text>예비군연대</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}

export default NoticeBox;
