import React, { Component } from 'react';

import {
    Platform,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    Animated,
    Easing
} from 'react-native';

import { BaseComponent, BasePage, Navbar, RouterManager, SvgUri, AppConst } from 'react-native-iber-common';

import SvgMap from '../resource/SvgMap';


export default class BBDrawer extends BaseComponent {

    path = new Animated.Value(0)

    static defaultProps = {
        width: AppConst._SCREEN_WIDTH * 0.7,
        side: 'left'
    }

    constructor(props) {
        super(props)
        this.state = {
            isShow: false,

        }
    }


    show() {
        this.setState({ isShow: true }, () => {
            Animated.timing(this.path, {
                toValue: 1,
                duration: 300,
                easing: Easing.linear
            }).start();
        });
    }



    dismiss() {
        Animated.timing(this.path, {
            toValue: 0,
            duration: 300,
            easing: Easing.linear
        }).start(() => {
            this.setState({ isShow: false })
        });
    }


    render() {
        return this.state.isShow ? <TouchableOpacity style={{ position: 'absolute', width: AppConst._SCREEN_WIDTH, height: AppConst._SCREEN_HEIGHT, backgroundColor: 0x00000050 }}
            onPress={() => {
                this.dismiss()
            }}>
            <Animated.View style={{
                width: this.props.width, height: AppConst._SCREEN_HEIGHT, backgroundColor: '#fff', transform: [{
                    translateX: this.path.interpolate({
                        inputRange: [0, 1],
                        outputRange: [this.props.side == 'left' ? -this.props.width : AppConst._SCREEN_WIDTH, this.props.side == 'left' ? 0 : AppConst._SCREEN_WIDTH - this.props.width]
                    })
                }]
            }}>

                {this.props.children}
            </Animated.View>

        </TouchableOpacity> : null
    }
}
