import { Container } from "./style";
import { Header } from "../../components/Header"
import { Button } from "../../components/Button"
import { Section } from "../../components/Section";
import { Links } from "../../components/Section/styles";

export function Details() {

    return (
        <Container>
            <Header />
            <Section title="Links úteis">
                <Links>
                    <li>Item 1</li>
                    <li>Item 2</li>
                    <li>Item 3</li>
                </Links>
            </Section>
            <Button title="Voltar"/>
        </Container>
    )
  }