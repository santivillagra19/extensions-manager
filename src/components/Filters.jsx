import { Button } from "./Button"

export function Filters({ filter, setFilter }) {

    const handleFilterClick = (event) => {
        setFilter(event.target.textContent)
    }

    return (
        <div className="mb-6 md:flex md:items-center md:justify-between md:mb-10">
            <h2 className="dark:text-[--neutral-0] text-center text-[2.125rem] font-bold 
            mb-6 md:mb-0">Extensions List</h2>

            <div className="flex place-content-between mb-2 md:gap-3 md:mb-0">
                <Button isSelected={filter === 'All'} onClick={handleFilterClick}>All</Button>
                <Button isSelected={filter === 'Active'} onClick={handleFilterClick}>Active</Button>
                <Button isSelected={filter === 'Inactive'} onClick={handleFilterClick}>Inactive</Button>
            </div>
        </div>
    )
}