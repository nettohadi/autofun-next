import React from 'react';

type Props = {};

const Menu: React.FC = (props: Props) => {
    return (
        <div className="h-full w-auto float-right inline">
            <ul className="h-full inline-flex gap-3">
                <li className="text-lg leading-10">Beranda</li>
                <li className="text-lg leading-10">Berita</li>
                <li className="text-lg leading-10">Mobil</li>
            </ul>
        </div>
    );
};

export default Menu;