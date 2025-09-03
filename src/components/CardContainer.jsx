import { useState } from 'react';
import data from '../../data.json';
import { Card } from './Card';


export function CardContainer({ filter }) {
    const [extensions, setExtensions] = useState(data);

    const filterMap = {
        Active: ext => ext.isActive,
        Inactive: ext => !ext.isActive,
        All: () => true,
    };

    const filterFn = filterMap[filter] || filterMap.All;
    const filteredExtensions = extensions.filter(filterFn);

    const toggleExtension = name => {
        setExtensions(prev =>
            prev.map(ext =>
                ext.name === name ? { ...ext, isActive: !ext.isActive } : ext
            )
        );
    };

    const removeExtension = name => {
        setExtensions(prev => prev.filter(ext => ext.name !== name));
    };

    return (
        <div className='grid md:grid-cols-2 xl:grid-cols-3 gap-3'>
            {
                filteredExtensions.map(extension => (
                    <Card
                        key={extension.id}
                        {...extension}
                        onToggle={() => toggleExtension(extension.name)}
                        onRemove={() => removeExtension(extension.name)}
                    />
                ))
            }
        </div>
    )
}