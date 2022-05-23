import React from 'react';
import { View, Text as Rntext, StyleSheet } from 'react-native';
import { presets } from "./text.preset";


export default function Text({ children, preset = "default", style }) {
    const textStyles = StyleSheet.compose(presets[preset], style)
    return (
        <Rntext style={textStyles}>
            {children}
        </Rntext>
    )
}
