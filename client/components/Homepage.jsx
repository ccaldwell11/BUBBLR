import React from 'react';
import axios from 'axios';
import HomeRandom from './homepageChildren/HomeRandom.jsx';
import Search from './homepageChildren/Search.jsx'
import HomeResults from './homepageChildren/HomeResults.jsx'
import EstDrinkPage from './homepageChildren/EstDrinkPage.jsx';
import { Routes, Route, Link } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap';
import NavFilter from './homepageChildren/NavFilter.jsx';
import FilteredPage from './homepageChildren/FilteredPage.jsx';



class Homepage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            results: []
        }
    }

    handleSearch = (searched) => {
        axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searched}`)
        .then((res) => {
            this.setState({ results: res.data.drinks || []})
            console.log(`'${searched}' was searched.`)
        })
        .catch((err) => {
            console.error('Error: Search not performed', err)
        })
    }

    render() {
        let { results } = this.state;
        return (
            <div>
               <h2> Bubblr Homepage </h2>
               <Search onSearch={this.handleSearch} />
               <NavFilter />
               <HomeRandom /> 
               {results.length > 0 && <HomeResults results={results} />}
               <Routes>
               {/* <Route path="/estdrink/:id" element={<EstDrinkPage />} /> */}
               {/* <Route path="/filtered" element={<EstDrinkPage />} />  */}
               </Routes>
            </div>
        )
    }
}

export default Homepage;
// return (
//   <div>
    // <h2> Bubblr Homepage </h2>
    // <Search />
    // <HomeRandom />
//   </div>
// );