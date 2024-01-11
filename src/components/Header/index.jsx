import { Container, Profile, Logout } from "./styles";
import  { RiShutDownLine } from "react-icons/ri"

export function Header() {
    return (
        <Container>
            <Profile>
                <img
                    src="http://github.com/victorlima1488.png"
                    alt="Foto do usuário"
                />

                <div>
                    <span>Bem vindo</span>
                    <strong>Victor Lima</strong>
                </div>
            </Profile>

            <Logout>
                <RiShutDownLine />
            </Logout>
        </Container>
    )
}