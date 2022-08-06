import {
    InformModalWindowContextProvider, CityContextProvider,
    DeliveryAddressContextProvider, CityModalWindowContextProvider,
    DeliveryAddressModalWindowContextProvider, MapContextProvider,
    BasketContextProvider, UserContextProvider, OrderContextProvider
} from '../../processes/Context'

export function ContextProvider ({children = <></>}) {
    return (
        <InformModalWindowContextProvider>
            <CityContextProvider>
                <CityModalWindowContextProvider>
                    <DeliveryAddressContextProvider>
                        <DeliveryAddressModalWindowContextProvider>
                            <MapContextProvider>
                                <UserContextProvider>
                                    <OrderContextProvider>
                                        <BasketContextProvider>
                                            {children}
                                        </BasketContextProvider>
                                    </OrderContextProvider>
                                </UserContextProvider>
                            </MapContextProvider>
                        </DeliveryAddressModalWindowContextProvider>
                    </DeliveryAddressContextProvider>
                </CityModalWindowContextProvider>
            </CityContextProvider>
        </InformModalWindowContextProvider>
    )
}

export default ContextProvider