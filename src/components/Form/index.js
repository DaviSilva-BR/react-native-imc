import React, { useState } from "react";
import { View, Text, TextInput, Button, TouchableOpacity } from "react-native";
import ResultImc from "./ResultImc";
import styles from "./style";

export default function Form(){

    const [height, setHeight] = useState(null);
    const [weight, setWeight] = useState(null);
    const [messageImc, setMessageImc] = useState("preencha o peso e altura");
    const [imc, setImc] = useState(null);
    const [textButton, setTextButton] = useState("Calcular");

    function  imcCalculator(){
        return setImc((weight / (height * height)).toFixed(2));
    }

    function validationImc(){
        if(weight != null && height != null){
            imcCalculator();
            setHeight(null);
            setWeight(null);
            setMessageImc("seu IMC é igual: " );
            setTextButton("Calcular Novamente");
            return 
        }
        setImc(null)
        setTextButton("Calcular");
        setMessageImc("Preencha seu peso:")
    }

    return(
        <View style={styles.formContext}>
            <View style={styles.form}>
                <Text style={styles.formLabel}>Altura</Text>
                <TextInput 
                style={styles.formInput}
                onChangeText={setHeight}
                value={height}
                placeholder="Digite a sua altura:"
                keyboardType="numeric"
                />
                <Text style={styles.formLabel}>Peso</Text>
                <TextInput
                style={styles.formInput}
                onChangeText={setWeight}
                value={weight}
                placeholder="Digite o seu peso"
                keyboardType="numeric"
                />
                
                <TouchableOpacity
                style={styles.buttonCalculator}
                    onPress={() =>{
                        validationImc()
                    }}
                >
                    <Text style={styles.textButton}>{textButton}</Text>
                </TouchableOpacity>
            </View>
            <ResultImc messageResultImc={messageImc} resultImvc={imc} />
        </View>
    );
}