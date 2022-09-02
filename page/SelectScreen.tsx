import React from 'react';
import { Text, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import tw from 'twrnc';

import useReadColleges from '../api/college/useReadColleges';

function SelectScreen() {
    const { data, isLoading } = useReadColleges();

    if (isLoading) {
        return <Text>없습니다</Text>;
    }

    return (
        <View>
            <View style={tw`flex flex-row items-center h-10 bg-sky-400`}>
                <Ionicons
                    style={tw`ml-2`}
                    name="arrow-back"
                    size={16}
                    color="white"
                />
                <Text style={tw`text-white ml-2`}>검색필터</Text>
            </View>
            <View style={tw`flex flex-row justify-between`}>
                <View style={tw`w-1/2 border-r-2 border-slate-400`}>
                    <View
                        style={tw`flex flex-row items-center border-b-2 border-slate-400 h-11`}>
                        <View style={tw`w-2.5 h-10.5 bg-orange-300`} />
                        <Text style={tw`font-bold text-base ml-2`}>
                            학과선택
                        </Text>
                    </View>
                    <View style={tw`h-full`}>
                        {data &&
                            data.map(college => (
                                <View
                                    style={tw`flex flex-row items-center border-b-2 border-slate-400 h-11`}>
                                    <Text
                                        key={college.id}
                                        style={tw`text-sm ml-8 flex-4`}>
                                        {college.name}
                                    </Text>
                                    <Ionicons
                                        style={tw`flex-1`}
                                        name="checkmark"
                                        size={16}
                                    />
                                </View>
                            ))}
                    </View>
                </View>
                <View style={tw`w-1/2`}>
                    {data &&
                        data.map(college =>
                            college.majors.map(major => (
                                <View
                                    style={tw`flex flex-row items-center h-11 w-full`}>
                                    <Text
                                        key={major.name}
                                        style={tw`text-sm pl-8`}>
                                        · {major.name}
                                    </Text>
                                </View>
                            )),
                        )}
                </View>
            </View>
        </View>
    );
}

export default SelectScreen;
