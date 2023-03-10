import { styled } from "..";

export const ProductContainer = styled("main", {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gridGap: "4rem",
    alignItems: "stretch",

    maxWidth: 1180,
    margin: "0 auto",
})

export const ImageContainer = styled("div", {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    maxWidth: 576,
    height: 656,

    background: "linear-gradient(180deg, #1EA483 0%, #7465D4 100%);",
    borderRadius: 8,
    padding: "0.25rem",

    img: {
        objectFit: "cover",
    }

})

export const ProductsDetailsContainer = styled("div", {
    display: "flex",
    flexDirection: "column",
    
    h1: {
        fontSize: "$2xl",
        color: "$gray300"
    },
    
    "span": {
        marginTop: "1rem",
        fontSize: "$2xl",
        color: "$green300",
    },
    
    p: {
        marginBottom: "2.5rem",
        fontSize: "$md",
        color: "$gray300",
        lineHeight: 1.6,
    },
    button: {
        marginTop: "auto",
        padding: "1.25rem",
        fontSize: "$md",
        color: "$white",
        background: "$green500",
        border: "none",
        borderRadius: 8,
        fontWeight: 700,
        cursor: "pointer",
        transition: "filter 0.2s",
        
        "&:disabled": {
            opacity: 0.6,
            cursor: "not-allowed",
        },

        "&:not(:disabled):hover": {
            background: "$green300",
        }


    }
})