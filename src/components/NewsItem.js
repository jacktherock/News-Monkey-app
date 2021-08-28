import React, { Component } from 'react'

export class NewsItem extends Component {



    render() {
        let { title, description, imageUrl, newsUrl, author, date, source } = this.props;

        return (
            <div className="my-3">
                <div className="card">
                    <div style={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                        position: 'absolute',
                        right: 0
                    }}>
                        <span className="badge rounded-pill bg-danger">
                            {source}
                        </span>
                    </div>

                    <img src={!imageUrl ? "https://c.ndtvimg.com/2021-08/uflv8vc_tech_640x480_27_August_21.jpg" : imageUrl} className="card-img-top" alt="..." />

                    <div className="card-body">

                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">{description}...</p>
                        <p className="card-text"><small className="text-muted">By <strong>{!author ? "Unknown" : author}</strong> on <strong>{new Date(date).toGMTString()}</strong></small></p>

                        <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read more...</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
