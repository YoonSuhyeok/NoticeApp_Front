import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import tw from 'twrnc';

interface PageBoxInterface {
    page: number;
    setPage: React.Dispatch<React.SetStateAction<number>>;
    refetch: any;
}

function PageBox({ page, setPage, refetch }: PageBoxInterface) {
    return (
        <TouchableOpacity
            onPress={() => {
                setPage(page);
                refetch();
            }}>
            <Text style={tw`text-lg font-bold ml-10`}>{page}</Text>
        </TouchableOpacity>
    );
}

export default PageBox;
