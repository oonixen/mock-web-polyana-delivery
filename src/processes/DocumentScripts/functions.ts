export const addScript = (link: string, launchFunc: () => any | undefined = () => null) => {

    const script = document.createElement("script")

    script.src = link
    script.async = true
    script.addEventListener("load", launchFunc)

    document.head.appendChild(script)
}

export function isScriptLoaded (url: string) {
    const scripts = document.getElementsByTagName("script")
    for (let i = 0; i < scripts.length; i++)
        if (scripts[i].src === url) return true
    return false
}