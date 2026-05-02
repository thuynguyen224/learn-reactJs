import React from 'react';
import PropTypes from 'prop-types';
import Album from '../Album';
import './styles.scss';

AlbumList.propTypes = {
    albumbList: PropTypes.array.isRequired,
};

function AlbumList({ albumbList }) {
    return (
        <ul className="album-list">
            {albumbList.map((album) => (
                <li key={album.id}>
                    <Album album={album} />
                </li>
            ))}
        </ul>
    );
}

export default AlbumList;