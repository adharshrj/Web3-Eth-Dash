import {createGlobalState} from "react-hooks-global-state";

const {setGlobalState, useGlobalState} = createGlobalState({
    WalletId: "",
    Signature: "",
    token: "",
    ens: ""
})

export const setWalletId = (WalletId) => {
    setGlobalState("WalletId", WalletId)
}

export const setSignature = (signature) => {
    setGlobalState("Signature", signature);
}

export const setToken = (token) => {
    setGlobalState("token", token)
}

export const setEns = (ens) => {
    setGlobalState("ens", ens)
}

export {useGlobalState};