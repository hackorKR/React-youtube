import React, { Component } from 'react';
import './app.css';
import axios from 'axios';
import Navbar from './components/navbar';
import Category from './components/category';
import Videos_view from './components/videos_view';

class App extends Component {
  state = {
      id: 0,
      loading: false,
      VideoList: [],
      videoId: '',
  };

  loadVideo = (id) => {
        var config = {
            method: 'get',
            url: `https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=30&regionCode=kr&videoCategoryId=${id}&key=AIzaSyDbXY7ybGSsIilBseEw-D_Vlw-AfrPTIi8`,
            headers: { }
        };
      
      axios(config)
      .then((response) => {
        let video_detail = [];
        response.data.items.map(item => {
          video_detail.push(item);
        })
          this.setState({
              loading: true,
              VideoList: video_detail
          });
      })
      .catch((error) => {
          console.log(error);
          this.setState({
              loadVideo: false
          });
      });
  }

  componentDidMount() {
      this.loadVideo(0);// loadVideo 호출
  }

  handleCategoryId = new_id => {
    console.log(`app + ${new_id}`);
    this.loadVideo(new_id);
    this.setState({id: new_id});
  }
  handleVideoId = videoId => {
    this.setState({videoId: videoId});
  }

  loadVideo_search = search => {
    var config = {
        method: 'get',
        url: `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&q=${search}&key=AIzaSyDbXY7ybGSsIilBseEw-D_Vlw-AfrPTIi8`,
        headers: { }
    };
    axios(config)
      .then((response) => {
        let video_detail = [];
        response.data.items.map(item => {
          video_detail.push(item);
        })
          this.setState({
              loading: true,
              VideoList: video_detail
          });
      })
      .catch((error) => {
          console.log(error);
          this.setState({
              loadVideo: false
          });
      });
  }

  handleSearch = search => {
    this.loadVideo_search(search);
    this.setState();
  }

  render() {
      const { VideoList } = this.state;
      return (
          <div>
            <Navbar onSearch={this.handleSearch} onVideoId={this.handleVideoId} videoId={this.state.videoId}/>
            <Category onCategoryId={this.handleCategoryId}  onVideoId={this.handleVideoId} videoId={this.state.videoId}/>
            <Videos_view Video_data={VideoList} onVideoId={this.handleVideoId} videoId={this.state.videoId}/>
          </div>
      );
  }
}

export default App;
