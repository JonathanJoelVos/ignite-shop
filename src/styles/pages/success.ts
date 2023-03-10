import { styled } from "..";

export const SuccessContainer = styled("div", {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    margin: "0 auto",
    height: 656,

    h1: {
        fontSize: "$2xl",
        color: "$gray100"
    },

    p: {
        fontSize: "$xl",
        color: "$gray300",
        maxWidth: 560,
        textAlign: "center",
        marginTop: "2rem",
    },

    a: {
        marginTop: "5rem",
        fontSize: "$lg",
        color: "$green500",
        fontWeight: 700,
        cursor: "pointer",

        "&:hover": {
            textDecoration: "underline",
            color: "$green300",
        }
    }
})

export const ImageContainer = styled("div", {
    marginTop: "4rem",
    width: "100%",
    maxWidth: 130,
    height: 145,
    background: "linear-gradient(180deg, #1EA483 0%, #7465D4 100%);",
    borderRadius: 8,
    padding: "0.25rem",

    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    
    img: {
        objectFit: "cover",
    }


})