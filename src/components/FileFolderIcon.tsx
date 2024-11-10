import React, { useRef } from 'react'

interface FileFolderIconProps {
    title: string,
    iconPath: string,
    path: string,
}

const FileFolderIcon = (props: FileFolderIconProps) => {
    const iconRef = useRef<HTMLDivElement | null>(null);
    window.addEventListener("click", (e: MouseEvent) => {
        if (iconRef.current && !e.composedPath().includes(iconRef.current)) setFocused(false)
    })

    const [focused, setFocused] = React.useState(false)
    function handleOnClick(): void {
        if (focused == true) {
            window.location.href = props.path;
        }
        setFocused(true);
    }

    return (
        <div ref={iconRef} className={`flex flex-col items-center w-[45px] h-[45px] ${focused == true  && "invert"}`} onClick={handleOnClick}>
            <img src={`/images/${props.iconPath}`} className='w-[45px] mb-[1px] h-[45px] ' />
            <h1 className='text-sm bg-white text-[#222] text-center px-2 whitespace-nowrap'>{props.title}</h1>
        </div>
    )
}

export default FileFolderIcon