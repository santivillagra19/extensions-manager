import { Button } from './Button';
import { Toggle } from 'rsuite';
import 'rsuite/Toggle/styles/index.css';

export function Card({ logo, name, description, isActive, onToggle, onRemove }) {

    return (
        <div className="bg-[--neutral-0] dark:bg-[--neutral-800] p-4 rounded-lg dark:text-[--neutral-0]
                    shadow-sm dark:outline outline-2 outline-[--neutral-600]">

            <div className='flex gap-4 items-start mb-10'>
                <img src={logo} alt={name} />
                <div>
                    <h2 className='text-[1.25rem] font-bold mb-2'>{name}</h2>
                    <p className='text-[--neutral-600] text-[15px] dark:text-[--neutral-300]'>
                        {description}
                    </p>
                </div>
            </div>

            <div className='flex items-center justify-between'>
                <Button textSmall onClick={onRemove}>Remove</Button>
                <Toggle onClick={onToggle} checked={isActive} color='red' />
            </div>
        </div>
    );
}
