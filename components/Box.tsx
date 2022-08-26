import React, { useMemo } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import tw from 'twrnc';

import { Major } from '../api/types';

interface BoxInterface {
    name: string;
    majors: Array<Major>;
}

function Box({ name, majors }: BoxInterface) {
    const data: Array<Major> = useMemo(() => {
        if (majors) {
            return majors;
        }
        return [];
    }, [majors]);

    return (
        <View>
            <Text style={tw`p-2 mt-2 border-solid border-2 border-slate-400`}>
                {name}
            </Text>
            {data.map(major => (
                <TouchableOpacity
                    key={major.name}
                    style={tw`ml-10 border-solid border-2 border-slate-400`}>
                    <Text>{major.name}</Text>
                </TouchableOpacity>
            ))}
        </View>
    );
}

export default Box;
