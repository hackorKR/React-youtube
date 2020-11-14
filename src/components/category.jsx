import React, { Component } from 'react';

class Category extends Component {
    selectCategoryId = e => {
        e.preventDefault();
        console.log(`Category + ${e.target.value}`); //will give you the value continue
        e.target.value && this.props.onCategoryId(e.target.value);
        this.props.onVideoId('');
    }

    render() {
        return(
            <div className="category_buttons">
                <button className="category_button" value='0' onClick={this.selectCategoryId}>mostPopular</button>
                <button className="category_button" value='1' onClick={this.selectCategoryId}>Film & Animation</button>
                <button className="category_button" value='2' onClick={this.selectCategoryId}>Autos & Vehicles</button>
                <button className="category_button" value='10' onClick={this.selectCategoryId}>Music</button>
                <button className="category_button" value='15' onClick={this.selectCategoryId}>Pets & Animals</button>
                <button className="category_button" value='17' onClick={this.selectCategoryId}>Sports</button>
                <button className="category_button" value='20' onClick={this.selectCategoryId}>Gaming</button>
                <button className="category_button" value='23' onClick={this.selectCategoryId}>Comedy</button>
                <button className="category_button" value='24' onClick={this.selectCategoryId}>Entertainment</button>
                <button className="category_button" value='26' onClick={this.selectCategoryId}>Howto & Style</button>
                <button className="category_button" value='28' onClick={this.selectCategoryId}>Science & Technology</button>
            </div>
        );
    }
}

export default Category;