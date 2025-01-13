import { FiUpload, FiSearch, FiPieChart, FiLock, FiSettings, FiMousePointer } from 'react-icons/fi';

export default function Feature({title, content}: {title: string, content: string}) {
    const iconSize = 34;

    const icons: { [key: string]: JSX.Element } = {
        Upload: <FiUpload size={iconSize} />,
        Search: <FiSearch size={iconSize} />,
        Visualization: <FiPieChart size={iconSize} />,
        Authentication: <FiLock size={iconSize} />,
        Management: <FiSettings size={iconSize} />,
        Interactivity: <FiMousePointer size={iconSize} />,
    };

    const icon = icons[title] || null;

    return (
        <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
            <div className="flex justify-center items-center w-16 h-16 p-1 -mt-1 mb-2 bg-blue-600 rounded-full text-white">
                {icon}
            </div>
            <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">{title}</h4>
            <p className="text-gray-600 text-center">{content}</p>
        </div>
    )

}