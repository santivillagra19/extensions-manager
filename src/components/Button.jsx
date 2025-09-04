
export function Button({ children, textSmall, onClick, isSelected }) {
    return (
        <button onClick={onClick} className={`border border-[--neutral-300] px-5 py-2 rounded-full 
        hover:bg-[--neutral-600] cursor-pointer transition-colors hover:text-[--neutral-0]
        dark:text-[--neutral-0] dark:bg-[--neutral-800] dark:hover:bg-[--red-700] 
        dark:hover:text-[--neutral-0] text-[1.25rem] 
        ${textSmall ? 'text-base' : 'text-[1.25rem] '} 
        ${isSelected ? 'bg-[--neutral-300]' : 'bg-transparent'}
        ${isSelected ? 'dark:bg-[--red-500]' : 'dark:bg-[--neutral-800]'} `}>
            {children}
        </button>
    )
}