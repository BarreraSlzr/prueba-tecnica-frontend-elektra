import React from 'react';
import NavGroup from '../components/NavGroup';
import { ExternalLink } from 'lucide-react';

export interface IExternalLinksProps {
}

export default function ExternalLinks(props: IExternalLinksProps) {
    const links: JSX.IntrinsicElements['a'][] = [
        {
            href: 'https://listanominal.ine.mx/scpln/',
            title: 'INE',
            children: <>INE<ExternalLink size={12}/></>
        },
        {
            href: 'https://www.gob.mx/curp/',
            title: 'CURP',
            children: <>CURP<ExternalLink size={12}/></>
        },
        {
            href: 'https://www.correosdemexico.gob.mx/SSLServicios/ConsultaCP/Descarga.aspx',
            title: 'SEPOMEX',
            children: <>SEPOMEX<ExternalLink size={12}/></>
        },
        {
            href: '#otros',
            title: 'Otros'
        }
    ]
    return (
        <div>
            <b>Links externos de consulta</b>
            <NavGroup links={links}/>
        </div>
    );
}
