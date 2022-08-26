import React from 'react';
import { Text, View } from 'react-native';

import useReadColleges from '../api/college/useReadColleges';
import Box from '../components/Box';

function SelectScreen() {
    const { data, isLoading } = useReadColleges();

    if (isLoading) {
        return <Text>없습니다</Text>;
    }

    return (
        <View>
            {data &&
                data.map(college => (
                    <Box
                        key={college.id.toString()}
                        name={college.name}
                        majors={college.majors}
                    />
                ))}
        </View>
    );
}

export default SelectScreen;
