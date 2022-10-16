import React, {useState} from 'react';
import {View, Text, TextInput, Linking, TouchableOpacity, KeyboardAvoidingView, ScrollView, Keyboard, Alert} from 'react-native';
import Card from "../components/Card";
import {obj} from "../database";

const Home = () =>{
    let storingLink = obj;
    const [key, setKey] = useState("");
    const [link, setLink] = useState("");

    const handleAddLink = () => {
        if (link){
        Keyboard.dismiss();
        storingLink.push({
            judul:key,
            hyperlink:link
        });
        setKey("");
        setLink("");
        }else{
            alert("At least input link");
        }
    }
    
    const deleteLink = (index) => {
        Alert.alert(
            "Delete link?",
            "This action can't be undo",
            [
            {
                text: "Cancel",
                onPress: () =>{},
                style: "cancel"
            },
            { text: "OK", 
                onPress: () => {
                let tempLink = [...storingLink];
                tempLink.splice(index, 1);
                storingLink=[...tempLink];
            } 
            }
            ]);
    }

    return(
        <View className="flex-1 pt-4 pb-3">
            <ScrollView contentContainerStyle={{flexGrow: 1}}keyboardShouldPersistTaps='handled'>
            {
            storingLink.map((obj, index) => {
                return (
                <View className="items-center py-3">
                    <View className="flex-row justify-around items-center bg-violet-200 w-10/12 rounded-xl">
                        <TouchableOpacity onPress={()=> Linking.openURL(obj.hyperlink)}>
                            <Card linked={obj.hyperlink} keys={obj.judul} key={index}/>
                        </TouchableOpacity>
                        <TouchableOpacity className="" key={index} onPress={()=>deleteLink(index)}>
                            <View>
                                <Text className="text-xl">❌</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
                )
            })
        }
        </ScrollView>
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} className="pt-3 w-max flex-row justify-around items-center">
        <View className="flex-col">
            <TextInput className="p-4 my-2 bg-slate-50 rounded-full border-violet-500 border w-64 shadow shadow-black" placeholder={'Ketik Judul Link'} value={key} onChangeText={text => setKey(text)} />
            <TextInput className="p-4 my-2 bg-slate-50 rounded-full border-violet-500 border w-64 shadow shadow-black" placeholder={'Ketik Link'} value={link} onChangeText={text => setLink(text)} />
        </View>
        <TouchableOpacity onPress={() => handleAddLink()}>
            <View className="w-16 h-16 bg-slate-50 rounded-full justify-center items-center border-violet-500 border shadow shadow-black">
                <Text>+</Text>
            </View>
        </TouchableOpacity>
        </KeyboardAvoidingView>
        </View>
    );
}

export default Home;