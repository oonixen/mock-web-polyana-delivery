import React, {useMemo, useState} from "react";
import {Autocomplete} from "@mui/material";
import {styles} from "../styles/input";
import {IInput} from "../interfaces/ui";
import {Address} from "../../../../api";
import {LoadingButton} from "@mui/lab";
import {onClickSubmit, onInputSuggestion} from "../model/functions";
import {css as cssReact} from "@emotion/react";
import {css} from "@emotion/css"
import RenderInput from "./RenderInput";

const Input: React.FC<IInput> = ({
    dispatchInformModalWindow,
    dispatchAddress,
    city,
    currentAddress,
    setCurrentAddress,
    isLoading,
    dispatchDeliveryAddressModalWindow
}) => {

    const [isOpen, setIsOpen] = useState(false)
    const [suggestions, setSuggestions] = useState<Array<Address>>([])
    const [isLoadingSuggestions, setIsLoadingSuggestions] = useState(false)
    const makeSuggestionRequest = useMemo(() => onInputSuggestion(), [])

    return (
        <div
            css={cssReact(styles.block)}
        >
            <Autocomplete
                css={cssReact(styles.inputContainer)}
                classes={{
                    option: css(styles.option)
                }}
                value={currentAddress}
                loading={isLoadingSuggestions}
                open={isOpen}
                onOpen={() => setIsOpen(true)}
                onClose={() => setIsOpen(false)}
                isOptionEqualToValue={(option: Address, value: Address) => option.name === value.name}
                getOptionLabel={(address: Address) => address.name}
                filterOptions={options => options}
                options={suggestions}
                loadingText={"Загрузка..."}
                noOptionsText={"Введите текст и выберите адрес"}
                onChange={(event, value) => setCurrentAddress(value)}
                onInputChange={(event, value) => {

                    if (!value) return

                    makeSuggestionRequest({
                        address: value,
                        cityFiasId: city.cityFiasId,
                        dispatchInformModalWindow: dispatchInformModalWindow,
                        setSuggestions: setSuggestions,
                        setIsLoadingSuggestions: setIsLoadingSuggestions
                    })
                }}
                renderInput={(params) =>
                    <RenderInput params={params} isLoadingSuggestions={isLoadingSuggestions}/>
                }
            />
            <LoadingButton
                variant={"contained"}
                css={cssReact(styles.button)}
                loading={(isLoading)}
                onClick={() => onClickSubmit({
                    dispatchAddress:dispatchAddress,
                    currentAddress: currentAddress,
                    dispatchInformModalWindow: dispatchInformModalWindow,
                    dispatchDeliveryAddressModalWindow: dispatchDeliveryAddressModalWindow
                })}
            >
                ОК
            </LoadingButton>
        </div>
    )
}

export default Input