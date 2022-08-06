import {Autocomplete, createFilterOptions, TextField} from "@mui/material";
import React, {useMemo, useState} from "react";
import {Loup} from "../../../shared/Icons";
import {css} from "@emotion/react";
import {styles} from "../styles/headerDishSearchInput";
import {css as cssCss} from "@emotion/css"
import {IHeaderDishSearchInput} from "../interfaces/ui";
import {ProductDetail} from "../../../../api";
import {useRouter} from "next/router";
import {addQueryParameter} from "../../../processes/Navigation";
import {navigation} from "../constants/navigation";

const HeaderDishSearchInput: React.FC<IHeaderDishSearchInput> = ({data}) => {

    const router = useRouter()
    const [isOpen, setIsOpen] = useState(false)
    const dishes:Array<ProductDetail> = useMemo(() => {
        const dishesArr: Array<ProductDetail> = []
        data.categories.forEach(category => category.products.forEach(product => dishesArr.push(product)))
        return dishesArr
    }, [])

    return (
        <div
            css={css(styles.container)}
        >
            <Autocomplete
                classes={{option: cssCss(styles.option)}}
                css={css(styles.autocomplete)}
                open={isOpen}
                onOpen={() => setIsOpen(true)}
                onClose={() => setIsOpen(false)}
                onChange={(event, value) => {
                    if (value) router.push(addQueryParameter(
                        String(window.location),
                        navigation.dishModalWindowQueryParam,
                        value.id
                    ))
                }}
                options={dishes}
                // @ts-ignore
                filterOptions={(options, state) => createFilterOptions()(options, state).slice(0, 10)}
                getOptionLabel={(value) => value.name}
                popupIcon={<Loup/>}
                renderInput={params => (
                    <TextField
                        {...params}
                        InputProps={{...params.InputProps, endAdornment: (<>{params.InputProps.endAdornment}</>)}}
                    />
                )}
            />
        </div>
    )
}

export default HeaderDishSearchInput