import React from 'react';
import WebView from 'react-native-webview';

interface WebScreenInterface {
    route: any;
}

function WebScreen({ route }: WebScreenInterface) {
    return <WebView source={{ uri: route.params.url }} />;
}

export default WebScreen;
