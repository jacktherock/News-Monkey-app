import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinnner from './Spinnner';
import PropTypes from 'prop-types'


export class News extends Component {

    // articles is a array used to add news articles in one components then we can pass articles using 'this.articles' 
    articles = [
        //     {
        //         "source": {
        //             "id": "the-washington-post",
        //             "name": "The Washington Post"
        //         },
        //         "author": "Rachel Pannett",
        //         "title": "Taliban spokesman says 'no proof' bin Laden was responsible for 9/11 attacks - The Washington Post",
        //         "description": "When it was last in power, the Taliban provided a safe harbor in Afghanistan for bin Laden.",
        //         "url": "https://www.washingtonpost.com/world/2021/08/26/taliban-bin-laden/",
        //         "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/NZKKN7QE74I6ZM6EYRRLD3OPZA.jpg&w=1440",
        //         "publishedAt": "2021-08-26T14:29:20Z",
        //         "content": "Zabihullah Mujahid made the remark after the Islamist militant group pledged not to allow Afghanistan to be used once again as a base for al-Qaeda.\r\nWhen Osama bin Laden became an issue for the Ameri… [+1677 chars]"
        //     },
        //     {
        //         "source": {
        //             "id": "cnn",
        //             "name": "CNN"
        //         },
        //         "author": "Barbara Starr, Kylie Atwood and Ivana Kottasová, CNN",
        //         "title": "Blast reported outside Hamid Karzai International Airport in Kabul - CNN",
        //         "description": "An explosion took place outside the Kabul airport on Thursday as the United States and other countries try to evacuate their citizens and Afghans at risk from the Taliban.",
        //         "url": "https://www.cnn.com/2021/08/26/asia/afghanistan-kabul-airport-blast-intl/index.html",
        //         "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/210826103803-kabul-airport-map-super-tease.jpg",
        //         "publishedAt": "2021-08-26T14:21:00Z",
        //         "content": "(CNN)An explosion took place outside the Kabul airport on Thursday as the United States and other countries try to evacuate their citizens and Afghans at risk from the Taliban.\r\nThree US officials an… [+2792 chars]"
        //     },
        //     {
        //         "source": {
        //             "id": null,
        //             "name": "Investor's Business Daily"
        //         },
        //         "author": "Investor's Business Daily",
        //         "title": "Dow Jones Rallies Ahead Of Jackson Hole Summit; Salesforce Jumps On Earnings - Investor's Business Daily",
        //         "description": "The Dow Jones Industrial Average rallied 90 points Thursday ahead of a Fed summit, as jobless claims missed estimates. Salesforce surged.",
        //         "url": "https://www.investors.com/market-trend/stock-market-today/dow-jones-futures-rise-ahead-of-jackson-hole-economic-data-salesforce-jumps-on-earnings/",
        //         "urlToImage": "https://www.investors.com/wp-content/uploads/2019/10/stock-Federal-Reserve-fall-12-shutter.jpg",
        //         "publishedAt": "2021-08-26T14:00:00Z",
        //         "content": "The Dow Jones Industrial Average rallied 90 points Thursday, as jobless claims missed estimates ahead of the Federal Reserve's Jackson Hole summit. Dow Jones leader Salesforce jumped on strong earnin… [+6522 chars]"
        //     },
        //     {
        //         "source": {
        //             "id": "associated-press",
        //             "name": "Associated Press"
        //         },
        //         "author": "Alexandra Olson",
        //         "title": "Half of US workers favor employee shot mandate: AP-NORC poll - Associated Press",
        //         "description": "NEW YORK (AP) — Half of American workers are in favor of vaccine requirements at their workplaces, according to a new poll , at a time when such mandates gain traction  following the federal government's full approval of Pfizer's COVID-19 vaccine.",
        //         "url": "https://apnews.com/article/lifestyle-business-health-travel-coronavirus-pandemic-1afb2682d6e08cdb54c5131f967f278a",
        //         "urlToImage": "https://storage.googleapis.com/afs-prod/media/14d1bd007f9a4d2399b8fa8106ab716e/3000.jpeg",
        //         "publishedAt": "2021-08-26T12:08:14Z",
        //         "content": "NEW YORK (AP) Half of American workers are in favor of vaccine requirements at their workplaces, according to a new poll, at a time when such mandates gain traction following the federal governments … [+5058 chars]"
        //     },
        //     {
        //         "source": {
        //             "id": null,
        //             "name": "CNBC"
        //         },
        //         "author": "Magdalena Petrova",
        //         "title": "The International Space Station will soon be retired, but a replacement likely won't come from NASA - CNBC",
        //         "description": "The International Space Station will likely be retired within the decade. NASA hopes to save money by having commercial companies build the next space outpost.",
        //         "url": "https://www.cnbc.com/2021/08/26/heres-why-the-next-space-station-will-be-commercial.html",
        //         "urlToImage": "https://image.cnbcfm.com/api/v1/image/106933045-1629902815272-51382291327_518a3dbfe2_o.jpg?v=1629902994",
        //         "publishedAt": "2021-08-26T12:00:01Z",
        //         "content": "The International Space Station got its start in 1998 when its first segments were launched, and it's now starting to show its age.\r\nSince 2000, the ISS has continuously housed a rotating group of as… [+1109 chars]"
        //     },
        //     {
        //         "source": {
        //             "id": "cbs-news",
        //             "name": "CBS News"
        //         },
        //         "author": "Zoe Zoe",
        //         "title": "ESPN takes Rachel Nichols off NBA coverage and cancels her show - CBS News",
        //         "description": "The decision follows backlash over leaked comments she made about her former colleague Maria Taylor.",
        //         "url": "https://www.cbsnews.com/news/rachel-nichols-espn-nba-coverage-the-jump/",
        //         "urlToImage": "https://cbsnews2.cbsistatic.com/hub/i/r/2021/07/06/0352871d-80b0-4f8d-85c9-d4333104c31e/thumbnail/1200x630/241e1a216055a5c5320855935f978bee/gettyimages-1091906438.jpg",
        //         "publishedAt": "2021-08-26T11:41:11Z",
        //         "content": "ESPN is pulling reporter Rachel Nichols from its NBA coverage and canceling her show \"The Jump,\" the network confirmed Wednesday. The decision follows backlash over leaked comments she made about her… [+1625 chars]"
        //     }
    ]

    constructor() {
        super();
        // console.log("Hello I am a constructor from News component");
        this.state = {
            // articles: this.articles, // this is used when articles array is used
            articles: [],
            // loading shows when website take time to load news articles
            loading: false,
            page: 1

        }
    }

    // When we don't pass props then default props will show
    static defaultProps = {
        country: 'in',
        pageSize: 8,
        heading: 'Everything',
        category: 'general',
    }

    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        heading: PropTypes.string,
        category: PropTypes.string,         
    }

    // this componentDidMount() get all present time articles fetches from given url. We didn't have to add articles in array
    async componentDidMount() {
        // console.log("cdm");
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=389c9272bd9c40468a52c682c63cd8b3&page=1&pageSize=${this.props.pageSize}`;
        this.setState({loading:true});
        let data = await fetch(url);
        let parsedData = await data.json()

        // console.log(parsedData);

        this.setState({ 
            articles: parsedData.articles, 
            totalResults: parsedData.totalResults,
            loading: false,
        })
    }

    // when user click on previous then previous page i.e page 1 will be displayed
    handlePrevClick = async () => {
        console.log("Previous")

        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=389c9272bd9c40468a52c682c63cd8b3&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
        this.setState({loading:true});
        let data = await fetch(url);
        let parsedData = await data.json()

        // console.log(parsedData);

        this.setState({
            page: this.state.page - 1,
            articles: parsedData.articles,
            loading: false,
        })

    }

    // when user click on next then next page i.e page 2 will be displayed
    handleNextClick = async () => {
        // console.log("Next")
        // Math.ceil of 5.8 is 6. It's gets highest integer of float
        if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize))) {

            let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=389c9272bd9c40468a52c682c63cd8b3&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
            this.setState({loading:true});
            let data = await fetch(url);
            let parsedData = await data.json()

            // console.log(parsedData);

            this.setState({
                page: this.state.page + 1,
                articles: parsedData.articles,
                loading: false,
            })
        }
    }

    render() {
        // console.log("render")
        return (
            <div className="container my-3">
                <h1 className="text-center" style={{margin: '30px 0px'}}>NewsMonkey - {this.props.heading}</h1>
                {this.state.loading && <Spinnner />} {/* this says when this.state.loading is true then only show loading  */}
                <div className=" row">
                    {!this.state.loading && this.state.articles.map((element) => {
                        return <div className="col-md-4" key={element.url}>
                            {/* Below we are using slice operator to slice particular title and description */}
                            {/* <NewsItem title={element.title?element.title.slice(0, 45):""} description={element.description?element.description.slice(0, 88):""} imageUrl={element.urlToImage} newsUrl={element.url} /> */}

                            <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageUrl={element.urlToImage} newsUrl={element.url} />
                        </div>
                    })}
                    <div>
                        <div className="container d-flex justify-content-between">
                            <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous</button>

                            <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>

                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default News
