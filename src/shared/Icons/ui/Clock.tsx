export const Clock = (props: any) => (
    <svg
        width="100%"
        height="100%"
        viewBox="0 0 21 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <circle cx={10.5} cy={10.5} r={10.5} fill="#90BD3A" />
        <path
            d="M10.08 5.04v6.72h5.04"
            stroke="#fff"
            strokeWidth={3}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
)