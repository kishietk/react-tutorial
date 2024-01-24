import React, { Component } from 'react';
import Card from './Card';
import axios from 'axios';
import Pagination from 'react-js-pagination';
import './Index.css';

export default class Example extends Component {
    constructor(props) {
        super(props);
        this.state = {
            eventList: [],
            activePage: 1,
            itemsCountPerPage: 1,
            totalItemsCount: 1,
            pageRangeDisplayed: 10,
        }
        this.handlePageChange = this.handlePageChange.bind(this);
    }


    handlePageChange(pageNumber) {
        axios
            .get('/api/event?page=' + pageNumber)
            .then(({ data }) => {
                this.setState({
                    eventList: data.data,
                    itemsCountPerPage: data.per_page,
                    totalItemsCount: data.total,
                    activePage: data.current_page,
                })
            });
    }

    componentDidMount() {
        this.handlePageChange(1)
    }

    render() {

        return (
            <div className="container">
                <h2>一覧</h2>
                <div className="cardGroup">
                    <div className="container card-wrap">
                        <div className="row">
                            {this.state.eventList.map((item) => (<Card
                                key={item.id}
                                title={item.title}
                                imagePath={item.image_path}
                                startDate={item.start_date}
                                address={item.address}
                            />))}
                        </div>
                        <Pagination
                            activePage={this.state.activePage}
                            itemsCountPerPage={this.state.itemsCountPerPage}
                            totalItemsCount={this.state.totalItemsCount}
                            pageRangeDisplayed={this.state.pageRangeDisplayed}
                            onChange={this.handlePageChange}
                            itemClass='page-item'
                            linkClass='page-link'
                        />
                    </div>
                </div>
            </div>

        );
    }
}

