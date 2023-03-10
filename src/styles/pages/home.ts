import { styled } from "..";

export const HomeContainer = styled("main", {
    display: "flex",
    maxWidth: "calc(100vw - ((100vw - 1180px) / 2))",
    width: "100%",
    marginLeft: "auto",
    overflow: "hidden",
    alignItems: "center",
    height: "100vh",
})

export const Product = styled("div", {
    background: "linear-gradient(180deg, #1EA483 0%, #7465D4 100%);",
    borderRadius: 8,
    cursor: "pointer",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0.25rem",

    footer: {
        display: 'flex',
        padding: "2rem",
        background: "rgba(0, 0, 0, 0.6)",
        borderRadius: 8,
        transform: "translateY(110%)",
        opacity: 0,
        transition: "all 0.2s ease-in-out",
        width: "100%",

        strong: {
            flex: 1,
            fontSize: "$lg",
            fontWeight: 700,
            color: "$white",
        },

        "span": {
            color: "$green500",
            fontWeight: 700,
            fontSize: "$xl",
        },

    },
    "&:hover": {
        footer: {
            opacity: 1,
            transform: "translateY(0)",
        }
    }
})
