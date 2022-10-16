import React from 'react';
import {View, Text} from 'react-native';

const Card =(props)=>{
    return(
        <View>
            <View className="flex-col flex">
                <Text className="py-2 font-bold text-xl">{props.keys}</Text>
                <Text className="pt-1 pb-2 overflow-x-hidden break-words">{props.linked}</Text>
            </View>
        </View>
    );
}

export default Card;