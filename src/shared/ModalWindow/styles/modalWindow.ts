export const styles = {
    blackoutBlock: {
        zIndex: 1000,
        overflowY: "auto" as const,
        overflowX: "hidden" as const,
        textAlign: "center" as const,
        position: "fixed" as const,
        top: "0",
        bottom: "0",
        left: "0",
        right: "0",
        padding: "50px 0",
        backgroundColor: "rgb(0 0 0 / 76%)",
        "&:after": {
            width: 0,
            height: "100%",
            content: "\"\"",
            display: "inline-block",
            verticalAlign: "middle"
        }
    },
    contentBlock: {
        position: "relative" as const,
        display: "inline-block",
        verticalAlign: "middle"
    },
    closeButton: {
        position: "absolute" as const,
        right: 0,
        top: "-40px",
        height: 35,
        width: 35
    }
}