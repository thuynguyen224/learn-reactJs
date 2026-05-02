import React from 'react';
import AlbumList from './components/AlbumList';

AlbumFeature.propTypes = {

};

function AlbumFeature(props) {
    const albumList = [
        {
            id: 1,
            name: "Nhạc Trẻ",
            thumbnailUrl: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/9/5/d/2/95d2e4a687bd9f1c12d6c5fbc7f239a2.jpg",
        },
        {
            id: 2,
            name: "Nhạc Trữ Tình",
            thumbnailUrl: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/0/d/3/7/0d3757e78db6a3c3f50c82762afb778e.jpg",
        },
        {
            id: 3,
            name: "Nhạc Au Mỹ",
            thumbnailUrl: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/4/a/1/6/4a167556eddb73b296d9151a9e3c2b9a.jpg",
        },
    ];
    return (
        <div>
            <h2>Có thể bạn sẽ thích đấy</h2>
            <AlbumList albumbList={albumList} />
        </div>
    );
}

export default AlbumFeature;