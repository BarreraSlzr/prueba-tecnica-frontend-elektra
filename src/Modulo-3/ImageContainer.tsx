import * as React from 'react';
import NavTab from '../components/NavTab';
import Tab from '../components/NavTab/Tab';
import { useFetchedData } from '../contexts/FetchedData';
import Carrousel from '../components/Carrousel';

export interface IImageContanerProps {
}

export default function ImageContainer(props: IImageContanerProps) {
    const data = useFetchedData();
    const attachments = new Map(
        data.record.attachments.map(attachment => [`#${attachment.type}`, attachment])
    )
    function getPosibleHash(currentType: string = data.record.attachments.at(0)?.type || '') {
        const newHash = decodeURI(window.location.hash);
        if (attachments.has(newHash)) {
            return newHash
        }
        return '#' + currentType;
    };
    const [activeContainer, setActiveContainer] = React.useState(attachments.get(getPosibleHash()));

    React.useEffect(() => {
        function hashChange() {
            setActiveContainer(attachments.get(getPosibleHash(activeContainer?.type)))
        }
        window.addEventListener('hashchange', hashChange);
        return () => {
            window.removeEventListener('hashchange', hashChange);
        }
    });


    return (
        <div className='grow'>
            <NavTab>
                {data.record.attachments.map(({ type }) =>
                    <Tab key={type}
                        isActived={type === activeContainer?.type}
                        href={`#${type}`}
                    >{type}</Tab>
                )}
            </NavTab>
            <Carrousel>
                {activeContainer?.data
                    .map(({ src }, index) =>
                        <img key={src+`${index}`} src={src} alt={`${activeContainer?.type}-${index}`} />
                    )}
            </Carrousel>
        </div>

    );
}
