import {AutocompleteRenderInputParams, CircularProgress, TextField} from "@mui/material";
import React from "react";

interface IRenderInput {
    params: AutocompleteRenderInputParams,
    isLoadingSuggestions: boolean
}

const RenderInput: React.FC<IRenderInput> = ({
    params,
    isLoadingSuggestions
}) => (
    <TextField
        {...params}
        InputProps={{
            ...params.InputProps,
            endAdornment: (
                <>
                    {
                        isLoadingSuggestions ? <CircularProgress color={"inherit"} size={20} /> : null
                    }
                    {
                        params.InputProps.endAdornment
                    }
                </>
            )
        }}
    />
)

export default RenderInput