import React, { PureComponent } from 'react';

class Video extends PureComponent {

    toVideoDeatil = () => {
        this.props.onVideoDetail(this.props.videodata);
    }

    render() {
        const { videodata } = this.props;
        let title = videodata.snippet.title;
        const thumbnail = videodata.snippet.thumbnails.medium.url;
        const publishedAt = videodata.snippet.publishedAt;

        let title_char = title.split('');
        if(title_char.length > 20){
            title = title.slice(0, 50) + '...';
        }

        return (
            <ul className="video_box" onClick={this.toVideoDeatil}>
                <img src={thumbnail} className="video_thumbnail" alt=""/>
                <div className="video_details">
                    <span className="video_title">{title}</span>
                    <span className="video_publishedAt">{publishedAt}</span>
                </div>
            </ul> 
        );
    }
}

export default Video;