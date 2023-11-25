const theme = {
    font: {
        serif: "DOSIyagiMedium",
        sans: "DOSGothic",
        size: {
            lg: "20pt",
            default: "16pt",
            sm: "12pt",
            xs: "8pt",
        }
    },
    color: {
        grayscale: {
            0: "#FFFFFF",
            200: "#9C9C9C",
            400: "#6C6C6C",
            600: "#3C3C3C",
            900: "#000000"
        },
        shadows: {
            250: "rgba(0, 0, 0, 0.25)",
            500: "rgba(0, 0, 0, 0.5)",
        },

    },
    input: {
        modal: {
            width: "100%",
            height: "50px",
            borderRadius: "15px",
            labelWidth: "78px",
        },

    },
    modal: {
        minSize: {
            sm: {
                width: "292px",
                height: "170px"
            },
            md: {
                width: "340px",
                height: "308px"
            },
            lg: {
                width: "340px",
                height: "405px"
            }
        },
        padding: {
            sm: "16px",
            md: "24px",
            lg: "32px"
        },
        gap: {
            sm: "14px",
            md: "20px",
            lg: "34px"
        },
        radius: "10px",
    },
    button: {
        width: {
            xl: "330px",
            lg: "292px",
            sm: "150px",
            xs: "100px"
        },
        height: "50px",
        gap: {
            modal: "10px"
        }
    }
}


export default theme