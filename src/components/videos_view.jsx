import React, { PureComponent } from 'react';
import Video from './video';
import axios from 'axios';

class Videos_view extends PureComponent {
    state = {
        videoData: '',
        videoHtml: '',
    }


    toVideoDeatil = item => {
        console.log(typeof item.id);
        if(typeof item.id !== 'string'){
            console.log(item.id.videoId);
            this.setState({videoData: item.snippet});
            this.props.onVideoId(item.id.videoId);
        } else {
            console.log(item.id);
            this.setState({videoData: item.snippet});
            this.props.onVideoId(item.id);
        }
    }

    loadVideo = (videoId) => {
        var config = {
            method: 'get',
            url: `https://www.googleapis.com/youtube/v3/videos?part=player&id=${videoId}&key=AIzaSyDbXY7ybGSsIilBseEw-D_Vlw-AfrPTIi8`,
            headers: { }
        };

        axios(config)
        .then((response) => {
            const items = response.data.items;
            let videoHtml = items[0].player.embedHtml;
            const videohtml = videoHtml.replace('480', '720').replace('270', '405'); 
            this.setState({
                videoHtml: videohtml
            });
        })
        .catch((error) => {
            console.log(error);
        });
    }

    render() {
        const { Video_data } = this.props;
        let videos_view_css_basic = "videos_view";
        let videos_view_css = "videos_view_no"
        let videos = Video_data && Video_data.map((videodata) => {
            return (
                <Video
                    videodata={videodata}
                    onVideoDetail={this.toVideoDeatil}
                />
            );
        })

        if(this.props.videoId !== ''){
            this.loadVideo(this.props.videoId);
            const videohtml = this.state.videoHtml;
            const videoRef = React.createRef();
            console.log(videohtml);
            return (
                <div className={videos_view_css}>
                    <div className="video_player" ref={videoRef}>
                        <div dangerouslySetInnerHTML={ {__html: videohtml} }></div>
                        <h3>{this.state.videoData.title}</h3>
                        <p>{this.state.videoData.publishedAt}</p>
                        <p>{this.state.videoData.description}</p>
                    </div>
                    <div className="video_list">
                        {videos}
                    </div>
                </div>
            );
        } else {
            return (
                <div className={videos_view_css_basic}>
                    {videos}
                </div>
            );
        }
    }
}

export default Videos_view;