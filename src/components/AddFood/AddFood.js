import { useState } from "react"
import { Button, Form } from "react-bootstrap"

function AddFood({ foods, setFoods }) {
    const [form, setForm] = useState({
        name: "",
        calories: "",
        image: "",
        servings: ""
    })

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        setFoods([...foods, form])

        setForm({
            name: "",
            calories: "",
            image: "",
            servings: ""
        })
    }

    return (
        <Form onSubmit={ handleSubmit }>
            <Form.Group className="mb-3">
                <Form.Label>Nome do prato</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter email"
                    name="name"
                    onChange={ handleChange }
                    value={ form.name }
                />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Imagem do prato</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter email"
                    name="image"
                    onChange={ handleChange }
                    value={ form.image }
                />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Calorias do prato</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter email"
                    name="calories"
                    onChange={ handleChange }
                    value={ form.calories }
                />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Quantidade de porções</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter email"
                    name="servings"
                    onChange={ handleChange }
                    value={ form.servings }
                />
            </Form.Group>
            <Button className="mb-3" variant="primary" type="submit">
                Cadastrar
            </Button>
        </Form>
    )
}

export default AddFood