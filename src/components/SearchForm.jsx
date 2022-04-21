import { Search } from "@material-ui/icons";
import '../style/SearchForm.css'

const SearchForm = () => {

    return(
        <form>
            <Search />
            <input id="icon_prefix" type="text" className="validate"></input>
        </form>
    )
}

export default SearchForm;