import React, {useContext} from "react";

export function returnContext (userContext: React.Context<unknown>) {
    return(): any => {
        const context = useContext<any>(userContext)
        if (!context)
            throw new Error("Main must be within ContextProvider")
        return context
    }
}