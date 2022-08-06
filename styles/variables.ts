export const variables = {
    colors: {
        lightestGreen: "#F5FFE3",
        lightGreen: "#DEECC4",
        green: "#90BD3A",
        darkGreen: "#81aa35",
        lightDark: "#9b9b9b",
        dark: "#7D7D7D",
        white: "#ffffff",
        black: "#232323",
        darkGray: "#8D8D8D",
        gray: "#C4C4C4",
        lightGray: "#D9D9D9",
        lightestGray: "#f1f1f1",
        darkest: "#383838"
    },
    radius: {
        xs: "5px",
        sm: "10px",
        md: "14px",
        lg: "17px",
        xl: "20px"
    },
    fontSize: {
        xs: "10px",
        sm: "16px",
        md: "20px",
        lg: "30px",
        xl: "35px"
    },
    mediaBreakPoints: {
        xs: "0px",
        sm: "600px",
        md: "900px",
        lg: "1200px",
        xl: "1536px",
    },
    boxShadow: {
        md: "0px 2px 19px rgba(198, 198, 198, 0.5)"
    }
}

export const getMediaQuery = (size: string) => {
    return `@media (max-width: ${size})`
}