const Percent = (props: any) => (
    <svg
        width={"100%"}
        height={"100%"}
        viewBox="0 0 24 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <circle
            cx={18.268}
            cy={19.267}
            r={3.732}
            stroke="#90BD3A"
            strokeWidth={3}
        />
        <circle cx={5.732} cy={5.732} r={3.732} stroke="#90BD3A" strokeWidth={3} />
        <path stroke="#90BD3A" strokeWidth={3} d="M5.112 22.1 17.326 5.814" />
    </svg>
)

export default Percent