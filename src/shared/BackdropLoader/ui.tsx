import {Backdrop, CircularProgress} from "@mui/material";
import React from "react";
import {IBackdropLoader} from "./interface";

const BackdropLoader: React.FC<IBackdropLoader> = ({isShow}) => (
    <Backdrop
        open={isShow}
        sx={{zIndex: 10000}}
    >
        <CircularProgress/>
    </Backdrop>
)

export default BackdropLoader