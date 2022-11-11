import { Button, Form } from "react-bootstrap"

function SearchForm({ search, setSearch }) {
    const handleChange = (e) => {
        setSearch(e.target.value)
    }

    return (
        <Form className="d-flex">
            <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                value={ search }
                onChange={ handleChange }
            />
            <Button variant="outline-success">Buscar</Button>
        </Form>
    )
}
export default SearchForm