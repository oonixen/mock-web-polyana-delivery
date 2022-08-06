import {css} from "@emotion/react";
import {styles} from "../styles/form";
import Input from "./Input";
import {types, useReturnUserFormReducer} from "../model/useReturnUserFormReducer";
import {LoadingButton} from "@mui/lab";
import {patchUser} from "../api/patchUser";
import {stylesMuiButtonText} from "../../../../styles/modules/stylesMuiButtonText";
import {Button} from "@mui/material";
import React, {useEffect, useState} from "react";
import {useInformModalWindowContext} from "../../../processes/Context";
import {checkIsChangedUserForm, returnReducerStateFromUserObj} from "../model/functions";
import {IForm} from "../interfaces/ui";
import {logOut} from "../model/functions";
import {useRouter} from "next/router";

export const Form: React.FC<IForm> = ({user, dispatchUser}) => {

    const router = useRouter()
    const [isChangedForm, setIsChangedForm] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [, dispatchInformModalWindow] = useInformModalWindowContext()
    const [state, dispatch] = useReturnUserFormReducer(returnReducerStateFromUserObj(user))

    useEffect(() => {
        setIsChangedForm(checkIsChangedUserForm(state, user))
    }, [state])

    useEffect(() => {
        dispatch({type: types.change, payload: returnReducerStateFromUserObj(user)})
    }, [user])

    return (
        <form
            css={css(styles.bottomForm)}
            onSubmit={event => {
                event.preventDefault()
                patchUser(
                    state,
                    dispatchUser,
                    setIsLoading,
                    dispatchInformModalWindow
                )
            }}
        >
            <Input
                type={"text"}
                value={state.firstName}
                title={"Имя"}
                onChange={firstName => dispatch({type: types.changeFirstName, payload: {...state, firstName}})}
            />
            <Input
                type={"text"}
                value={state.secondName}
                title={"Фамилия"}
                onChange={secondName => dispatch({type: types.changeSecondName, payload: {...state, secondName}})}
            />
            <Input
                type={"date"}
                value={state.birthday}
                title={"Дата рождения"}
                onChange={birthday => dispatch({type: types.changeBirthday, payload: {...state, birthday}})}
            />
            <Input
                type={"tel"}
                value={user.phoneNumber}
                title={"Номер телефона"}
                disabled={true}
            />
            <Input
                type={"email"}
                value={state.email}
                title={"Почта"}
                subtitle={"на неё вам придёт электронный чек"}
                onChange={email => dispatch({type: types.changeEmail, payload: {...state, email}})}
            />
            <div
                css={styles.buttonsBlock}
            >
                {
                    isChangedForm &&
                    <LoadingButton
                        css={css(styles.submitButton)}
                        type={"submit"}
                        loading={isLoading}
                    >
                        <span
                            css={css(stylesMuiButtonText.text)}
                        >
                            Сохранить
                        </span>
                    </LoadingButton>
                }
                <Button
                    color={"secondary"}
                    onClick={() => logOut(dispatchUser, router)}
                >
                    <span
                        css={css(stylesMuiButtonText.text)}
                    >
                        Выйти
                    </span>
                </Button>
            </div>
        </form>
    )
}

export default Form