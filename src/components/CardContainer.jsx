import data from '../../data.json';
import { Card } from './Card';


export function CardContainer() {
    return (
        <div className='grid md:grid-cols-2 xl:grid-cols-3 gap-3'>
            {
                data.map(extension => (
                    <Card
                        key={extension.id}
                        {...extension}
                    />
                ))
            }
        </div>
    )
}