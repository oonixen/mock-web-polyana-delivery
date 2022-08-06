export const styles = {
    swiper: {
        height: "200px",
        ".swiper-button-prev": {
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='64' height='64' viewBox='0 0 64 64' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle r='31.1899' transform='matrix(-1 0 0 1 32 32)' fill='white' stroke='%23060606' stroke-width='1.62025'/%3E%3Cpath d='M36.4558 18.6328L23.4938 31.5948L36.4558 44.5569' stroke='%23060606' stroke-width='6.48101' stroke-linecap='round'/%3E%3C/svg%3E ") !important`
        },
        ".swiper-button-next": {
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='64' height='64' viewBox='0 0 64 64' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='32' cy='32' r='31.1899' fill='white' stroke='%23060606' stroke-width='1.62025'/%3E%3Cpath d='M27.5442 18.6328L40.5062 31.5948L27.5442 44.5569' stroke='%23060606' stroke-width='6.48101' stroke-linecap='round'/%3E%3C/svg%3E%0A") !important`,
        },
        ".swiper-button-prev, .swiper-button-next": {
            backgroundRepeat: "no-repeat",
            backgroundSize: "100% auto",
            backgroundPosition: "center",
            "&:hover": {
                cursor: "default"
            }
        },
        ".swiper-button-next::after, .swiper-button-prev::after": {
            display: "none"
        }
    }
}