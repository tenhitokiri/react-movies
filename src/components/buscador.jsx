import { Component } from "react";
import { getMovies } from '../redux/actions/moviesActions';
import { connect } from 'react-redux';

class Buscador extends Component {
    handleSubmit(e) {
        e.preventDefault();
        const peliculaBuscar = e.target.buscador.value;
        this.props.getMovies(peliculaBuscar);
    }

    render() {
        const { loading, searchedMovies, error } = this.props;
        return (
            <>
                <h3>
                    Buscador de Peliculas
                </h3>
                <form onSubmit={(e) => this.handleSubmit(e)} >
                    <div>
                        <label htmlFor="buscador">Buscar:</label>
                        <input
                            type="text"
                            id="buscador"
                            name="buscador"
                            placeholder="Buscar una Pelicula..."
                        />
                        <button type="submit">Buscar</button>
                    </div>
                    {
                        loading ? <p>Cargando...</p> : (searchedMovies.length > 0) ?
                            <div>
                                <h3>
                                    Lista de Peliculas Encontradas
                                </h3>
                                <div>
                                    aqui va la lista
                                </div>
                            </div>
                            :
                            <div>
                                <h3>
                                    No se encontraron resultados
                                </h3>
                            </div>
                    }
                </form>
            </>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getMovies: title => dispatch(getMovies(title))
    }
}

const mapStateToProps = (state) => {
    return {
        searchedMovies: state.searchedMovies
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Buscador);