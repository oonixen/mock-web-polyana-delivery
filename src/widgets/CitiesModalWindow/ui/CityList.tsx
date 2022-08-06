import {ICityList} from "../interfaces/ui";
import {Button} from "@mui/material";
import {styles} from "../styles/cityList";
import {css} from "@emotion/react";
import React, {useState} from "react";
import {onClickCityButton} from "../model/functions";
import {Address} from "../../../../api";
import {useSetCities} from "../model/hooks";
import Skeleton from "./Skeleton";

const CityList: React.FC<ICityList> = ({
    cityDispatch,
    dispatchCityModalWindow,
    dispatchDeliveryAddressModalWindow,
    dispatchDeliveryAddress,
    dispatchInformModalWindow,
}) => {

    const [cities, setCities] = useState<Address[]|null>(null)

    useSetCities(setCities, dispatchInformModalWindow)

    if (!cities) return <Skeleton/>

    return (
        <>
            {
                cities.map(city => (
                    <li
                        key={city.cityFiasId}
                        css={css(styles.li)}
                    >
                        <Button
                            variant={"contained"}
                            onClick={() =>
                                onClickCityButton(
                                    city,
                                    cityDispatch,
                                    dispatchCityModalWindow,
                                    dispatchDeliveryAddressModalWindow,
                                    dispatchDeliveryAddress
                                )
                            }
                            css={css(styles.button)}
                        >
                            {city.name}
                        </Button>
                    </li>
                ))
            }
        </>
    )
}

export default CityList