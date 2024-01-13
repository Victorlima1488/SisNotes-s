import { Container, Content, Links } from "./style";
import { Header } from "../../components/Header"
import { Button } from "../../components/Button"
import { Section } from "../../components/Section";
import { Tag } from "../../components/Tag";
import { ButtonText } from "../../components/ButtonText";

export function Details() {

    return (
        <Container>
            <Header />

            <main>
                <Content>
                    <ButtonText title="Excluir nota"/>

                    <h1>Introdução ao React</h1>

                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Eveniet aperiam deleniti temporibus! Iste eum rerum autem dignissimos,
                        amet aperiam sint aliquam voluptas cupiditate at dolores incidunt in totam exercitationem ipsa.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Eveniet aperiam deleniti temporibus! Iste eum rerum autem dignissimos,
                        amet aperiam sint aliquam voluptas cupiditate at dolores incidunt in totam exercitationem ipsa.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Eveniet aperiam deleniti temporibus! Iste eum rerum autem dignissimos,
                        amet aperiam sint aliquam voluptas cupiditate at dolores incidunt in totam exercitationem ipsa.
                    </p>

                    <Section title="Links úteis">
                        <Links>
                            <li><a href="#">https://www.google.com</a></li>
                            <li><a href="#">https://www.google.com</a></li>
                            <li><a href="#">https://www.google.com</a></li>
                        </Links>
                    </Section>

                    <Section title="Marcadores">
                        <Tag title="express"/>
                        <Tag title="nodejs"/>
                    </Section>

                    <Button title="Voltar"/>
                </Content>
            </main>
        </Container>
    )
  }