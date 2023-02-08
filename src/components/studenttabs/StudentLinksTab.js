import React from 'react';
import StudentLinks from './StudentLinks';

export default function StudentLinksTab(props) {
    const links = props.links;
    return (
        <div className={props.toggleState !== 5 ? "unactive_content" : "block"}>
            {links && links.length !== 0 && links.map((aa) => 
                <StudentLinks
                    key={aa.id}
                    id={aa.id}
                    link={aa.link}
                    link_description={aa.link_description}
                />
            )}
        </div>
    )
}
