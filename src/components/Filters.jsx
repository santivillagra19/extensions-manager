import { Button } from "./Button"

export function Filters() {
    return (
        <div className="mb-6 md:flex md:items-center md:justify-between md:mb-10">
            <h2 className="dark:text-[--neutral-0] text-center text-[2.125rem] font-bold 
            mb-6 md:mb-0">Extensions List</h2>

            <div className="flex place-content-between mb-2 md:gap-3 md:mb-0">
                <Button>All</Button>
                <Button>Active</Button>
                <Button>Inactive</Button>
            </div>
        </div>
    )
}