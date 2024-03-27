import { StyleSheet } from "react-native";

const styles  = StyleSheet.create({
    formContext: {
        width:"100%",
        height:"100%",
        bottom:0,
        backgroundColor: "#000",
        alignItems: "center",
        borderTopLeftRadius: 30,
        borderTopRightRadius:30,
        marginTop: 30
    },

    form:{
        width: "100%",
        height: "auto",
        marginTop: 30,
        padding:10,
    },
    formLabel:{
        color:"#fff",
        fontSize: 18,
        paddingLeft: 20,

    },
    formInput:{
        width: "90%",
        borderRadius: 50,
        backgroundColor:"#fff",
        height:40,
        margin:12,
        paddingLeft:10,

    },
    buttonCalculator:{
        borderRadius:50,
        alignItems: "center",
        justifyContent: "center",
        width: "90%",
        backgroundColor: "#fff",
        paddingTop:14,
        paddingBottom:14,
        marginLeft:12,
        margin:30,
    },
    textButtonCalculator:{
        fontSize: 20,
        color:"fff",
    }

});

export default styles;