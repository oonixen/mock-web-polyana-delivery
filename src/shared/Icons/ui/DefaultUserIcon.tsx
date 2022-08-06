const DefaultUserIcon = (props: any) => (
    <svg
        width={"100%"}
        height={"100%"}
        viewBox={"0 0 64 64"}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <circle cx={32} cy={32} r={28} fill="#90BD3A" />
        <circle cx={32} cy={32} r={31} stroke="#3AAA35" strokeWidth={2} />
        <path
            d="M13.632 25c-.266 0-.388.326-.225.544l2.47 2.826h15.275v3.717H19.125l2.94 3.348h9.087v3.717h-5.84l2.92 3.348h5.023c1.164 0 2.124-1.022 2.124-2.26V29.064h5.207V40.24c0 1.24.96 2.261 2.124 2.261 1.163 0 2.123-1.022 2.123-2.26V25H13.632Z"
            fill="#fff"
        />
    </svg>
)

export default DefaultUserIcon