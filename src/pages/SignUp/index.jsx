import { Container, Form, Background } from "./styles";
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { FiMail, FiLock, FiUser } from "react-icons/fi"
import { Link } from "react-router-dom"

export function SignUp() {
    return (
        <Container>

            <Background />

            <Form>
                <h1>SisNotes's</h1>
                <p>Escreva, salve, divirta-se!</p>

                <h2>Crie sua conta</h2>

                <Input 
                    placeholder="E-mail"
                    type="text"
                    icon={ FiMail }
                />
                <Input 
                    placeholder="Nome"
                    type="text"
                    icon={ FiUser }
                />
                <Input 
                    placeholder="Senha"
                    type="password"
                    icon={ FiLock }
                />

                <Button title="Cadastrar" />

                <Link to="/">Voltar para o logIn</Link>
            </Form>
        </Container>
    )
}