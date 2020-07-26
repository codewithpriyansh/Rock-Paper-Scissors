import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';

const rock = require("./signs/rock.png");
const paper = require("./signs/paper.png");
const scissors = require("./signs/scissors.png");

const randomRPS = () => {
    const signs = [rock, paper, scissors];
    const rand = Math.floor(Math.random() * 3);
    return signs[rand];
}

const bgColor = ['#2ecc71', '#f1c40f', '#e74c3c', '#8e44ad', '#ffeaa7']

const PlayScreen = () => {

    const [counter, setCounter] = useState(5);
    useEffect(() => {
        if (counter === 0) return
        const timer = setTimeout(() => {
            setCounter(counter - 1)
        }, 500);
        return () => {
            clearTimeout(timer)
        }
    }, [counter])


    return (
        <View style={StyleSheet.compose(styles.container, {backgroundColor: bgColor[counter - 1]})}>
            {(counter > 0) ? (
                <Text style={styles.header}>{counter}</Text>
            ) : (
                    <>
                        <Image style={styles.img} source={randomRPS()} />
                        <View style={styles.button}>
                            <Button onPress={() => setCounter(5)} title="Play Again" />
                        </View>
                    </>
                )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    header: {
        fontSize: 150,
        marginBottom: 30,
    },
    img: {
        width: 200,
        height: 200,
    },
    button: {
        position: "absolute",
        bottom: 100,
    }
});


export default PlayScreen