export default function Logo({ size = 28 }) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden>
            <rect x="2" y="2" width="20" height="20" rx="6" fill="url(#g)" />
            <defs>
                <linearGradient id="g" x1="0" x2="1">
                    <stop offset="0" stopColor="#7c4dff" />
                    <stop offset="1" stopColor="#00e5ff" />
                </linearGradient>
            </defs>
            <path
                d="M7 12h10M7 8h10M7 16h6"
                stroke="#fff"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}
