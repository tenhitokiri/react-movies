import { Component } from "react";
import { getMovies } from '../redux/actions/moviesActions';
import { connect } from 'react-redux';

class Buscador extends Component {
    handleSubmit(e) {
        e.preventDefault();
        const peliculaBuscar = e.target.buscador.value;
        getMovies(peliculaBuscar);
    }

    render() {
        return (
            <>
                <h3>
                    Buscador de Peliculas
                </h3>
                <form onSubmit={(e) => this.handleSubmit(e)} >
                    <div>
                        <label for="buscador">Buscar:</label>
                        <input
                            type="text"
                            id="buscador"
                            name="buscador"
                            placeholder="Buscar una Pelicula..."
                        />
                        <button type="submit">Buscar</button>
                    </div>
                </form>
            </ >
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getMovies: movies => dispatch(getMovies(movies))
    }
}


export default connect(null, mapDispatchToProps)(Buscador);